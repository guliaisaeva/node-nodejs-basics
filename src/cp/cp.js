import {spawn} from 'child_process';
const spawnChildProcess = async (args) => {
    const child = spawn('node', ['src/cp/files/script.js', ...args], {
        stdio: ['pipe', 'pipe', 'inherit'],
    });

    process.stdin.on('data', (chunk) => {
        if (child.stdin.writable) {
            child.stdin.write(chunk);
        }
    });
    child.stdout.on('data', (data) => {
        console.log(`Received from child process: ${data}`);
    });

child.on('exit', (code) => {
    console.log(`Child process exited with code ${code}`);
});
}
const args = process.argv.slice(2);
console.log(`Total number of arguments is ${args.length}`);
console.log(`Arguments: ${JSON.stringify(args)}`);
// Put your arguments in function call to test this functionality
spawnChildProcess(args);


