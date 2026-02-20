// getElementById
document.getElementById("btnSaludar").addEventListener("click", () => {
    const nombre = document.getElementById("nombre").value;
    document.getElementById("titulo").innerText = "Hola " + nombre;
});

// getElementsByClassName
document.getElementsByClassName("btnColor")[0].addEventListener("click", () => {
    document.getElementsByClassName("texto")[0].style.color = "blue";
});

// querySelector
document.querySelector(".btnOcultar").addEventListener("click", () => {
    document.querySelector(".texto").classList.toggle("oculto");
});

// getElementsByTagName
const items = document.getElementsByTagName("li");
items[0].addEventListener("click", () => {
    items[0].innerText = "Elemento modificado";
});

// querySelectorAll
document.querySelectorAll("#lista li").forEach(item => {
    item.addEventListener("mouseover", () => {
        item.style.backgroundColor = "#ddd";
    });
});

// Manipulación de imagen
document.getElementById("imagen").addEventListener("click", () => {
    document.getElementById("imagen").src = "https://via.placeholder.com/200";
});

// Manipulación del footer
document.querySelector("footer span").addEventListener("click", () => {
    alert("Hiciste clic en el footer");
});