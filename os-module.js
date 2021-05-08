const os = require('os');

let everything = {freemem: os.freemem(), uptime: os.uptime(), totalmem: os.totalmem(), userInfo: os.userInfo(), userVersion: os.version()};
console.log(everything);
