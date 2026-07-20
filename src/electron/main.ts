import { app, BrowserWindow } from 'electron';
import { ipcMainHandle, ipcMainOn, isDev } from './util.js';
import { getStaticData, pollResource } from './resourceManager.js';
import { getPreloadPath, getUIPath } from './pathResolver.js';
import { createTray } from './tray.js';
import { createMenu } from './menu.js';
import { storeGet, storeSet } from './store.js';

app.on('ready', () => {
  // Restore saved window bounds or use defaults
  const savedBounds = storeGet('windowBounds', {
    width: 900,
    height: 700,
    x: undefined as number | undefined,
    y: undefined as number | undefined,
  });

  const mainWindow = new BrowserWindow({
    width: savedBounds.width,
    height: savedBounds.height,
    x: savedBounds.x,
    y: savedBounds.y,
    webPreferences: {
      preload: getPreloadPath(),
      contextIsolation: true,
      nodeIntegration: false,
      sandbox: true,
    },
    // disables default system frame (dont do this if you want a proper working menu bar)
    frame: false,
  });

  if (isDev()) {
    mainWindow.loadURL('http://localhost:5123');
  } else {
    mainWindow.loadFile(getUIPath());
  }

  // Save window bounds on resize and move (debounced)
  let boundsTimer: ReturnType<typeof setTimeout> | null = null;
  const saveBounds = () => {
    if (boundsTimer) clearTimeout(boundsTimer);
    boundsTimer = setTimeout(() => {
      if (!mainWindow.isDestroyed() && !mainWindow.isMinimized()) {
        storeSet('windowBounds', mainWindow.getBounds());
      }
    }, 500);
  };
  mainWindow.on('resize', saveBounds);
  mainWindow.on('move', saveBounds);

  const cleanupPolling = pollResource(mainWindow);

  ipcMainHandle('getStaticData', () => {
    return getStaticData();
  });

  ipcMainOn('sendFrameAction', (payload) => {
    switch (payload) {
      case 'CLOSE':
        mainWindow.close();
        break;
      case 'MAXIMIZE':
        mainWindow.maximize();
        break;
      case 'MINIMIZE':
        mainWindow.minimize();
        break;
    }
  });

  createTray(mainWindow);
  handleCloseEvents(mainWindow, cleanupPolling);
  createMenu(mainWindow);
});

function handleCloseEvents(
  mainWindow: BrowserWindow,
  cleanupPolling: () => void
) {
  let willClose = false;

  mainWindow.on('close', (e) => {
    if (willClose) {
      cleanupPolling();
      return;
    }
    e.preventDefault();
    mainWindow.hide();
    if (app.dock) {
      app.dock.hide();
    }
  });

  app.on('before-quit', () => {
    willClose = true;
  });

  mainWindow.on('show', () => {
    willClose = false;
  });
}