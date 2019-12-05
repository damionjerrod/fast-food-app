const mysql = require('mysql');
const path = require('path');
const bodyParser = require('body-parser');
// const fileUpload = require('express-fileupload');
const express = require('express');
const app = express();
const port = 8080;

//my modules:
const {getAllInventory, setNewItem} = require('./liveInventory.js');


//database connection:
let db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "mydawson84",
    database: "fast_food",
    multipleStatements: true
});

db.connect((err) => {
    if(!err){
        console.log("Connected to database");
    } else {
        console.log("Connection failed");
        console.log(err);
    }
});


app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/api/show', getAllInventory);
app.get('/index', function(req, res){
    res.send('you are requesting the index page');
});

// app.get('/api/show', function(req, res){
//     console.log(useDb.getAllInventory());
//     // res.send(currentInventory);
//     // console.log(typeof(currentInventory));
// });

// app.post('/api/add', function(req, res){
    
// });


app.listen(port, function(){
    console.log(`Server listening on port: ${port}`);
});