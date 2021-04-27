import path from 'path';
import csv from 'csvtojson';

const root = process.cwd();
const dataPath = 'src/data';

const getData = async <T>(fileName: string): Promise<T[]> => {
  try {
    const data = await csv().fromFile(path.join(root, dataPath, fileName));
    return Promise.resolve(data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export default getData;
