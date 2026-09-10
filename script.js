/* =========================
   EXPLORE PRODUCTS
========================= */

function exploreProducts() {

    document
        .getElementById("products")
        .scrollIntoView({
            behavior: "smooth"
        });

}


/* =========================
   ADD PRODUCT TO CART
========================= */

function addToCart() {

    let cart =
        JSON.parse(localStorage.getItem("cart")) || [];

    cart.push({
        name: "Smart Notebook",
        price: 499
    });

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    alert(
        "Smart Notebook has been added to your cart!"
    );

}


/* =========================
   BUY PRODUCT
========================= */

function buyProduct(productName) {

    alert(
        "You selected " +
        productName +
        ". Thank you for choosing Apple Notes!"
    );

}


/* =========================
   CONTACT
========================= */

function contactMessage() {

    alert(
        "Thank you for your interest in Apple Notes!"
    );

}


/* =========================
   SHOW CART
========================= */

function showCart() {

    let cart =
        JSON.parse(localStorage.getItem("cart")) || [];

    let cartItems =
        document.getElementById("cartItems");

    let total =
        document.getElementById("total");

    if (cartItems === null) {
        return;
    }

    cartItems.innerHTML = "";

    let totalPrice = 0;


    if (cart.length === 0) {

        cartItems.innerHTML =
            "<p>Your cart is empty.</p>";

        total.innerHTML =
            "Total: ₹0";

        return;
    }


    cart.forEach(function(product, index) {

        totalPrice += product.price;

        cartItems.innerHTML += `
            <div class="cart-item">

                <div>
                    <h3>${product.name}</h3>

                    <p>₹${product.price}</p>
                </div>

                <button
                    onclick="removeItem(${index})">
                    Remove
                </button>

            </div>
        `;

    });


    total.innerHTML =
        "Total: ₹" + totalPrice;

}


/* =========================
   REMOVE ITEM
========================= */

function removeItem(index) {

    let cart =
        JSON.parse(localStorage.getItem("cart")) || [];

    cart.splice(index, 1);

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    showCart();

}


/* =========================
   CHECKOUT
========================= */

function checkout() {

    let cart =
        JSON.parse(localStorage.getItem("cart")) || [];

    if (cart.length === 0) {

        alert("Your cart is empty.");

        return;
    }

    alert(
        "Thank you for your order! " +
        "This is a student project demo."
    );

}


/* =========================
   LOAD CART
========================= */

showCart();