import { createWriteStream } from 'fs'
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const stream = createWriteStream(path.resolve(__dirname, 'files/fileToWrite.txt'),
    { encoding: 'utf-8' })

const write = async () => {
    process.stdin.on('data', (chunk) => {
        const chunkToString = chunk.toString()
        stream.write(chunkToString)
    })
};

await write();