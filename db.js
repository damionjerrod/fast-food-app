let mysql = require('mysql');

let db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "mydawson84",
    database: "fast_food",
    multipleStatements: true
});

db.connect((err) =>{
    if(!err){
        console.log("Connected to Database");
    } else {
        console.log("Connection Failed");
        console.error(err);
    }
});

function getAllInventory(){
    db.query('SELECT * FROM inventory', function(err, rows, fields){
        if(!err)
        console.log(rows);
        else
        console.log(err);
    })
};

function setNewItem(itemName, itemCount){
    let itemInsert = `INSERT INTO inventory (item_name, item_count) VALUES ("${itemName}", ${itemCount})`;
    db.query(itemInsert, function(err, result){
        if(!err){
        console.log(result);
        console.log("Items Successfully Added to Database");
        } else {
        console.log(err);
        }
    })
};


// console.log(setNewItem("Hamburger", 2));
console.log(getAllInventory());

module.exports = getAllInventory();
module.exports = setNewItem(itemName, itemCount);