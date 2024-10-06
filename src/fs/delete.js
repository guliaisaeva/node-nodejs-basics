import fs from "fs/promises";
import path from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname  = path.dirname(__filename);
const pathToRemoveFile =path.join(__dirname,"files","fileToRemove.txt")
const remove = async () => {
try {
await fs.access(pathToRemoveFile);
} catch (error) {
    throw new Error ("Fs operation failed")
}
await  fs.unlink(pathToRemoveFile);
console.log('File deleted successfully: fileToRemove.txt');
};



await remove();