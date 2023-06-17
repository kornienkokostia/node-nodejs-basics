import { unlink } from 'node:fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const remove = async () => {
    return await unlink(path.resolve(__dirname, 'files/fileToRemove.txt')).catch(() => {
        throw Error('FS operation failed')
    })
};

await remove();