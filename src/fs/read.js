import fs from "fs/promises";
import path from 'path';
import {fileURLToPath} from 'url';


const __filename = fileURLToPath(import.meta.url);
const __dirname  = path.dirname(__filename);

const pathToFileToRead = path.join(__dirname,'files',"fileToRead.txt")

const read = async () => {
    try {
        await fs.access(pathToFileToRead)

    } catch (error) {
        throw new Error ("FS opeartion failed")
    }

    const readContent = await fs.readFile(pathToFileToRead,"utf-8")
    console.log(readContent)
};

await read();