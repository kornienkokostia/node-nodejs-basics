import { readdir } from 'node:fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const list = async () => {
    try {
        const folder = path.resolve(__dirname, 'files')
        const files = await readdir(folder);
        for (const file of files) {
            const filePath = path.join(folder, file);
            console.log(path.parse(filePath).name)
        }
    } catch {
        throw Error('FS operation failed')
    }
};

await list();