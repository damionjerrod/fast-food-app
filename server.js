const path = require('path');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const port = 8080;

const {getAllInventory, setNewItem} = require('./db.js');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/api/show', getAllInventory);
app.post('/api/add', setNewItem);

app.get('/index', function(req, res){
    res.send('you are requesting the index page');
});

app.listen(port, function(){
    console.log(`Server listening on port: ${port}`);
}); 