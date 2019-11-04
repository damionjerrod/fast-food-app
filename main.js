var menu = {
    "hamburger": 0,
    "cheeseburger": 50,
    "fries": 50,
    "drinks": 50
}

var menuItem = Object.keys(menu);
var stock = Object.values(menu);

var customerOrder = undefined;
var order = undefined;

//gets data from input field and prints it on the screen
document.getElementById("submit").addEventListener("click", function() {
    customerOrder = document.getElementById("entree").value;
    document.getElementById("result").innerHTML = customerOrder;
    console.log(customerOrder);

    //converts order to string, clears whitespace, and separates it into an array
    customerOrder = customerOrder.toString().split(',').map(s => s.trim());
    order = customerOrder;
    console.log(order);

    //loops through array, separates item from amt, & clears whitespace
    for (i = 0; i < order.length; i++) {
        order[i] = order[i].split(':').map(s => s.trim());
        console.log(order[i][1]);
        console.log(menuItem);

        //checks if ordered item is on the menu & in stock
        if (!menu.hasOwnProperty(order[i][1])) {
            console.log("Item Not On Menu");
        } else if (checkStock()) {
            console.log("Item Out of Stock");
        } else {
            console.log(subInventory());
        }
    }
})

//clears input field after submission
document.getElementById("submit").addEventListener("click", function() {
    document.getElementById("entree").value = '';
})


//subtracts amount ordered from inventory
function subInventory() {
    return stock[i] - order[i][0];
}

//checks amount ordered against what's in inventory
function checkStock() {
    return order[i][0] >= stock[i];
}
