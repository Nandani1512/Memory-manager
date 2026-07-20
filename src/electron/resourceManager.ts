import osUtils from 'os-utils';
import fs from 'fs';
import os from 'os';
import { BrowserWindow, Notification } from 'electron';
import { ipcWebContentsSend } from './util.js';
import si from 'systeminformation';

const POLLING_INTERVAL = 500;

// Notification thresholds
const CPU_THRESHOLD = 0.9;
const RAM_THRESHOLD = 0.9;
const NOTIFICATION_COOLDOWN_MS = 60_000; // 60 seconds between notifications

let lastCpuNotificationTime = 0;
let lastRamNotificationTime = 0;

export function pollResource(mainWindow: BrowserWindow) {
  const intervalId = setInterval(async () => {
    if (mainWindow.isDestroyed()) {
      clearInterval(intervalId);
      return;
    }

    const cpuUsage = await getCpuUsage();
    const ramUsage = getRamUsage();
    const storageData = getStorageData();
    
    let networkUsage = 0;
    try {
      const networkData = await si.networkStats();
      const totalBytes = networkData[0] ? (networkData[0].rx_sec + networkData[0].tx_sec) : 0;
      // Chart scale: Assume 100 MB/s is 100% (104,857,600 bytes)
      networkUsage = Math.min(totalBytes / 104857600, 1);
    } catch (e) {
      // fallback
    }

    let batteryLevel = 0;
    try {
      const batteryData = await si.battery();
      batteryLevel = batteryData.hasBattery ? batteryData.percent / 100 : 0;
    } catch (e) {
      // fallback
    }

    ipcWebContentsSend('statistics', mainWindow.webContents, {
      cpuUsage,
      ramUsage,
      storageUsage: storageData.usage,
      networkUsage,
      batteryLevel,
    });

    // High-usage notifications
    checkAndNotify('CPU', cpuUsage, CPU_THRESHOLD, lastCpuNotificationTime, (t) => {
      lastCpuNotificationTime = t;
    });
    checkAndNotify('RAM', ramUsage, RAM_THRESHOLD, lastRamNotificationTime, (t) => {
      lastRamNotificationTime = t;
    });
  }, POLLING_INTERVAL);

  return () => clearInterval(intervalId);
}

function checkAndNotify(
  label: string,
  usage: number,
  threshold: number,
  lastNotifyTime: number,
  setLastNotifyTime: (t: number) => void
) {
  const now = Date.now();
  if (usage > threshold && now - lastNotifyTime > NOTIFICATION_COOLDOWN_MS) {
    setLastNotifyTime(now);
    if (Notification.isSupported()) {
      new Notification({
        title: `High ${label} Usage`,
        body: `${label} is at ${Math.round(usage * 100)}%`,
      }).show();
    }
  }
}

export async function getStaticData() {
  const totalStorage = getStorageData().total;
  const cpuModel = os.cpus()[0].model;
  const totalMemoryGB = Math.floor(osUtils.totalmem() / 1024);

  let networkInterface = 'Network';
  let batteryModel = 'Desktop PC (No Battery)';

  try {
    const defaultInterfaceName = await si.networkInterfaceDefault();
    if (defaultInterfaceName) {
      networkInterface = defaultInterfaceName;
    }
    
    const batteryData = await si.battery();
    if (batteryData.hasBattery) {
      batteryModel = `${batteryData.manufacturer} ${batteryData.model}`.trim() || 'Internal Battery';
    }
  } catch (e) {
    // fallback to defaults if si fails
  }

  return {
    totalStorage,
    cpuModel,
    totalMemoryGB,
    networkInterface,
    batteryModel,
  };
}

function getCpuUsage(): Promise<number> {
  return new Promise((resolve) => {
    osUtils.cpuUsage(resolve);
  });
}

function getRamUsage() {
  return 1 - osUtils.freememPercentage();
}

function getStorageData() {
  // requires node 18
  const stats = fs.statfsSync(process.platform == 'win32' ? 'C://' : '/');
  const total = stats.bsize * stats.blocks;
  const free = stats.bsize * stats.bfree;

  return {
    total: Math.floor(total / 1_000_000_000),
    usage: 1 - free / total,
  };
}