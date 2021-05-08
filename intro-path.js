const path = require('path');
console.log(path.sep);
let location = path.join('/content', 'subfolder', 'first.txt');
let base = path.basename(location);
console.log(base);

let absolute = path.resolve(__dirname, 'content', 'subfolder', 'first.txt');
console.log(absolute);