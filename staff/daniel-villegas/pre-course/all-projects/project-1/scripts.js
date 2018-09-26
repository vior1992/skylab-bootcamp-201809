function calculator(n1,n2){
 
    var sum = n1+n2;
    var minus = n1-n2;
    var plus = n1*n2;
    var division = n1/n2;
 
    for (var o = 0 ; o == 4; o++);
 
    //Si los valores no son numeros, ergo true.
    if (isNaN(n1) === true && isNaN(n2) === true){
        console.log("Inserta dos cifras");
    } else if (isNaN(n1) === true){
    console.log("No se puede hacer esta operacion. " + "La raiz cuadrada de " + n2 + " es: " + Math.sqrt(n2).toFixed(2));
    } else if (isNaN(n2) === true){ 
    console.log("No se puede hacer esta operacion. " + "La raiz cuadrada de " + n1 + " es: " + Math.sqrt(n1).toFixed(2));
    
 
    //Si los valores son numeros, ergo false.
    } else if (isNaN(n1) === false && n2 != 0 && n1 != 0) {
    console.log("Esta operacion da: Suma = " + sum.toFixed(2) + " Resta = " + minus.toFixed(2) + " Multiplicacion = " + plus.toFixed(2)
    + " Division = " + division.toFixed(2));
    } else if (isNaN(n2) === false && n2 != 0 && n1 != 0) {
    console.log("Esta operacion da: Suma = " + sum.toFixed(2) + " Resta = " + minus.toFixed(2) + " Multiplicacion = " + plus.toFixed(2)
    + " Division = " + division.toFixed(2));
    } else if (isNaN(n1) === false && isNaN(n2) == false && n2 == 0 && n1 == 0) {
	console.log("Esta operacion da: Suma = " + sum.toFixed(2) + " Resta = " + minus.toFixed(2) + " Multiplicacion = " + plus.toFixed(2)
	+ " No se puede dividir entre 0"); 
    }
 
 
}
 
// Aqui elegimos el valor de los parametros.
 
calculator(25, 2);

