// Calculadora Tema 1 con argumentos
var numeros = []
function comprobardatos(arguments){
  for (i=0 ; i<arguments.length; i++){ 
    var variable = parseInt(arguments[i]);
    if (!isNaN(variable)) {
      numeros.push(arguments[i])    
    }
  }
  if (numeros.length == 0){
  console.log("Debes introducir como mínimo 1 número!")
  return false
  }
  else if (numeros.length == 1){
    var raiz = Math.sqrt(numeros[0]);
    console.log('Has introducido un solo número, la ráiz cuadrada de ' + numeros[0] + ' es: ' + limitarDecimales(raiz))
  }else {
    console.log("Realizaremos los cálculos con los números: " + numeros)
    return true
  }
}

function calc(){
  if (comprobardatos(arguments)){
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
    console.log(sum)
    result.push(limitarDecimales(sum));
    result.push(limitarDecimales(rest));
    result.push(limitarDecimales(div));
    result.push(limitarDecimales(mult));
    console.log("La suma de los parametros es: " + result[0] + ", la resta es: " + result[1] + " , la división es: " + result[2] + " y la multiplicación es: " + result[3]);
  }
}

function limitarDecimales(num){
    if (num - Math.floor(num) == 0) {
        return num;
    } else {
        return num.toFixed(3);
    }
}

calc(true,false,"hola",1,2,3,4,5,6,7,8,9,"no",true)


var seguir = prompt("Nuevos números? s/n")
switch(seguir){
  case "s" :
    numeros = []
    calc(1,2,3,4,"no",true,"hola")
    break         
  case "n" :
    console.log("Gracias por usar la calculadora, si quieres seguir calculando ejecuta de nuevo.")
    break;
  default :
    console.log("Supongo que quieres salir... Gracias por usar la calculadora, si quieres seguir calculando ejecuta de nuevo.")
    break;
}