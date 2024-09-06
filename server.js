const http = require('http');
const path = require('path');
const fs = require('fs');

// Response & Request 
const server = http.createServer((req, res) => {
    console.log(req.url);

    let filePath = '';

    if (req.url === '/about') {
        filePath = path.join(__dirname, 'about.html');
    } else if (req.url === '/services') {
        filePath = path.join(__dirname, 'service.html');
    } else if (req.url === '/home') {
        filePath = path.join(__dirname, 'homepage.html');
    } else {
        // Redirect to the homepage if no match
        filePath = path.join(__dirname, 'homepage.html');
    }

    // Read the data from the file 
    fs.readFile(filePath, (err, data) => {
        if (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Error loading the page');
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        }
    });
});

server.listen(3000, () => {
    console.log('Server is running on port 3000');
});
