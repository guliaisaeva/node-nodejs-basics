import { Worker } from 'worker_threads';
import os from 'os';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const performCalculations = async () => {
    const numberOfCores = os.cpus().length;
    console.log(numberOfCores)
};

await performCalculations();