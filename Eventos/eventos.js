function tipoFlor() {
    alert("Esta es una flor ");
}




function inicio() {

    var imagenes = document.getElementsByTagName("img");



    imagenes[0] = addEventListener("mouseover", function() {
        imagenes[0].height = 225;
        imagenes[0].width = 225;
    }, false)
    imagenes[0] = addEventListener("mouseout", function() {
        imagenes[0].height = 200;
        imagenes[0].width = 200;
    }, false)


    imagenes[1] = addEventListener("mouseover", function() {
        imagenes[1].height = 225;
        imagenes[1].width = 225;
    }, false)
    imagenes[1] = addEventListener("mouseout", function() {
        imagenes[1].height = 200;
        imagenes[1].width = 200;
    }, false)

    imagenes[2] = addEventListener("mouseover", function() {
        imagenes[2].height = 225;
        imagenes[2].width = 225;
    }, false)
    imagenes[2] = addEventListener("mouseout", function() {
        imagenes[2].height = 200;
        imagenes[2].width = 200;
    }, false)


    imagenes[3] = addEventListener("mouseover", function() {
        imagenes[3].height = 225;
        imagenes[3].width = 225;
    }, false)
    imagenes[3] = addEventListener("mouseout", function() {
        imagenes[3].height = 200;
        imagenes[3].width = 200;
    }, false)

    imagenes[4] = addEventListener("mouseover", function() {
        imagenes[4].height = 225;
        imagenes[4].width = 225;
    }, false)
    imagenes[4] = addEventListener("mouseout", function() {
        imagenes[4].height = 200;
        imagenes[4].width = 200;
    }, false)

    imagenes[5] = addEventListener("mouseover", function() {
        imagenes[5].height = 225;
        imagenes[5].width = 225;
    }, false)
    imagenes[5] = addEventListener("mouseout", function() {
        imagenes[5].height = 200;
        imagenes[5].width = 200;
    }, false)




}




window.addEventListener("load", inicio, false);