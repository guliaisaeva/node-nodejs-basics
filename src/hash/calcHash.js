import fs from 'fs';
import crypto from 'crypto';
import  path from "path";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename);
const pathToFile = path.join(__dirname,"files",'fileToCalculateHashFor.txt');
const calculateHash = async () => {
    const hash =crypto.createHash('sha256');
    const readStream = fs.createReadStream(pathToFile);

    readStream.on('data',(chunk)=>{
        hash.update(chunk);
    })
    readStream.on('end',()=>{
        const result =hash.digest('hex');
        console.log(`SHA-256 Hash: ${result}`)
    })
    readStream.on('error', (error) => {
        console.error(`Error reading the file: ${error.message}`);
    });
};

await calculateHash();