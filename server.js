let http = require("http");
let url = require("url");
let fs = require("fs");
const port = 8080;

let server = http.createServer(function(req, res) {
    fs.readFile("./index.html", function(error, html) {  
        if (error) {  
            res.writeHead(404);  
            res.write(error);  
            res.end();  
        } else {  
            res.writeHead(200, {  
                'Content-Type': 'text/html'  
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