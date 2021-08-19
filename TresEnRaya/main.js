class Juego {

    constructor() {

        this.tablero = [
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0]
        ];
        this.terminado = false;
        this.turno = 1;
        this.ganador = 0;
    }

    reinicio() {

        this.tablero = [
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0]
        ];
        this.terminado = false;

        if (this.ganador == 1) {
            this.turno = 2;
        } else if (this.ganador == 2) {
            this.turno = 1;
        }

        this.ganador = 0;
    }

    casillasLlenas() {
        for (let i = 0; i < this.tablero.length; i++) {
            for (let j = 0; j < this.tablero[i].length; j++) {
                if (this.tablero[i][j] == 0) {
                    return false;
                }
            }
        }
        return true;
    }

    verificaGanador(jugador) {
        if (
            this.verificaColumnas(jugador) ||
            this.verificaFilas(jugador) ||
            this.verificaDiagonalPrincipal(jugador) ||
            this.verificaDiagonalSecundaria(jugador)
        ) {
            return true;
        } else {
            return false;
        }
    }


    pocicionOcupada(i, j) {
        if (this.tablero[i][j] == 0) {
            return false;
        } else {
            return true;
        }

    }

    marcar(i, j) {

        this.tablero[i][j] = this.turno;
        if (this.verificaGanador(this.turno)) {
            this.ganador = this.turno;
            this.terminado = true;
        } else {
            this.cambiarTurno();
        }
    }



    cambiarTurno() {
        if (this.turno == 1) {
            this.turno = 2;
        } else {
            this.turno = 1;
        }
    }


    verificaFilas(jugador) {
        let igualdad;

        for (var i = 0; i < this.tablero.length; i++) {
            igualdad = true;
            for (var j = 0; j < this.tablero[i].length; j++) {
                if (this.tablero[i][j] != jugador) {
                    igualdad = false;
                    break;
                }

            }
            if (igualdad == true) {
                return true;
            }
        }


        return igualdad;

    }

    verificaColumnas(jugador) {
        let igualdad;

        for (var j = 0; j < this.tablero[0].length; j++) {
            igualdad = true;
            for (var i = 0; i < this.tablero.length; i++) {
                if (this.tablero[i][j] != jugador) {
                    igualdad = false;
                    break;
                }

            }
            if (igualdad == true) {
                return true;
            }
        }

        return igualdad;
    }

    verificaDiagonalPrincipal(jugador) {
        let igualdad = true;
        let i, j;
        for (i in this.tablero) {
            if (this.tablero[i][i] != jugador) {
                igualdad = false;
                break;
            }
        }
        return igualdad;
    }

    verificaDiagonalSecundaria(jugador) {
        let igualdad = true;
        let i, j;
        for (i in this.tablero) {
            if (this.tablero[i][(this.tablero.length - 1) - i] != jugador) {
                igualdad = false;
                break;
            }
        }
        return igualdad;
    }
}


//----------------------------------------Script------------------------------------

var juego = new Juego();
window.addEventListener("load", main, false);

function main() {


    let F0C0 = document.getElementById("F0C0");
    let F0C1 = document.getElementById("F0C1");
    let F0C2 = document.getElementById("F0C2");

    let F1C0 = document.getElementById("F1C0");
    let F1C1 = document.getElementById("F1C1");
    let F1C2 = document.getElementById("F1C2");

    let F2C0 = document.getElementById("F2C0");
    let F2C1 = document.getElementById("F2C1");
    let F2C2 = document.getElementById("F2C2");

    let marcadorJugador1 = document.getElementById("marcadorJugador1");
    let marcadorJugador2 = document.getElementById("marcadorJugador2");

    let botonSiguienteRonda = document.getElementById("botonSiguienteRonda");
    let botonReiniciar = document.getElementById("botonReiniciar");

    let imagenTurno = document.getElementById("imagenTurno");

    //Eventos

    F0C0.addEventListener("click", mF0C0, false);
    F0C1.addEventListener("click", mF0C1, false);
    F0C2.addEventListener("click", mF0C2, false);
    F1C0.addEventListener("click", mF1C0, false);
    F1C1.addEventListener("click", mF1C1, false);
    F1C2.addEventListener("click", mF1C2, false);
    F2C0.addEventListener("click", mF2C0, false);
    F2C1.addEventListener("click", mF2C1, false);
    F2C2.addEventListener("click", mF2C2, false);

    botonSiguienteRonda.addEventListener("click", siguienteRonda, false);
    botonReiniciar.addEventListener("click", reiniciar, false);

    cambiarImagenTurno();
}


function mF0C0() {
    let i = 0;
    let j = 0;

    if (juego.terminado == false) {

        if (juego.pocicionOcupada(i, j) == false) {

            if (juego.turno == 1) {

                F0C0.style.background = "url('./imagenes/O.png')";

            } else {

                F0C0.style.background = "url('./imagenes/X.png')";
            }

            juego.marcar(i, j);
            ganador();
            cambiarImagenTurno();

        }
    }
}

function mF0C1() {
    let i = 0;
    let j = 1;

    if (juego.terminado == false) {

        if (juego.pocicionOcupada(i, j) == false) {

            if (juego.turno == 1) {

                F0C1.style.background = "url('./imagenes/O.png')";

            } else {

                F0C1.style.background = "url('./imagenes/X.png')";
            }
            juego.marcar(i, j);
            ganador();
            cambiarImagenTurno();
        }
    }
}


function mF0C2() {
    let i = 0;
    let j = 2;

    if (juego.terminado == false) {

        if (juego.pocicionOcupada(i, j) == false) {

            if (juego.turno == 1) {

                F0C2.style.background = "url('./imagenes/O.png')";

            } else {

                F0C2.style.background = "url('./imagenes/X.png')";
            }
            juego.marcar(i, j);
            ganador();
            cambiarImagenTurno();

        }
    }
}


function mF1C0() {
    let i = 1;
    let j = 0;

    if (juego.terminado == false) {

        if (juego.pocicionOcupada(i, j) == false) {

            if (juego.turno == 1) {

                F1C0.style.background = "url('./imagenes/O.png')";

            } else {

                F1C0.style.background = "url('./imagenes/X.png')";
            }
            juego.marcar(i, j);
            ganador();
            cambiarImagenTurno();
        }

    }
}


function mF1C1() {
    let i = 1;
    let j = 1;

    if (juego.terminado == false) {

        if (juego.pocicionOcupada(i, j) == false) {

            if (juego.turno == 1) {

                F1C1.style.background = "url('./imagenes/O.png')";

            } else {

                F1C1.style.background = "url('./imagenes/X.png')";
            }

            juego.marcar(i, j);
            ganador();
            cambiarImagenTurno();
        }
    }
}


function mF1C2() {
    let i = 1;
    let j = 2;

    if (juego.terminado == false) {

        if (juego.pocicionOcupada(i, j) == false) {

            if (juego.turno == 1) {

                F1C2.style.background = "url('./imagenes/O.png')";

            } else {

                F1C2.style.background = "url('./imagenes/X.png')";
            }

            juego.marcar(i, j);
            ganador();
            cambiarImagenTurno();
        }


    }
}


function mF2C0() {
    let i = 2;
    let j = 0;

    if (juego.terminado == false) {

        if (juego.pocicionOcupada(i, j) == false) {

            if (juego.turno == 1) {

                F2C0.style.background = "url('./imagenes/O.png')";

            } else {

                F2C0.style.background = "url('./imagenes/X.png')";
            }

            juego.marcar(i, j);
            ganador();
            cambiarImagenTurno();

        }

    }
}


function mF2C1() {
    let i = 2;
    let j = 1;

    if (juego.terminado == false) {

        if (juego.pocicionOcupada(i, j) == false) {

            if (juego.turno == 1) {

                F2C1.style.background = "url('./imagenes/O.png')";

            } else {

                F2C1.style.background = "url('./imagenes/X.png')";
            }
            juego.marcar(i, j);
            ganador();
            cambiarImagenTurno();

        }
    }
}

function mF2C2() {
    let i = 2;
    let j = 2;

    if (juego.terminado == false) {

        if (juego.pocicionOcupada(i, j) == false) {

            if (juego.turno == 1) {

                F2C2.style.background = "url('./imagenes/O.png')";
            } else {

                F2C2.style.background = "url('./imagenes/X.png')";
            }
            juego.marcar(i, j);
            ganador();
            cambiarImagenTurno();

        }
    }
}

function ganador() {
    if (juego.ganador == 1) {
        marcadorJugador1.innerHTML = parseInt(marcadorJugador1.innerHTML) + 1;
    } else if (juego.ganador == 2) {
        marcadorJugador2.innerHTML = parseInt(marcadorJugador2.innerHTML) + 1;
    }
}



function siguienteRonda() {

    if (juego.terminado || juego.casillasLlenas()) {

        juego.reinicio();
        cambiarImagenTurno();

        F0C0.style.background = "";
        F0C1.style.background = "";
        F0C2.style.background = "";
        F1C0.style.background = "";
        F1C1.style.background = "";
        F1C2.style.background = "";
        F2C0.style.background = "";
        F2C1.style.background = "";
        F2C2.style.background = "";
    }
}

function reiniciar() {
    juego.reinicio();

    F0C0.style.background = "";
    F0C1.style.background = "";
    F0C2.style.background = "";
    F1C0.style.background = "";
    F1C1.style.background = "";
    F1C2.style.background = "";
    F2C0.style.background = "";
    F2C1.style.background = "";
    F2C2.style.background = "";

    juego.turno = 1;
    marcadorJugador1.innerHTML = 0;
    marcadorJugador2.innerHTML = 0;
    cambiarImagenTurno();

}

function cambiarImagenTurno() {


    if (juego.turno == 1) {
        imagenTurno.src = './imagenes/O.png';
    } else {
        imagenTurno.src = './imagenes/X.png';
    }


}