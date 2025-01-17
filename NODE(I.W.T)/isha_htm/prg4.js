// const hostname = '127.0.0.1';
// const port = 3000;

// const server =http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/html');
const http = require('http');
const fs=require("fs")

const hostname = '127.0.0.1';
const port = 3000;

const home = fs.readFileSync('./home.html')
const about = fs.readFileSync('./about.html')
const services = fs.readFileSync('./service.html')
const contact = fs.readFileSync('./contact.html')

const server = http.createServer((req, res) => {
    console.log(req.url)
    url = req.url
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');

    if (url == '/home')
    {
        res.end(home)
    }
    else if (url == '/about')
    {
        res.end(about)
    }
    else if (url == '/service')
    {
        res.end(services)
    }
    else if (url == '/contact')
    {
        res.end(contact)
    }
    else{
        res.statusCode=400;
        res.end("<h1>404 not found</h1>")
    }
})

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });