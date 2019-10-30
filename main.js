//Fast Food app (Frontend)

var menu = {
    "Hamburger": 50,
    "Cheesburger": 50,
    "Fries": 50
}

var customerOrder = undefined;
var order = [];

//gets data from input field and prints it
document.getElementById("submit").addEventListener("click", function() {
    customerOrder = document.getElementById("order").value;
    document.getElementById("result").innerHTML = customerOrder;
    customerOrder = customerOrder.split(',');
    order.push(customerOrder);
    console.log(order);
});

//clears input field after submission
document.getElementById("submit").addEventListener("click", function() {
    document.getElementById("order").value = '';
})

/* 
- Create an object named menu where we'll save the menu for the restaurant. For each property (Each property should be a string like "fries") and add a number as the value. That will be the amount of stock the store has.
- Take the customerOrder variable, (which should be a string) and split it on the comma character. Save the result to the order array variable. This will turn it into an array that is comma delimeted. Because usually there is a space after a comma we are going to need to trim the white space. - - This will make it so there is no extra white space.
- Create a loop (can be any kind of loop, while, for, foreach whatever you are comfortable with). Loop through the entire order array (from 0 to the length of the array)
- In the loop split each item of this array on the colon character. You will probably have to trim the leading and trailing whitespace again.
- Now that we have the customer's item they would like to order, create a conditional (if) statement and check to see if the customer actually ordered something off of the menu. This is going to require a for...in loop to loop through the menu object. Just check to see if the property exists. If it doesn't exist log to the console how the customer did not order something off of the menu.
- If the previous statement was true make another conditional statement that checks to see if there is enough stock in the restaurant to fulfill the customer's order. If there is not enough, then let the customer know that you can not fulfill that particular order.
- If the customer ordered something on the menu and it is in stock then deduct the number the customer ordered from the restaurant's stock.
- Bonus Create a button that you could click to display the restaurant's inventory.
*/