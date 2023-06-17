import { createGunzip } from 'node:zlib';
import { pipeline } from 'node:stream';
import { createReadStream, createWriteStream } from 'node:fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const input = path.resolve(__dirname, 'archive.gz')
const output = path.resolve(__dirname, 'fileToCompress.txt')

const decompress = async () => {
    const unzip = createGunzip();
    const source = createReadStream(input);
    const destination = createWriteStream(output);
    pipeline(source, unzip, destination, (err) => {
        if (err) {
            console.error(err)
            process.exitCode = 1
        }
    })
};

await decompress();