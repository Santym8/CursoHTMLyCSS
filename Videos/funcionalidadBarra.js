var miVideo, reproducir, barra, progreso, maximo;
maximo = 450; //Ancho maximo de la barra


function comenzar() {
    miVideo = document.getElementById("miVideo");
    botonReproducir = document.getElementById("reproducir");
    barra = document.getElementById("barra");
    progreso = document.getElementById("progreso");
    botonSubirV = document.getElementById("vMas");
    botonBajarV = document.getElementById("vMenos");
    botonMutear = document.getElementById("mutear");
    tiempo = document.getElementById("tiempo");

    miVideo.volume = 0.5;

    botonReproducir.addEventListener("click", reproducirVideo, false);
    barra.addEventListener("click", saltarVideo, false);
    botonSubirV.addEventListener("click", subirVol, false);
    botonBajarV.addEventListener("click", bajarVol, false);
    botonMutear.addEventListener("click", mutear, false);


}

function reproducirVideo() {
    //Video en repriduccion - pausado
    if ((miVideo.paused == false) && (miVideo.ended == false)) {
        miVideo.pause();
        botonReproducir.innerHTML = "Play";
    } else {
        //Video pausado - reproduccion
        miVideo.play();
        botonReproducir.innerHTML = "Pause";
        bucle = setInterval(estadoBarraProgreso, 30);
    }
}
//Aumenta el tammaño de la barra de progreso y modifica el tiempo mostrado
function estadoBarraProgreso() {
    if (miVideo.ended == false) {
        //Regla de 3
        let total = (miVideo.currentTime * maximo) / (miVideo.duration);
        progreso.style.width = total + "px";

        //Tiepo
        let horas, min, seg;
        let segundosTotales = miVideo.currentTime;
        horas = parseInt(segundosTotales / 3600);
        residuo = segundosTotales % 3600;
        min = parseInt(residuo / 60);
        residuo = residuo % 60;
        seg = parseInt(residuo);

        if (horas == NaN) {
            hora = 0;
        }
        if (min == NaN) {
            min = 0;
        }
        if (seg == NaN) {
            seg = 0;
        }

        tiempo.innerHTML = (horas + ":" + min + ":" + seg);

    }
}



function saltarVideo(posicion) {
    //Posicion del raton con respecto a la barra
    let ratonBarra = posicion.pageX - barra.offsetLeft;
    miVideo.currentTime = (ratonBarra * miVideo.duration / maximo);
    progreso.style.width = ratonBarra + "px";
}

function mutear() {
    if (miVideo.muted == false) {
        miVideo.muted = true;
        botonMutear.innerHTML = "DM"
    } else {
        miVideo.muted = false;
        botonMutear.innerHTML = "M"
    }
}

function subirVol() {

    if ((miVideo.volume >= 0) && (miVideo.volume < 1)) {
        miVideo.volume += 0.1;
    }

}

function bajarVol() {
    if ((miVideo.volume > 0) && (miVideo.volume <= 1)) {
        miVideo.volume -= 0.1;
    }
}




window.onload = comenzar;