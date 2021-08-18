function saludoImagen() {
    alert("Esto es la imagen");
}

function saludoParrafo() {
    alert("Esto es un parrafo");
}

function inicio() {
    let imagen = document.getElementsByTagName("img")[0];
    let parrafo = document.getElementsByTagName("p")[0];

    parrafo.addEventListener("click", saludoParrafo, true);
    imagen.addEventListener("click", saludoImagen, false);

}

window.addEventListener("load", inicio, false);