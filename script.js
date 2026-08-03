let cart = 0;


const cartText = document.getElementById("cart");


const addButtons = document.querySelectorAll(".add-cart");


addButtons.forEach(button => {

    button.addEventListener("click", () => {

        cart++;

        cartText.innerHTML = "Cart: " + cart;

        alert("Product added to cart");

    });

});



const favoriteButtons = document.querySelectorAll(".favorite");


favoriteButtons.forEach(button => {


    button.addEventListener("click", () => {


        button.classList.toggle("active");


        if(button.classList.contains("active")){

            button.innerHTML = "♥ Favorited";

        }
        else{

            button.innerHTML = "♡ Favorite";

        }


    });


});





const search = document.getElementById("search");


const cards = document.querySelectorAll(".card");


search.addEventListener("input", () => {


    const value = search.value.toLowerCase();


    cards.forEach(card => {


        const name = card.querySelector("h3").innerHTML.toLowerCase();


        if(name.includes(value)){

            card.style.display = "block";

        }
        else{

            card.style.display = "none";

        }


    });


});