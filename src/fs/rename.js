import fs from "fs/promises";
import path from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const wrongFilePath = path.join(__dirname,"files","wrongFilename.txt");
console.log(wrongFilePath)
const properFilePath = path.join(__dirname,"files","properFilename.md");
console.log(properFilePath)

const rename = async () => {
    // Write your code here
};

await rename();