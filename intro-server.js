const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end("This is my first intentional node js website")
    } else if (req.url === '/about') {
        res.end("This Page tells you what this website is about")
    }else {
        res.end(`
            <h1>OOPS! Page not found</h1>
            <a href="/">Back to home</a>
        `)
    }
})

server.listen(5000);