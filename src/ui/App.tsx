import { useEffect, useMemo, useState } from 'react';
import './App.css';
import { useStatistics } from './useStatistics';
import { Chart } from './Chart';
import { Header } from './components/Header';
import { StatCard } from './components/StatCard';
import { useStaticData } from './hooks/useStaticData';

function App() {
  // Fallback for standard browsers
  if (!window.electron) {
    return (
      <div style={{ padding: '2rem', color: 'white', textAlign: 'center' }}>
        <h2>⚠️ Electron Environment Required</h2>
        <p>This app relies on native Node.js APIs and must be run inside Electron.</p>
        <p>Run <code>npm run dev</code> in one terminal, and <code>npm run electron:start</code> in another.</p>
      </div>
    );
  }

  const staticData = useStaticData();
  const statistics = useStatistics(10);
  const [activeView, setActiveView] = useState<View>('CPU');

  const cpuUsages = useMemo(
    () => statistics.map((stat) => stat.cpuUsage),
    [statistics]
  );
  const ramUsages = useMemo(
    () => statistics.map((stat) => stat.ramUsage),
    [statistics]
  );
  const storageUsages = useMemo(
    () => statistics.map((stat) => stat.storageUsage),
    [statistics]
  );
  const networkUsages = useMemo(
    () => statistics.map((stat) => stat.networkUsage),
    [statistics]
  );
  const batteryUsages = useMemo(
    () => statistics.map((stat) => stat.batteryLevel),
    [statistics]
  );

  const activeUsages = useMemo(() => {
    switch (activeView) {
      case 'CPU':
        return cpuUsages;
      case 'RAM':
        return ramUsages;
      case 'STORAGE':
        return storageUsages;
      case 'NETWORK':
        return networkUsages;
      case 'BATTERY':
        return batteryUsages;
    }
  }, [activeView, cpuUsages, ramUsages, storageUsages, networkUsages, batteryUsages]);

  const currentPercentage = useMemo(() => {
    if (!activeUsages || activeUsages.length === 0) return 0;
    return Math.round(activeUsages[activeUsages.length - 1] * 100);
  }, [activeUsages]);

  useEffect(() => {
    return window.electron.subscribeChangeView((view) => setActiveView(view));
  }, []);

  return (
    <div className="App">
      <Header />
      <div className="main">
        <div className="statCards">
          <StatCard
            onClick={() => setActiveView('CPU')}
            title="CPU"
            view="CPU"
            subTitle={staticData?.cpuModel ?? '—'}
            data={cpuUsages}
            isActive={activeView === 'CPU'}
          />
          <StatCard
            onClick={() => setActiveView('RAM')}
            title="RAM"
            view="RAM"
            subTitle={
              staticData ? `${staticData.totalMemoryGB} GB` : '—'
            }
            data={ramUsages}
            isActive={activeView === 'RAM'}
          />
          <StatCard
            onClick={() => setActiveView('STORAGE')}
            title="STORAGE"
            view="STORAGE"
            subTitle={
              staticData ? `${staticData.totalStorage} GB` : '—'
            }
            data={storageUsages}
            isActive={activeView === 'STORAGE'}
          />
          <StatCard
            onClick={() => setActiveView('NETWORK')}
            title="NETWORK"
            view="NETWORK"
            subTitle={staticData?.networkInterface ?? '—'}
            data={networkUsages}
            isActive={activeView === 'NETWORK'}
          />
          <StatCard
            onClick={() => setActiveView('BATTERY')}
            title="BATTERY"
            view="BATTERY"
            subTitle={staticData?.batteryModel ?? '—'}
            data={batteryUsages}
            isActive={activeView === 'BATTERY'}
          />
        </div>

        <div className="liveMonitor">
          <div className="liveMonitor-header">
            <div className="liveMonitor-label">
              <span className="liveMonitor-dot" />
              Live Monitor
            </div>
            <h2 className="liveMonitor-metric">{activeView}</h2>
          </div>
          <div className="liveMonitor-body">
            <div className="liveMonitor-percentage">
              <span className="liveMonitor-percentValue">{currentPercentage}</span>
              <span className="liveMonitor-percentSign">%</span>
            </div>
            <div className="liveMonitor-chart">
              <Chart
                selectedView={activeView}
                data={activeUsages}
                maxDataPoints={10}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;