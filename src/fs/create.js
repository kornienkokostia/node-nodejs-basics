import { writeFile } from 'node:fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const create = async () => {
    return await writeFile(path.resolve(__dirname, 'files/fresh.txt'), "I am fresh and young",
        { flag: 'wx' }).catch(() => {
            throw Error('FS operation failed')
        })
};

await create();