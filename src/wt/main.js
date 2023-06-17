import { cpus } from 'os'
import { Worker } from 'worker_threads'
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const performCalculations = async () => {
    const numberOfCores = cpus().length;
    const workerPromises = []
    const results = [];

    for (let i = 10; i < 10 + numberOfCores; i++) {
        (workerPromises.push(
            new Promise((resolve, reject) => {
                const worker = new Worker(path.resolve(__dirname, 'worker.js'), {
                    workerData: i
                });
                worker.on('message', (result) => resolve(result));
                worker.on('error', (error) => reject(error));
            }
            )))
    }
    for (let promise of workerPromises) {
        try {
            const result = await promise;
            results.push({ status: 'resolved', data: result });
        } catch (error) {
            console.log(`Error in worker: ${error}`);
            results.push({ status: 'error', data: null });
        }
    }

    console.log(results);
};

await performCalculations();