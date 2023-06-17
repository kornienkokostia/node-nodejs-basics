const parseEnv = () => {
    Object.entries(process.env).map(([key, val]) => {
        if (key.includes('RSS_')) {
            console.log(`${key}=${val}`)
        }
    })
};

parseEnv();