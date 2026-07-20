type View = 'CPU' | 'RAM' | 'STORAGE' | 'NETWORK' | 'BATTERY';

type Statistics = {
  cpuUsage: number;
  ramUsage: number;
  storageUsage: number;
  networkUsage: number; // scaled 0-1
  batteryLevel: number; // scaled 0-1
};

type StaticData = {
  totalStorage: number;
  cpuModel: string;
  totalMemoryGB: number;
  networkInterface: string;
  batteryModel: string;
};

type EventPayloadMapping = {
  statistics: Statistics;
  getStaticData: StaticData;
  changeView: View;
  sendFrameAction: 'CLOSE' | 'MAXIMIZE' | 'MINIMIZE';
};

interface Window {
  electron: {
    subscribeStatistics: (callback: (stats: Statistics) => void) => () => void;
    subscribeChangeView: (callback: (view: View) => void) => () => void;
    getStaticData: () => Promise<StaticData>;
    sendFrameAction: (payload: 'CLOSE' | 'MAXIMIZE' | 'MINIMIZE') => void;
  };
}
