// Espera a que todo el HTML esté cargado
document.addEventListener("DOMContentLoaded", () => {
    console.log("La página cargó correctamente.");

    // Ejemplo: seleccionar un campo de búsqueda
    const input = document.querySelector(".search-input");

    // Ejemplo: seleccionar un botón
    const btn = document.querySelector(".search-btn");

    // Si existen los elementos, les agregamos funcionalidad
    if (input && btn) {
        btn.addEventListener("click", () => {
            const texto = input.value.trim();

            if (texto === "") {
                alert("Escribe algo para buscar 😄");
            } else {
                console.log("Buscando:", texto);
                alert(`Buscando: ${texto}`);
            }
        });
    }
});
