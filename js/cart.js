const cartItems = JSON.parse(localStorage.getItem("cartList"));
const cartContainer = document.querySelector(".cart_list");
const totalContainer = document.querySelector(".total");

console.log(cartItems);
let total = 0;
cartItems.forEach(function(cartElement) {
    total += cartElement.price;
    cartContainer.innerHTML += 
    `<div class="cart_item">
        <h4> ${cartElement.name} </h4>
        <div style="background-image: url("${cartElement.image}" class="cart_image")</div>
    </div>
    `

})
totalContainer.innerHTML = `Total: ${total}`;