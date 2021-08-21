const detailConatiner = document.querySelector(".details-container");

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const gameName = params.get("name");
console.log(gameName);



const detailsResults = document.querySelector(".details-results");
const gameContainer = document.querySelector(".gameName");
gameContainer.innerHTML = gameName;


detailsResults.innerHTML = "";

const url = "http://localhost/flower-power/wp-json/wc/store/products/" + name;

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

    detailsResults.innerHTML = `<h1>${details.id}</h1>`;

}
