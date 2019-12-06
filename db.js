const mysql = require('mysql');
const fs = require('fs');

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

module.exports = {
    getAllInventory: (req, res) => {
        let itemSelect = 'SELECT * FROM inventory';
        db.query(itemSelect, (err, result) => {
            if(!err) {
                return res.send(result);
            } else {
                console.log(err);
            }
        });
    },
    setNewItem: (req, res) => {
        let itemName = req.body.name;
        let itemCount = req.body.count;
        let itemInsert = `INSERT INTO inventory (item_name, item_count) VALUES ("${itemName}", ${itemCount})`;
        db.query(itemInsert, (err, result) => {
            if(!err) {
                console.log(result);
                console.log("Items Successfully Added to Database");
            } else {
                console.log(err);
            }
        });
    }
}


// function setNewItem(itemName, itemCount){
//     let itemInsert = `INSERT INTO inventory (item_name, item_count) VALUES ("${itemName}", ${itemCount})`;
//     db.query(itemInsert, function(err, result){
//         if(!err){
//         console.log(result);
//         console.log("Items Successfully Added to Database");
//         } else {
//         console.log(err);
//         }
//     })
// };