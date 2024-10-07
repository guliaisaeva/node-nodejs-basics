import { createReadStream, createWriteStream } from 'fs';
import { createGzip } from 'zlib';
import path from 'path';

const compress = async () => {
    try {
        const filePath = path.join(process.cwd(), 'src/zip/files/fileToCompress.txt');
        const compressedFilePath = path.join(process.cwd(), 'src/zip/files/archive.gz');

        const readStream = createReadStream(filePath);
        const writeStream = createWriteStream(compressedFilePath);

        const gzip = createGzip();
        readStream.pipe(gzip).pipe(writeStream);
        writeStream.on('finish', () => {
            console.log('File successfully compressed to archive.gz');
        });
        readStream.on('error', (error) => {
            console.error(`Error reading the file: ${error.message}`);
        });
        writeStream.on('error', (error) => {
            console.error(`Error writing the file: ${error.message}`);
        });

    } catch (error) {
        console.error(`Error in compression: ${error.message}`);
    }
};

await compress();