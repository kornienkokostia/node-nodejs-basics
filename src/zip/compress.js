import { createGzip } from 'node:zlib';
import { pipeline } from 'node:stream';
import { createReadStream, createWriteStream } from 'node:fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const input = path.resolve(__dirname, 'files/fileToCompress.txt')
const output = path.resolve(__dirname, 'archive.gz')

const compress = async () => {
    const gzip = createGzip();
    const source = createReadStream(input);
    const destination = createWriteStream(output);
    pipeline(source, gzip, destination, (err) => {
        if (err) {
            console.error(err)
            process.exitCode = 1
        }
    })
};

await compress();