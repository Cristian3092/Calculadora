function agregar(caracter) {
    document.getElementById('resultado').value += caracter;
}


function limpiar() {
    document.getElementById('resultado').value = '';
}


function borrar() {
    let resultado = document.getElementById('resultado').value;
    document.getElementById('resultado').value = resultado.slice(0, -1);
}

function calcular() {
    let resultado = document.getElementById('resultado').value;
    let total = eval(resultado);
    document.getElementById('resultado').value = total;
}