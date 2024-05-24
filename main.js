var texto1 = "Jadson"; 
var texto2 = " Hudson";
var textoElemento = document.getElementById("nome-texto");
var spanElemento = document.getElementById("sobrenome-texto");
var atraso = 200;
let contador = 0;

function escreverTexto() {
    if (contador < texto1.length + texto2.length) {
        if (contador < texto1.length) {
            textoElemento.firstChild.textContent = texto1.slice(0, contador + 1);
        } else {
            spanElemento.textContent += texto2[contador - texto1.length];    
        }
        contador++;
        setTimeout(escreverTexto, atraso);
    } else {
        contador = 0;
        textoElemento.firstChild.textContent = "";
        spanElemento.textContent = "";
        
        setTimeout(escreverTexto, atraso);
    }
}

escreverTexto();