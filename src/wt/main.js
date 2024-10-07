import { Worker } from 'worker_threads';
import os from 'os';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const performCalculations = async () => {
    const numberOfCores = os.cpus().length;
    const resulContainer =[];
    const workersContainer =[];

    for (let i= 0; i<numberOfCores; i++){
        const worker = new Worker(path.join(__dirname, 'worker.js'), { type: 'module' });
        workersContainer.push(worker);
        const numberToSend = 10 + i;
        console.log(`Sending number ${numberToSend} to worker ${i}`);
        worker.postMessage(numberToSend);

        worker.on('message', (message) => {
            resulContainer[i] = message;

            if (resulContainer.length === numberOfCores && !resulContainer.includes(undefined)) {
                console.log(resulContainer);
            }
        });

        worker.on('error', () => {
            resulContainer[i] = { status: 'error', data: null };
            if (resulContainer.length === numberOfCores && !resulContainer.includes(undefined)) {
                console.log(resulContainer);
            }
        });

        worker.on('exit', (code) => {
            if (code !== 0) {
                console.error(`Worker stopped with exit code ${code}`);
            }
        });

    }
};

await performCalculations();

