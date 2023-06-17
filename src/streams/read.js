import { createReadStream } from 'fs'
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const stream = createReadStream(path.resolve(__dirname, 'files/fileToRead.txt'),
    { encoding: 'utf-8' })

const read = async () => {
    let data = ''
    stream.on('data', chunk => {
        data += chunk
    })
    stream.on('end', () => process.stdout.write(data))
    stream.on('error', (err) => console.log(err.message))
};

await read();