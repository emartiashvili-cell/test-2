const buttons = document.querySelectorAll(".add-cart");

let cart = 0;

const cartCount = document.querySelector("#cart-count");


buttons.forEach(button => {

    button.addEventListener("click", () => {

        cart++;

        cartCount.textContent = cart;

        alert("Product added to cart!");

    });

});




// Favourite ფუნქცია

const favorites = document.querySelectorAll(".favorite");


favorites.forEach(button => {

    button.addEventListener("click", () => {

        button.classList.toggle("active");

        console.log("Added to favourites ❤️");

    });

});




// Search ფუნქცია

const searchInput = document.querySelector("#search");

const products = document.querySelectorAll(".card");


searchInput.addEventListener("input", () => {

    const searchValue = searchInput.value.toLowerCase();


    products.forEach(product => {

        const productName = product.querySelector("h3").textContent.toLowerCase();


        if (productName.includes(searchValue)) {

            product.style.display = "block";

        } else {

            product.style.display = "none";

        }

    });

}); 