import { readFile } from 'node:fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const read = async () => {
    try {
        const filePath = path.resolve(__dirname, 'files/fileToRead.txt');
        const contents = await readFile(filePath, { encoding: 'utf8' });
        console.log(contents);
    } catch (err) {
        throw Error('FS operation failed');
    }
};

await read();