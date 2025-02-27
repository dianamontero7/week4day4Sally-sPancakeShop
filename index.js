
/*let pancakeOrderButtonHTML = document.getElementById("pancakeOrderButton")
pancakeOrderButtonHTML.addEventListener("click", function() {


    //These lines (7 - 11) create a new order element using the document variable (lines 17 - 19 is an order element)
    let orderElementDiv = document.createElement("div")
    orderElementDiv.className = "order"
    let orderElementImage = document.createElement("img")
    orderElementImage.src = "./assets/pancakes.png"
    orderElementDiv.appendChild(orderElementImage)

    //👇PART 2 CODE SNIPPET HERE👇

    let readyButton = document.createElement("button")
    readyButton.innerText = "Ready"
    readyButton.addEventListener("click", function(event) {
        let parentElement = event.target.parentElement
        parentElement.remove()
    })
    orderElementDiv.appendChild(readyButton)


    


    
    let ordersHTML = document.getElementById("orders") // This line select the orders div and save it to a variable

    ordersHTML.appendChild(orderElementDiv)  // This line inject the new order element into the orders div using innerHTML



});



let pancakeDoubleOrderButtonHTML = document.getElementById("pancakeDoubleOrderButton")
pancakeDoubleOrderButtonHTML.addEventListener("click", function() {


    for (let i = 0; i < 2; i++) {
    //These lines (7 - 11) create a new order element using the document variable (lines 17 - 19 is an order element)
    let orderElementDiv = document.createElement("div")
    orderElementDiv.className = "order"
    let orderElementImage = document.createElement("img")
    orderElementImage.src = "./assets/pancakes.png"
    orderElementDiv.appendChild(orderElementImage)

    //👇PART 2 CODE SNIPPET HERE👇

    let readyButton = document.createElement("button")
    readyButton.innerText = "Ready"
    readyButton.addEventListener("click", function(event) {
        let parentElement = event.target.parentElement
        parentElement.remove()
    })
    orderElementDiv.appendChild(readyButton)


    


    
    let ordersHTML = document.getElementById("orders") // This line select the orders div and save it to a variable

    ordersHTML.appendChild(orderElementDiv)  // This line inject the new order element into the orders div using innerHTML

}

})



let coffeeOrderButtonHTML = document.getElementById("coffeeOrderButton")
coffeeOrderButtonHTML.addEventListener("click", function() {
    
    let orderElementDiv = document.createElement("div")
    orderElementDiv.className = "order"
    let orderElementImage = document.createElement("img")
    orderElementImage.src = "./assets/coffee.png"
    orderElementDiv.appendChild(orderElementImage)

    //👇PART 2 CODE SNIPPET HERE👇

    let readyButton = document.createElement("button")
    readyButton.innerText = "Ready"
    readyButton.addEventListener("click", function(event) {
        let parentElement = event.target.parentElement
        parentElement.remove()
    })
    orderElementDiv.appendChild(readyButton)


    
    let ordersHTML = document.getElementById("orders") // This line select the orders div and save it to a variable

    ordersHTML.appendChild(orderElementDiv)  


})

let coffeeDoubleOrderButtonHTML = document.getElementById("coffeeDoubleOrderButton")
coffeeDoubleOrderButtonHTML.addEventListener("click", function() {
    
    for (let i = 0; i < 2; i++) {
    let orderElementDiv = document.createElement("div")
    orderElementDiv.className = "order"
    let orderElementImage = document.createElement("img")
    orderElementImage.src = "./assets/coffee.png"
    orderElementDiv.appendChild(orderElementImage)

    //👇PART 2 CODE SNIPPET HERE👇

    let readyButton = document.createElement("button")
    readyButton.innerText = "Ready"
    readyButton.addEventListener("click", function(event) {
        let parentElement = event.target.parentElement
        parentElement.remove()
    })
    orderElementDiv.appendChild(readyButton)


    
    let ordersHTML = document.getElementById("orders") // This line select the orders div and save it to a variable

    ordersHTML.appendChild(orderElementDiv)  

    }
}) */


    let pancakeOrderButton = document.getElementById("pancakeOrderButton");

    pancakeOrderButton.addEventListener("click", function(){


    let pancakeInputHTML = document.getElementById("pancakeInput");

    let numberOfPancakeOrders = pancakeInputHTML.value;

    for(let i = 0; i < numberOfPancakeOrders; i++){

        let orderElementDiv = document.createElement("div")
        orderElementDiv.className = "order"
        let orderElementImage = document.createElement("img")
        orderElementImage.src = "./assets/pancakes.png"
        orderElementDiv.appendChild(orderElementImage)


        let readyButton = document.createElement("button")
        readyButton.innerText = "Ready"
        readyButton.addEventListener("click", function(event) {
            let parentElement = event.target.parentElement
            parentElement.remove()
        })
        orderElementDiv.appendChild(readyButton)
        
        let ordersHTML = document.getElementById("orders") 

        ordersHTML.appendChild(orderElementDiv)  
    }



    })


    let coffeeOrderButton = document.getElementById("coffeeOrderButton");

    coffeeOrderButton.addEventListener("click", function(){


    let coffeeInputHTML = document.getElementById("coffeeInput");

    let numberOfCoffeeOrders = coffeeInputHTML.value;

    for(let i = 0; i < numberOfCoffeeOrders; i++){

        let orderElementDiv = document.createElement("div")
        orderElementDiv.className = "order"
        let orderElementImage = document.createElement("img")
        orderElementImage.src = "./assets/coffee.png"
        orderElementDiv.appendChild(orderElementImage)


        let readyButton = document.createElement("button")
        readyButton.innerText = "Ready"
        readyButton.addEventListener("click", function(event) {
            let parentElement = event.target.parentElement
            parentElement.remove()
        })
        orderElementDiv.appendChild(readyButton)
        
        let ordersHTML = document.getElementById("orders") 

        ordersHTML.appendChild(orderElementDiv)  
    }



    })