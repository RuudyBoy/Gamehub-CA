const baseUrl = "http://localhost/flower-power/wp-json/wc/store/products";
const productContainer = document.querySelector(".games");


async function getProducts(url) {
    const response = await fetch(url);
    const products = await response.json();
    console.log(products);
    products.forEach(function (product) {
        productContainer.innerHTML += ` <a href="gamesdetails.html?name=${product.name}">
            <div class="product"><h2>${product.name}</h2>
                <div class="product-image" style="background-image: url('${product.images[0].src}')</div>
        </div> </a>`;
    })
}

getProducts(baseUrl);

