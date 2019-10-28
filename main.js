//Fast Food app (Frontend)

//gets data from input field and prints it
document.getElementById("submit").addEventListener("click", function() {
    var customerOrder = document.getElementById("order").value;
    console.log(customerOrder);
    return document.getElementById("result").innerHTML = customerOrder;
});

//clears input field after submission
document.getElementById("submit").addEventListener("click", function() {
    document.getElementById("order").value = '';
})