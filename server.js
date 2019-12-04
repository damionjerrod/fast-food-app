const useDb = require('./db.js');
const http = require("http");
const path = require("path");
const url = require('url');
const fs = require("fs");
const express = require('express');
const port = 8080;
const app = express();

// let currentInventory = useDb.getAllInventory();
// let addInventory = useDb.setNewItem();
app.use(express.static(__dirname + '/public'));


// let parsedUrl = url.parse(req.url, true);

app.get('/index', function(req, res){
    res.send('you are requesting the index page');
});

app.get('/api/show', function(req, res){
    res.send(useDb.getAllInventory());
});

app.post('/api/add', function(req, res){
    
});


app.listen(port);
console.log(`Server listening on port: ${port}`);