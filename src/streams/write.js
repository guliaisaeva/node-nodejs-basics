import {createWriteStream} from 'fs';
import path from 'path';

const write = async () => {
    try {
const filePath = path.join(process.cwd(), 'src/streams/files/fileToWrite.txt');
const writeStream = createWriteStream(filePath);
process.stdin.pipe(writeStream);
writeStream.on('finish', () => {
    console.log('Data successfully written to fileToWrite.txt');
  });
    } catch (error) {
        console.error(`Error writing to file: ${error.message}`)
    }

};

await write();