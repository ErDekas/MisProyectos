function borrarUltimoCaracter() {
    var display  = document.getElementById('display');
    var valorActual = display.value;
    if (valorActual.length > 0) {
      // Elimina el último carácter del valor actual del campo de entrada
      display.value = valorActual.slice(0, -1);
    }
  }
function agregarCaracter(caracter) {
    var display = document.getElementById('display');
    display.value += caracter;
  }
function realizarCalculo(operador) {
    var display = document.getElementById('display');
    try{
        if(operador === '='){
        display.value = eval(display.value);
    }else{
        display.value += operador;
    }
    }catch (error){
        display.value = 'Error';
    }
  }
function realizarCalculoPercent(operador) {
    var display = document.getElementById('display');
    if (!isNaN(display.value)) {
        display.value = parseFloat(display.value) / 100;
    }
} function resetDiv() {
    var display = document.getElementById('display');
    
    display.value = '';
}