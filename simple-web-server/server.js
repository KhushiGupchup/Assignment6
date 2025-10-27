const http = require('http');
const fs = require('fs');
const path = require('path');

// Port to listen on
const PORT = 3000;

// Helper function to serve HTML files asynchronously
const serveFile = (filePath, contentType, response, statusCode = 200) => {
    fs.readFile(filePath, (err, content) => {
        if (err) {
            response.writeHead(500, { 'Content-Type': 'text/plain' });
            response.end('500 - Internal Server Error');
        } else {
            response.writeHead(statusCode, { 'Content-Type': contentType });
            response.end(content);
        }
    });
};

// Create server
const server = http.createServer((req, res) => {
    console.log(`Requested URL: ${req.url}`);

    if (req.url === '/home' || req.url === '/') {
        serveFile(path.join(__dirname, 'pages', 'home.html'), 'text/html', res);
    } else if (req.url === '/about') {
        serveFile(path.join(__dirname, 'pages', 'about.html'), 'text/html', res);
    } else if (req.url === '/contact') {
        serveFile(path.join(__dirname, 'pages', 'contact.html'), 'text/html', res);
    } 
     else {
        serveFile(path.join(__dirname, 'pages', '404.html'), 'text/html', res, 404);
    }
});

// Start server
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});
