import { workerData, parentPort } from 'worker_threads';

const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = (result) => {
    parentPort.postMessage(result);
};

sendResult(nthFibonacci(workerData));