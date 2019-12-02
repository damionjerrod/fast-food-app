let http = require("http");
let path = require("path");
let fs = require("fs");
let port = 8080;

let server = http.createServer(function(req, res) {
    let filePath = '.' + req.url;
    if (filePath == './') {
        filePath = './index.html';
    }
    
    let extname = String(path.extname(filePath)).toLowerCase();
    let mimeTypes = {
        '.html': 'text/html',
        '.js': 'text/javascript',
        '.css': 'text/css',
        '.json': 'application/json',
        '.png': 'image/png',
        '.jpg': 'image/jpg',
        '.gif': 'image/gif',
        '.svg': 'image/svg+xml',
        '.wav': 'audio/wav',
        '.mp4': 'video/mp4',
        '.woff': 'application/font-woff',
        '.ttf': 'application/font-ttf',
        '.eot': 'application/vnd.ms-fontobject',
        '.otf': 'application/font-otf',
        '.wasm': 'application/wasm'
    };

    let contentType = mimeTypes[extname] || 'application/octet-stream';

    fs.readFile(filePath, function(error, html) {  
        if (error) {  
            res.writeHead(404);  
            res.write(error);  
            res.end();  
        } else {  
            res.writeHead(200, {  
                'Content-Type': contentType  
            });  
            res.write(html);  
            res.end();  
        }

        if (req.url == "/" || req.url == "/index.html") {
            console.log("Displaying: index.html");
        }
    });  
});

server.listen(port);
console.log(`Server listening on port: ${port}`);