// Calculadora Tema 1 Preguntando argumentos al usuario
var numeros = []

function comprobardatos(argumentos){
  for (i=0 ; i<argumentos.length; i++){ 
    var variable = parseInt(argumentos[i]);
    if (!isNaN(variable)) {
      numeros.push(argumentos[i])    
    }
  }
  if (numeros.length == 0){
  console.log("Debes introducir como mínimo 1 número!")
  return false
  }
  else if (numeros.length == 1){
    var raiz = Math.sqrt(numeros[0]);
    console.log('Has introducido un solo número, la ráiz cuadrada de ' + numeros[0] + ' es: ' + limitarDecimales(raiz));
  }
  else {
    console.log("Realizaremos los cálculos con los números: " + numeros)
    return true
  }
}

function calc(){
  var opcion = prompt("Introduzca los números a sumar separados por comas:", "Escribe aquí los números") 
  var argumentos = []
  argumentos = opcion.split(",").map(Number)
  if (comprobardatos(argumentos)){
    var result = []
    var sum = numeros[0]
    var rest = numeros[0]
    var mult = numeros[0]
    var div = numeros[0]
    for (i=1 ; i<numeros.length; i++){
      sum+= numeros[i]
      rest-= numeros[i]
      mult*= numeros[i]
      div/= numeros[i]  
    }
    result.push(limitarDecimales(sum));
    result.push(limitarDecimales(rest));
    result.push(limitarDecimales(div));
    result.push(limitarDecimales(mult));
    console.log('La suma de los parametros es: ' + result[0] + ', la resta es: ' + result[1] + ', la división es: ' + result[2] + ' y la multiplicación es: ' + result[3]);

    numeros = []
    var seguir = prompt("New numbers? y/n")
    switch(seguir){
      case "y" :
      calc()
      break         
      case "n" :
      console.log ("Gracias por usar la calculadora, si quieres seguir calculando ejecuta de nuevo.")
      break;
    }
  }else{
    numeros = []
    var seguir = prompt("New numbers? y/n")
    switch(seguir){
      case "y" :
      calc()
      break         
      case "n" :
      console.log ("Gracias por usar la calculadora, si quieres seguir calculando ejecuta de nuevo.")
      break;
    }
  }
}

function limitarDecimales(num){
    if (num - Math.floor(num) == 0) {
        return num;
    } else {
        return num.toFixed(3);
    }
}
calc()