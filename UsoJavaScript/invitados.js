function saludo() {
    alert("Hola");
}

function ejecucion() {
    let etiquetas = document.querySelectorAll("#principal p ");
    for (i in etiquetas) {
        etiquetas[i].onclick = saludo;
    }
    etiquetas = document.querySelectorAll("p span");
    for (i in etiquetas) {
        etiquetas[i].onclick = saludo;
    }

}



window.onload = ejecucion;