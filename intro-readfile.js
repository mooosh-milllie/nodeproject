const {writeFile, readFile} = require('fs');

// const first = readFileSync('./content/subfolder/first.txt', 'utf8');
// const second = readFileSync('./content/subfolder/second.txt', 'utf8');

// writeFileSync('./content/result.txt', `Here is your result: ${first} \n ${second}`, {flag: 'a'});
console.log('Programme start')
readFile('./content/result.txt', 'utf8',(err, res) => {
    if(err) {
        console.log(err);
        return;
    }
    let first = res;
    console.log(first);
    readFile('./content/subfolder/second.txt','utf8',(err, res) => {
        if(err) {
            console.log(err);
            return;
        }
        let second = res;
        writeFile('./content/biz.txt',`Here are the texts requested: ${first} and ${second}`, (err, res) => {
            if(err) {
                console.log(err);
                return;
            }
            console.log("file has been written");
        })
    })
})

console.log('Programme Done')