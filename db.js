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
    let itemSelect = 'SELECT * FROM inventory';
    db.query(itemSelect, function(err, rows, fields){
        if(!err)
        return rows;
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
// console.log(getAllInventory());

module.exports = {
    getAllInventory,
    setNewItem
}