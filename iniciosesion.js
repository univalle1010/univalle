document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Validación simple de usuario y contraseña
    if (username === "soto" && password === "123") {
        // Guardar el nombre del usuario en localStorage
        localStorage.setItem("loggedInUser", username);

        // Obtener la URL de la página de origen guardada
        const pageBeforeLogin = localStorage.getItem("pageBeforeLogin");

        // Redirigir a la página de origen, o a proyecto.html si no hay ninguna
        if (pageBeforeLogin && pageBeforeLogin !== "null" && pageBeforeLogin !== "") {
            window.location.href = pageBeforeLogin;
        } else {
            window.location.href = "proyecto.html"; // Redirige a la página principal por defecto
        }
    } else {
        // Mostrar el mensaje de error
        const errorMessage = document.getElementById("error-message");
        errorMessage.style.display = "block"; // Muestra el mensaje de error
    }
});