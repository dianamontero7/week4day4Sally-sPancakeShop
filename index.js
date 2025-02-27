
let pancakeOrderButtonHTML = document.getElementById("pancakeOrderButton")
pancakeOrderButtonHTML.addEventListener("click", function() {

    //These lines (7 - 11) create a new order element using the document variable (lines 17 - 19 is an order element)
    let orderElementDiv = document.createElement("div")
    orderElementDiv.className = "order"
    let orderElementImage = document.createElement("img")
    orderElementImage.src = "./assets/pancakes.png"
    orderElementDiv.appendChild(orderElementImage)

    //👇PART 2 CODE SNIPPET HERE👇

    
    let ordersHTML = document.getElementById("orders") // This line select the orders div and save it to a variable

    ordersHTML.appendChild(orderElementDiv)  // This line inject the new order element into the orders div using innerHTML

})



let coffeeOrderButtonHTML = document.getElementById("coffeeOrderButton")
coffeeOrderButtonHTML.addEventListener("click", function() {
    //*** YOUR JAVASCRIPT CODE HERE ***


})
