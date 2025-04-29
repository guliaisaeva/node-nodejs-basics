import fs from 'fs/promises';
import  path from "path";
import { fileURLToPath } from 'url';

const fileContent = "I am fresh and young";
const __filename = fileURLToPath(import.meta.url);
const __dirname  = path.dirname(__filename);

const pathToFile = path.join(__dirname,'files','fresh.txt')
const create = async () => {
    // Write your code here 
    try {
        await fs.access(pathToFile);
        throw new Error('FS operation failed')
    } catch (error) {
        if(error.code ==="ENOENT"){
    await fs.writeFile(pathToFile,fileContent)
    console.log("File content created!It is inside files folder.") }
    else{
        throw new Error('FS operation failed' + error.message);
    }
    }
};

await create();