function agregar(caracter) {
    document.getElementById('resultado').innerHTML += caracter;
}


function limpiar() {
    document.getElementById('resultado').innerHTML = '';
}


function borrar() {
    let resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.slice(0, -1);
}

function calcular() {
    let resultado = document.getElementById('resultado').innerHTML;
    let total = eval(resultado);
    document.getElementById('resultado').innerHTML = total;
}