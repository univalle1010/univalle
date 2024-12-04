window.addEventListener("DOMContentLoaded", function() {
    const loggedInUser = localStorage.getItem("loggedInUser");
    const userOptions = document.querySelector(".user-options");

    if (loggedInUser) {
        // Si el usuario ha iniciado sesión, muestra su nombre y un enlace para cerrar sesión
        userOptions.innerHTML = `<span>Bienvenido, ${loggedInUser}</span> | <a href="iniciosesion.html" onclick="logout()">Cerrar sesión</a>`;
    }
});

function logout() {
    localStorage.removeItem("loggedInUser"); // Elimina el estado de la sesión

    // Vuelve a mostrar los enlaces "Iniciar sesión" y "Registrarse"
    const userOptions = document.querySelector(".user-options");
    userOptions.innerHTML = `<a href="iniciosesion.html">Iniciar Sesión</a> `;
}

// Variables globales para el carrito
const cartItems = [];
const cartList = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");

// Función para actualizar el carrito en la interfaz
function updateCart() {
    cartList.innerHTML = ""; // Limpiar lista previa
    let total = 0;

    cartItems.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.name} - Bs. ${item.price} (x${item.quantity})`;
        cartList.appendChild(li);
        total += item.price * item.quantity;
    });

    cartTotal.textContent = total.toFixed(2); // Actualizar total
}

// Función para agregar un producto al carrito
function addToCart(event) {
    const button = event.target;
    const id = button.dataset.id;
    const name = button.dataset.name;
    const price = parseFloat(button.dataset.price);

    // Verificar si el producto ya está en el carrito
    const existingItem = cartItems.find(item => item.id === id);

    if (existingItem) {
        existingItem.quantity += 1; // Incrementar cantidad si ya está
    } else {
        cartItems.push({ id, name, price, quantity: 1 }); // Agregar nuevo producto
    }

    updateCart(); // Actualizar interfaz
}

// Configurar evento "click" para el botón "Comprar ahora"
const buyButton = document.querySelector(".buy-btn");
buyButton.addEventListener("click", addToCart);
