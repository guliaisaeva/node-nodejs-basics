import fs from "fs/promises";
import path from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const wrongFilePath = path.join(__dirname,"files","wrongFilename.txt");
const properFilePath = path.join(__dirname,"files","properFilename.md");

const rename = async () => {
try {
    await fs.access(wrongFilePath);
} catch (error) {
    throw new Error ("Fs operation failed")
}
try {
    await fs.access(properFilePath);
    throw new Error ("Fs operation failed")

} catch (error) {
    if(error.code !=="ENOENT"){
        throw new Error ("Fs operation failed" + error.message)
    }
}
await fs.rename (wrongFilePath,properFilePath);
console.log("File renamed to properFilename.md!It is inside files folder.")

};

await rename();