const fs = require('fs');

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