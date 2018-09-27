calculadora.js

var num1 = 1.2;
var num2 = 3;

// Son numeros?
var check1 = isNaN (num1);
var check2 = isNaN (num2);



console.log("Los valores introducidos son: "+num1+" y "+num2);

// hemos comprobado que los dos son numeros (afirmando que no son NaN)

if (check1 === false && check2 === false) {

		if (num1 === undefined) {	// si es el num1 mostrar raiz cuadrada de num2
			console.log("Esta es la raiz quadrada de " + num2 + " = " + Math.sqrt(num2));
		}
		else if(num2 === undefined) {				// si es del num2 mostrar raiz cuadrada de num1
			console.log("Esta es la raiz quadrada de " + num1 + " = " + Math.sqrt(num1));
		}	

	}


	else{   //en caso de que sean dos numeros...
	
	var arrayResults = [];

		function sum(a,b){
    		var suma = a+b;
    		return suma
		}
		var s = sum(num1,num2) // numeros para la suma

		arrayResults.push(s);

		function res(a,b){
    		var resta = a-b;
 
    		return resta
		}
		var r = res(num1,num2) // numeros para la resta

		arrayResults.push(r);


		function mult(a,b){
    		var multi = a*b;
 
    		return multi
		}
		var m = mult(num1,num2) // numeros para la multiplicacion

		arrayResults.push(m);

		function div(a,b){
    		var divi = a/b;
 
    		return divi
		}
		var d = div(num1,num2) // numeros para la division

		arrayResults.push(d);

		console.log("El resultado de la suma de " + num1 + " + " + num2 + " es: " + arrayResults[0]);
		console.log("El resultado de la resta de " + num1 + " - " + num2 + " es: " + arrayResults[1]);
		console.log("El resultado de la multiplicación de " + num1 + " x " + num2 + " es: " + arrayResults[2]);
		console.log("El resultado de la división de " + num1 + " / " + num2 + " es: " + arrayResults[3]);

	}
}

else {

console.log("Los valores introducidos son: "+num1+" y "+num2 + " y almenos uno de los dos no es un numero");

}
