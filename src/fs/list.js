import fs from "fs/promises";
import path from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname  = path.dirname(__filename);
const  pathToFilesFolder = path.join(__dirname,"files");
const list = async () => {
    try {
        await fs.access(pathToFilesFolder);
    } catch (error) {
        throw new Error ("Fs operation failed");
    }

    const filesFolderContent = await fs.readdir(pathToFilesFolder);
    console.log(filesFolderContent)
    filesFolderContent.forEach(file=>console.log(file))
};

await list();