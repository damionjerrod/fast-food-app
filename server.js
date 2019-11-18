let http = require("http");
let url = require("url");

let server = http.createServer((function(req, res) {
    res.writeHead(200, {
        "Content-Type": "text/plain"
    });
    res.end("Hello World\n");
}));
server.listen(5000);
