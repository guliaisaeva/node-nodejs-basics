import { createWriteStream } from "fs";
import path from "path";
const write = async () => {
  // Write your code here
  try {
    const filePath = path.join(
      process.cwd(),
      "src/streams/files/fileToWrite.txt"
    );
    const writeStream = createWriteStream(filePath);
    process.stdin.pipe(writeStream);

    writeStream.on("error", (error) => {
      console.error(`Error writing to file: ${error.message}`);
    });
  } catch (error) {
    console.error(`Error writing to file: ${error.message}`);
  }
};

await write();
