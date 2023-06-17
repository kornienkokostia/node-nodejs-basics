import { readdir, stat, mkdir, copyFile } from 'node:fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const copy = async () => {
    try {
        const moveFrom = path.resolve(__dirname, 'files');
        const moveTo = path.resolve(__dirname, 'files_copy');

        const files = await readdir(moveFrom);
        await mkdir(moveTo)

        for (const file of files) {
            const fromPath = path.join(moveFrom, file);
            const toPath = path.join(moveTo, file);
            await stat(fromPath);
            await copyFile(fromPath, toPath);
        }
    } catch {
        throw Error('FS operation failed')
    }
};

await copy();
