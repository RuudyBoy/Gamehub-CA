const baseUrl = "https://organicflowerpower.org/wp-json/wp/v2/posts";
const productContainer = document.querySelector(".games");


async function getProducts(url) {
    const response = await fetch(url);
    const products = await response.json();
    console.log(products);
    products.forEach(function (product) {
        productContainer.innerHTML += ` <a href="gamesdetails.html?id=${product.id}">
            <div class="product"><h2>${product.title.rendered}</h2>
        </div> </a>`;
    })
}

getProducts(baseUrl);

