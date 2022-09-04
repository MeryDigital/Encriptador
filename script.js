var botonEncriptar = document.querySelector(".boton-encriptar");
var botonDesencriptar = document.querySelector(".boton-desencriptar");
var botonCopiar = document.querySelector(".boton-copiar")
var munieco = document.querySelector(".contiene-munieco");
var h3 = document.querySelector(".conteniene-texto-h3");
var parrafo = document.querySelector(".contiene-parrafo");
var textoResultado = document.querySelector(".texto-resultado");


botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = DesEncriptar;
botonCopiar.onclick = copiarTexto;

function encriptar(){  //Esta funcion recupera el texto del area
    ocultarAdelante();
    var area = recuperarTexto();
    textoResultado.textContent = encriptarTexto(area);
}

function DesEncriptar(){
    ocultarAdelante();
    var area = recuperarTexto();
    textoResultado.textContent = DesEncriptarTexto(area);
}

function copiarTexto(){
    var content = document.getElementById("texto-resultado");
    content.select();
    document.execCommand('copy');
    alert("Copiado!");
}

function recuperarTexto(){
    var area = document.querySelector(".area");
    return area.value;
}

function ocultarAdelante(){
    munieco.classList.add("ocultar");
    h3.classList.add("ocultar");
    parrafo.classList.add("ocultar");
}

function encriptarTexto(mensaje){
    var texto = mensaje;
    var textoFinal = "";

    for (var i = 0; i < texto.length; i ++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "ai";
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "enter";
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "imes";
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "ober";
        }
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "ufat";
        }
        else{
            textoFinal = textoFinal + texto[i];
        }

    }
    return textoFinal;
}

function DesEncriptarTexto(mensaje){
    var texto = mensaje;
    var textoFinal = "";

    for (var i = 0; i < texto.length; i ++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "a";
            i = i + 1;
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "e";
            i = i + 4;
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "i";
            i = i + 3;
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "o";
            i = i + 3;
        }
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "u";
            i = i + 3;
        }
        else{
            textoFinal = textoFinal + texto[i];
        }

    }
    return textoFinal;
}