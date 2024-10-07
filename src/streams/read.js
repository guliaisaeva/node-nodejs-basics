import { createReadStream } from 'fs';
import path from 'path';

const read = async () => {
  try {
    const filePath = path.join(process.cwd(), 'src/streams/files/fileToRead.txt');
    const readStream = createReadStream(filePath, { encoding: 'utf8' });

    readStream.on('data', (chunk) => {
        process.stdout.write(chunk);
      });
    readStream.on('end', () => {
        console.log('\nFile reading completed.');
      });
    readStream.on('error', (error) => {
        console.error(`Error reading file: ${error.message}`);
      });

  } catch (error) {
    console.error(`Error reading file: ${error.message}`);
  }
};

await read();

