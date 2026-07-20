import { describe, expect, test, vi, beforeEach } from 'vitest';

// Mock electron before importing resourceManager
vi.mock('electron', () => ({
  BrowserWindow: vi.fn(),
  Notification: {
    isSupported: vi.fn().mockReturnValue(true),
  },
}));

// Mock os-utils
vi.mock('os-utils', () => ({
  default: {
    cpuUsage: (cb: (val: number) => void) => cb(0.45),
    freememPercentage: () => 0.6,
    totalmem: () => 16384, // 16 GB in MB
  },
}));

// Mock fs
vi.mock('fs', () => ({
  default: {
    statfsSync: () => ({
      bsize: 4096,
      blocks: 244_000_000, // ~1TB
      bfree: 122_000_000, // ~500GB free
    }),
  },
}));

// Mock os
vi.mock('os', () => ({
  default: {
    cpus: () => [{ model: 'Test CPU Model' }],
  },
}));

// Must import AFTER mocks are set up
import { getStaticData } from './resourceManager.js';

describe('getStaticData', () => {
  test('returns correct shape with expected values', async () => {
    const data = await getStaticData();

    expect(data).toHaveProperty('totalStorage');
    expect(data).toHaveProperty('cpuModel');
    expect(data).toHaveProperty('totalMemoryGB');

    expect(typeof data.totalStorage).toBe('number');
    expect(data.cpuModel).toBe('Test CPU Model');
    expect(data.totalMemoryGB).toBe(16);
  });

  test('totalStorage is a reasonable positive number', async () => {
    const data = await getStaticData();
    expect(data.totalStorage).toBeGreaterThan(0);
  });
});
