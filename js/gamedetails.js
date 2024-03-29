
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
console.log(id);


const url = "https://organicflowerpower.org/wp-json/wp/v2/posts/" + id;


const postContainer = document.querySelector(".spesific-game");


postContainer.innerHTML ="";

async function fetchBook () {
    try {

        const response = await fetch(url);
        const details = await response.json();

        console.log(details);

        createHTML(details);

    }
    
    catch (error) {
     console.log("error");
     postContainer.innerHTML = "An error has occured :("
 }
}

fetchBook ();

function createHTML(details) {

    document.title = ` Article| ${details.title.rendered}`;

    postContainer.innerHTML =` <div class="postName"> <h1> ${details.title.rendered} </h1> <hr> </div>
    <div class="post-content">  ${details.content.rendered} </div>`;

}

