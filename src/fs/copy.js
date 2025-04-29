import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const pathToFileFolder = path.join(__dirname, "files");
const pathToFilesCopyFolder = path.join(__dirname, "files_copy");

const copy = async () => {
  // Write your code here
  try {
    await fs.access(pathToFileFolder);
  } catch (error) {
    throw new Error("FS operation failed");
  }
  try {
    await fs.access(pathToFilesCopyFolder);
    throw new Error("Fs operation failed:copy exists");
  } catch (error) {
    if (error.code !== "ENOENT") {
      throw new Error("FS operation failed");
    }
  }

  await fs.mkdir(pathToFilesCopyFolder);

  const files = await fs.readdir(pathToFileFolder);

  await Promise.all(
    files.map(async (file) => {
      const sourceFile = path.join(pathToFileFolder, file);
      const destinationFile = path.join(pathToFilesCopyFolder, file);
      await fs.copyFile(sourceFile, destinationFile);
    })
  );
  console.log("Files copied successfully!They are inside files_copy folder");
};

await copy();
