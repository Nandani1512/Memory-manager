import osUtils from 'os-utils';
import { resolve } from 'path';
import fs from 'fs';
import os from 'os';
import { BrowserWindow } from 'electron';
import { ipcWebContentsSend } from './util.js';
const POLLING_INTERNAL = 500;
export function pollResource(mainWindow: BrowserWindow){
    setInterval(async ()=> {
     const cpuUsage = await  getCpuUsage();
     const ramUsage = getRamUsage();
     const storageData = getStorageData();
     ipcWebContentsSend('statistics', mainWindow.webContents, {
        cpuUsage, 
        ramUsage,
        storageUsage: storageData.usage,
     });
    }, POLLING_INTERNAL);
}

export function getStaticData(){
    const totalStorage = getStorageData().total;
    const cpuModel = os.cpus()[0].model;
    const totalMemoryGB = Math.floor(osUtils.totalmem()/1024);

    return{
        totalStorage,
        cpuModel,
        totalMemoryGB,

    };
}

function getCpuUsage() : Promise<number> {
    return new Promise((resolve) => {
        osUtils.cpuUsage(resolve);
    });
}
function getRamUsage(){
    return 1-osUtils.freememPercentage();
}
function getStorageData(){
    //require node 18
    const stats = fs.statfsSync(process.platform == 'win32' ? 'C://' : '/');
    const total = stats.bsize * stats.blocks;
    const free = stats.bsize * stats.bfree;

    return{
        total:Math.floor(total / 1_000_000_000),
        usage:1 - free / total,
    };
}