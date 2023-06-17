const parseArgs = () => {
    const data = process.argv.slice(2)
    const res = data.reduce((a, c, i) => {
        return i % 2 === 0 ? [...a, data.slice(i, i + 2)] : a;
    }, [])
    res.map(el => {
        console.log(`${el[0].slice(2)} is ${el[1]}`)
    })
};

parseArgs();