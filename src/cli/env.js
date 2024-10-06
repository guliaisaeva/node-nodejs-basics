const parseEnv = () => {
const allEnv = process.env

 const rssEnv = Object.entries(allEnv)
   .filter(([key]) => key.startsWith('RSS_'))
   .map(([key, value]) => `${key}=${value}`)
   .join('; ');

 console.log(rssEnv);
};

parseEnv();