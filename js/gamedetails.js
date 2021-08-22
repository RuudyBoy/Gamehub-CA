const detailConatiner = document.querySelector(".details-container");

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
console.log(id);



const detailsResults = document.querySelector(".details-results");
const gameContainer = document.querySelector(".gameName");
gameContainer.innerHTML = id;


detailsResults.innerHTML = "";

const url = "http://localhost/flower-power/wp-json/wc/store/products/" + id;
console.log(url);

async function fetchBook() {

    try {

        const response = await fetch(url);
        const details = await response.json();

        console.log(details);

        createHTML(details);

    }

    catch (error) {
        console.log("error");
        detailsResults.innerHTML = "An error has occured :("
    }
}

fetchBook();


function createHTML(details) {

    detailsResults.innerHTML =`<h2> Product name: ${details.name}</h2>
    <div class="details-text"> ${details.description} 
    <p> Product price: ${details.prices.price} </p> </div>`;

}
