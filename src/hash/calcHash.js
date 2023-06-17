import { readFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const filePath = path.resolve(__dirname, 'files/fileToCalculateHashFor.txt');

const calculateHash = async () => {
    const contents = await readFile(filePath, { encoding: 'utf8' });
    const result = createHash('sha256').update(contents).digest('hex');
    console.log(result);
};

await calculateHash();