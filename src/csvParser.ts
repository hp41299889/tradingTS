import * as fs from 'fs';
import * as path from 'path';
import * as csv from 'fast-csv';

const csvParser = () => {
    const data: object[] = [];
    const FILE_PATH = path.resolve(__dirname, '../assets', 'ticks.csv');
    return new Promise((resolve,reject) => {
        fs.createReadStream(FILE_PATH)
            .pipe(csv.parse({ headers: true }))
            .on('error', error => reject(error))
            .on('data', row => data.push(row))
            .on('end', () => resolve(data));
    });
};

export default csvParser;