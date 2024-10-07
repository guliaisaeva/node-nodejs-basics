import { createReadStream, createWriteStream } from 'fs';
import { createGunzip } from 'zlib';
import path from 'path';

const decompress = async () => {
    try {
        const inputFilePath = path.join(process.cwd(), 'src/zip/files/archive.gz'); // Path to the gzipped file
        const decompressedFilePath = path.join(process.cwd(), 'src/zip/files/fileToCompress.txt'); // Path to the output decompressed file

        const readStream = createReadStream(inputFilePath);
        const writeStream = createWriteStream(decompressedFilePath);
        const gunzip = createGunzip();

        readStream.pipe(gunzip).pipe(writeStream);

        writeStream.on('finish', () => {
            console.log('File successfully decompressed to fileToCompress.txt');
        });

        readStream.on('error', (error) => {
            console.error(`Error reading the file: ${error.message}`);
        });
        writeStream.on('error', (error) => {
            console.error(`Error writing the file: ${error.message}`);
        });
    } catch (error) {
        console.error(`Error in decompression: ${error.message}`);
    }};

await decompress();