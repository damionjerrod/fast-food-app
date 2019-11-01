var menu = {
    "hamburger": 50,
    "cheesburger": 50,
    "fries": 50,
    "drinks": 50
}

var customerOrder = undefined;
var order = [];

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
        console.log(order[i]);      
    }

    for (item in menu) {
        if (menu.hasOwnProperty(order[0][1])) {
            console.log("on menu");
        }
    }
})

//clears input field after submission
document.getElementById("submit").addEventListener("click", function() {
    document.getElementById("entree").value = '';
})

        //for (j = 0; j < order[i].length; j++) {
        //    console.log(order[i][j]);
        //}
