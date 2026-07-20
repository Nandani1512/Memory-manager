import { app } from 'electron';
import path from 'path';
import fs from 'fs';

const storePath = path.join(app.getPath('userData'), 'settings.json');

type StoreData = Record<string, unknown>;

let cache: StoreData | null = null;

function readStore(): StoreData {
  if (cache) return cache;
  try {
    const raw = fs.readFileSync(storePath, 'utf-8');
    cache = JSON.parse(raw);
    return cache!;
  } catch {
    cache = {};
    return cache;
  }
}

function writeStore(data: StoreData): void {
  cache = data;
  try {
    fs.writeFileSync(storePath, JSON.stringify(data, null, 2), 'utf-8');
  } catch {
    // silently fail if write is not possible
  }
}

export function storeGet<T>(key: string, defaultValue: T): T {
  const data = readStore();
  return key in data ? (data[key] as T) : defaultValue;
}

export function storeSet(key: string, value: unknown): void {
  const data = readStore();
  data[key] = value;
  writeStore(data);
}
