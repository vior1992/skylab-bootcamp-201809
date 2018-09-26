function insert(num) {  //para insertar a la pantalla todo lo que pinchemos
var result = document.calculadora.resultado.value;
document.calculadora.resultado.value = result + num;
}

function equal() {
  if(document.calculadora.resultado.value) {
document.calculadora.resultado.value = eval(document.calculadora.resultado.value); //eval() evalúa un código JavaScript representado como una cadena de caracteres (string), sin referenciar a un objeto en particular (https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/eval)
return document.calculadora.resultado.value;
}
}

function back() {
 var result = document.calculadora.resultado.value;
document.calculadora.resultado.value = result.substring(0, result.length -1);
}

function bgc() {  //prueba, pq no funciona nada de js. al pulsar el 7 tendría q cambiar el fondo a rojo...:S
  document.body.style.backgroundColor = "red";
}
