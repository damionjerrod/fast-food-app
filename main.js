var menu = {
    "hamburger": 50,
    "cheesburger": 50,
    "Fries": 50
}

var customerOrder = undefined;
var order = [];

//gets data from input field and prints it
document.getElementById("submit").addEventListener("click", function() {
    customerOrder = document.getElementById("entree").value;
    document.getElementById("result").innerHTML = customerOrder;
    console.log(customerOrder);
    customerOrder = customerOrder.split(',').map(s => s.trim());
    //used .map to loop through in order to trim whitespace
    
    order.push(customerOrder);
    console.log(order);

    for (i = 0; i < order.length; i++) {
        console.log(order[i]);
        for (j = 0; j < order[i].length; j++) {
            console.log(order[i][j]);
        }
    }

    
});

//clears input field after submission
document.getElementById("submit").addEventListener("click", function() {
    document.getElementById("entree").value = '';
})

