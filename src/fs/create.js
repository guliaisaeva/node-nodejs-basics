import fs from 'fs/promises';
import  path from "path";
import { fileURLToPath } from 'url';
const fileContent = "I am fresh and young"
const __filename = fileURLToPath(import.meta.url);
const __dirname  = path.dirname(__filename);
const pathToFile = path.join(__dirname,'files','fresh.txt')
console.log(pathToFile)
const create = async () => {
try {
    await fs.access(filePath);
    throw new Error('FS operation failed')
} catch (error) {
    if(error.code ==="ENOENT"){
console.log(fileContent)    }

}};

await create();