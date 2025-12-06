let cart = [];
const cartButton =
document.getElementById("cartButton");
const shoppingCart =
document.getElementById("shoppingCart");
const closeCartButton =
document.getElementById("closedCart");
const cartCount =
document.getElementById("cartCount");
const cartItems =
document.getElementById("cartItems");
const totalPrice =
document.getElementById("totalPrice");

const addToCartButtons = document.querySelectorAll(".addToCart");


function addToCart(product) {
    const existingProduct = cart.find(item => item.id === product.id);
    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    updateCart();
}

function removeFromCart(productId) {
    cart = cart.filter)item => item.id !==productId);
    updateCart();
}

function updateCart() {
    cartCount.textContent = cart.reduce((total,item) => total + item.quantity, 0);
    cartItems.innerHTML = "";
    let total = 0;

    cart.forEach(item => {
        const cartItem=
        document.createElement("div");
        cartItem.classList.add("cart-item");
        cartItem.innerHTML ='<p>${item.name} x ${item.quantity} - $${(item.price * item.quantity).toFixed(2)}</p>
        <button onclick="removeFromCart(${item.id}">Remove</button>
        
        cartItems.appendChild(cartItem);
        total += item.price * item.quantity;
    });

    totalPrice.textContent = total.toFixed(2);
    
}

cartButton.addEventListener("click", () => {
    cartModal.style.display = "flex";
});

closeCartButton.addEventListener("click", () => {
    cartModal.style.display = "none";
});

addToCartButtons.forEach(button => {
    button.addEventListener("click", () => {
        const product = {
            id: button.dataset.product,
            name: button.dataset.name,
            price: parseFloat(button.dataset.price)
        };
        addToCart(product);
    });
});
