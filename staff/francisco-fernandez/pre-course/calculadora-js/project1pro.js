/* Haz una calculadora. Un único programa al que le pasarás dos parámetros y el usuario podrá visualizar por consola la suma,
resta, multiplicación y división entre ambos números. El resultado debería ser mostrado con 3 decimales como mucho 
(En caso de que hubieran). El programa debe contemplar y actuar correctamente en el caso de que el usuario introduzca 
cualquier cosa que no sean números.

Si el usuario introduce un solo numero, deberá mostrar SOLO su raíz cuadrada, si vuelve a introducir los dos, volverá a 
mostrar las 4 operaciones de siempre.
Los resultados deberían almacenarse dentro de una array y mostrarlos de una forma amigable al usuario.
Hint_ => results = [num1 + num2 = resultSum, num1-num2 = resultRest ....]

PRO.

Podrías hacer que le calculadora relizara operaciones sean cuales sean el numero de argumentos pasados a la funcion?

Después de hacer todas las operaciones, el programa deberá preguntar al usuario si desea volver a realizar otra 
operación, volviendo a almacenar más resultados y mostrándolos.
*/

function calculator(){
	//creamos un array para guardar los resultados de las cuatro operaciones
	var results=[];
	var sum=0;
	var rest=arguments[0];
	var mult=arguments[0];
	var div=arguments[0];
	var todoceros=true;
	var todonumeros=true;
	var nonumeros=[];

	/*compruebo si todos los elementos son cero*/
	for(var i =0;i<arguments.length;i++){
		if(arguments[i]!=0){
			todoceros=false;
		}
	}
	
	for(var i =0;i<arguments.length;i++){
		if(isNaN(arguments[i])===true){
			todonumeros=false;
			nonumeros.push(arguments[i]);

		}
	}
	
	//primero vemos si se ha introducido algún argumento porque si no hay, no hay nada que indicar
	if(arguments.length==0){
		console.log("no arguments introduced");
	}
	//luego comprobamos si sólo hay un argumento y si es un número
	else if(arguments.length==1){
		if (isNaN(arguments[0])===false){
		console.log("result square root = " + Math.sqrt(arguments[0]).toFixed(2));
		}	
		else{console.log("se ha introducido un elemento y no es un número, el elemento " + arguments[0]);}
	}

	/*por último vemos si se han introducido varios valores pero alguno no se un numero*/
	else if(todonumeros===false){
		console.log("hay elementos que no son numeros, los siguientes: "+nonumeros);

	}
	
	else{
		for (var i =0;i<arguments.length;i++){
			sum=sum+arguments[i];
		}
		for (var i =0;i<arguments.length-1;i++){
			rest=rest-arguments[i+1];
		}
		for (var i =0;i<arguments.length-1;i++){
			mult=mult*arguments[i+1];
		}
		for (var i =0;i<arguments.length-1;i++){
			div=div/arguments[i+1];
		}
		
		
		results.push("La suma es: "+sum);
		results.push("La resta es: "+rest);
		results.push("La multiplicacion es: "+mult);
		if(todoceros===true){
			results.push("La división de 0/0 es indeterminada");
		}
		else{
		results.push("La division es: "+div.toFixed(2));
		}
		console.log("results = "+results);
	}
}

function repeat (){
	if(prompt("Desea realizar otra operación? (y/n)")==="y"){
		calculator(1,2,3,4);
	}

	else{
		console.log("fin");
	}
	
}

calculator(3,2,1,5);
repeat();

