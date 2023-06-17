import { spawn } from 'child_process'
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const pathToChild = path.resolve(__dirname, 'files/script.js')

export const spawnChildProcess = async () => {
    const myArguments = process.argv.slice(2);

    const child = spawn('node', [pathToChild, ...myArguments], {
        stdio: ['inherit', 'inherit', 'inherit', 'ipc']
    });

};

spawnChildProcess()
