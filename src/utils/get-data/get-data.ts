import fs from 'fs';
import path from 'path';
import csv from 'csvtojson';

const root = process.cwd();
const dataPath = 'src/data';

const getPath = (fileName: string) => {
  return path.join(root, dataPath, fileName);
};

export const getData = async <T>(fileName: string): Promise<T[]> => {
  try {
    const data = await csv({ delimiter: [',', ';'] }).fromFile(
      getPath(fileName)
    );
    return Promise.resolve(data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const getFiles = (dirname: string): string[] => {
  return fs.readdirSync(getPath(dirname));
};
