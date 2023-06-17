import { rename as renameFile } from 'node:fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const rename = async () => {
    return await renameFile(path.resolve(__dirname, 'files/wrongFilename.txt'),
        path.resolve(__dirname, 'files/properFilename.md')
    ).catch(() => {
        throw Error('FS operation failed')
    })
};

await rename();