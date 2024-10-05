import fs from 'fs/promises';
import  path from "path";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url)
console.log(__filename)
const __dirname = path.dirname(__filename);
console.log(__dirname)
const pathToFileFolder = path.join(__dirname,"files");
const pathToFilesCopyFolder = path.join(__dirname, "files_copy");

const copy = async () => {
    // Write your code here
};

await copy();
