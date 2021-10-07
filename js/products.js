const baseUrl = "https://organicflowerpower.org/wp-json/wp/v2/posts?_embed&per_page=9";
const productContainer = document.querySelector(".games");


async function getProducts(url) {
    const response = await fetch(url);
    
    const products = await response.json();
    console.log(products);
    products.forEach(function (product) {
        productContainer.innerHTML += ` <div class="product"> <a href="gamesdetails.html?id=${product.id}">
            <h2>${product.title.rendered}</h2>
            <img class="product_image" alt="${product._embedded[`wp:featuredmedia`][`0`].alt_text}" src="${product._embedded[`wp:featuredmedia`][`0`].source_url}"/></a>
            <a > </a>
        </div>  `;
    })
}

getProducts(baseUrl);

