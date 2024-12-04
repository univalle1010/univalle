// Variables globales
const cartItems = [];
const cartList = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");
const addToCartButtons = document.querySelectorAll(".add-to-cart");

// Actualizar el carrito
function updateCart() {
    cartList.innerHTML = "";
    let total = 0;

    cartItems.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.name} - Bs. ${item.price} (x${item.quantity})`;
        cartList.appendChild(li);
        total += item.price * item.quantity;
    });

    cartTotal.textContent = total.toFixed(2);
}

// Agregar producto al carrito
function addToCart(event) {
    const button = event.target;
    const id = button.dataset.id;
    const name = button.dataset.name;
    const price = parseFloat(button.dataset.price);

    const existingItem = cartItems.find(item => item.id === id);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cartItems.push({ id, name, price, quantity: 1 });
    }

    updateCart();
}

// Configurar eventos para botones
addToCartButtons.forEach(button => {
    button.addEventListener("click", addToCart);
});

// Botón de proceder al pago
document.getElementById("checkout-btn").addEventListener("click", () => {
    alert("Gracias por tu compra!");
    cartItems.length = 0;
    updateCart();
});
