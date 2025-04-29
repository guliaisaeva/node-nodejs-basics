const parseArgs = () => {
 
        const argsObj = process.argv.slice(2).reduce((acc, cur, idx, arr) => {
          if (cur.startsWith('--')) {
            acc[cur.slice(2)] = arr[idx + 1];
          }
          return acc;
        }, {});
      
        for (const [key, value] of Object.entries(argsObj)) {
          console.log(`${key} is ${value}`);
        }
      };
      

parseArgs();