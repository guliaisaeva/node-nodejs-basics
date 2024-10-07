const parseArgs = () => {
    const result = [];
    for (let i = 2; i < process.argv.length; i++) {
        if (process.argv[i].startsWith('--')) {
            const keyName =process.argv[i].slice(2);
            const value =process.argv[i+1]
            if(value){
                result.push(`${keyName} is ${value}`)
                i++;
            }
        }
    }
    console.log(result);
    console.log(result.join(', '));
};

parseArgs();