// ==============================
// VARIABLES GLOBALES
// ==============================
const titulo = document.getElementById("titulo");
const inputNombre = document.getElementById("nombre");
const texto = document.querySelector(".texto");
const imagen = document.getElementById("imagen");

// ==============================
// FUNCIONES
// ==============================
function saludarUsuario() {
    const nombre = inputNombre.value.trim();

    if (nombre === "") {
        alert("Por favor escribe tu nombre");
        return;
    }

    titulo.textContent = `Hola ${nombre}, bienvenido`;
}

function cambiarColorTexto() {
    texto.style.color = texto.style.color === "blue" ? "black" : "blue";
}

function ocultarMostrarTexto() {
    texto.classList.toggle("oculto");
}

function cambiarImagen() {
    imagen.src =
        imagen.src.includes("150")
            ? "C:\\Users\\julio\\Downloads\\Laboratorio 2\\Laboratorio_2\\Imagen progra.webp"
            : "C:\\Users\\julio\\Downloads\\Laboratorio 2\\Laboratorio_2\\Imagen progra.webp";
}

function resaltarElementoLista(event) {
    event.target.textContent = "Elemento seleccionado";
}

// ==============================
// EVENTOS
// ==============================

// getElementById
document.getElementById("btnSaludar")
    .addEventListener("click", saludarUsuario);

// getElementsByClassName
document.getElementsByClassName("btnColor")[0]
    .addEventListener("click", cambiarColorTexto);

// querySelector
document.querySelector(".btnOcultar")
    .addEventListener("click", ocultarMostrarTexto);

// getElementsByTagName
const elementosLista = document.getElementsByTagName("li");
for (let i = 0; i < elementosLista.length; i++) {
    elementosLista[i].addEventListener("click", resaltarElementoLista);
}

// querySelectorAll
document.querySelectorAll("#lista li").forEach(item => {
    item.addEventListener("mouseover", () => {
        item.style.backgroundColor = "#d3d3d3";
    });

    item.addEventListener("mouseout", () => {
        item.style.backgroundColor = "";
    });
});

// Imagen
imagen.addEventListener("click", cambiarImagen);

// Footer
document.querySelector("footer span")
    .addEventListener("click", () => {
        alert("Interacción realizada en el footer");
    });