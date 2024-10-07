import { Transform } from 'stream';

const transform = async () => {
    try {
        const  rTransform = new Transform({
            transform(chunk, _encoding, callback) {
                const reversed = chunk.toString().split('').reverse().join('');
                callback(null, reversed);
            }})

            process.stdin.pipe(rTransform).pipe(process.stdout);

    } catch (error) {
        console.error(`Error in transformation: ${error.message}`);

    }


};

await transform();