import { gamesArray } from "./constants/productList.js";
console.log(gamesArray);
const gamesContainer = document.querySelector(".games");
const cart = document.querySelector(".cart");
const cartList = document.querySelector(".cart_list");
const totalContainer = document.querySelector(".total");
let cartArray = [];

gamesArray.forEach(function(games){
    gamesContainer.innerHTML +=
    `<div class="product">
    <h2>${games.name}</h2>
    <p>${games.description}</p>
    <div style="background-image: url("${games.image}" class="product_image")</div>
    <div class= "product_price"> ${games.price}</div>
    <button class= "product_button" data-product="${games.id}"> Add to cart </button>
    </div>`
})

const buttons = document.querySelectorAll("button"); 

buttons.forEach(function(button){
    button.onclick = function(event) {
        const itemToAdd = gamesArray.find(item => item.id === event.target.dataset.product);
        cartArray.push(itemToAdd);
        theCart(cartArray);
        localStorage.setItem("cartList" , JSON.stringify(cartArray));
    }
})

function theCart (cartItems) {
    cart.style.display = "flex";
    cartList.innerHTML= "";
    let total = 0;
    cartItems.forEach(function(cartElement){
        total += cartElement.price;
        cartList.innerHTML += 
        `<div class="cart_item">
        <h4>${cartElement.name}</h4>
        <div style="background-image: url(${cartElement.image})" class="cart_image"</div>
        </div>
        `

    })
    totalContainer.innerHTML = `Total: ${total}`;

}