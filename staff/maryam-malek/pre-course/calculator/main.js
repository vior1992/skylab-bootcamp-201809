// Haz una calculadora. Un único programa al que le pasarás dos parámetros y el usuario podrá visualizar por consola la suma, resta, multiplicación y división entre ambos números. El resultado debería ser mostrado con 3 decimales como mucho (En caso de que hubieran). El programa debe contemplar y actuar correctamente en el caso de que el usuario introduzca cualquier cosa que no sean números.
//Si el usuario introduce un solo numero, deberá mostrar SOLO su raíz cuadrada, si vuelve a introducir los dos, volverá a mostrar las 4 operaciones de siempre.
//Los resultados deberían almacenarse dentro de una array y mostrarlos de una forma amigable al usuario.


var calculator = function (num1, num2){
   

	if (num1 === undefined || num2 === undefined){
       
       if(num1 === undefined){

       	return 'You have not entered any number. Please try it again.'; 

       }else{

       return Math.round(Math.sqrt(num1)*1000) / 1000;
	  }
	}

	else if (isNaN(num1) || isNaN(num2) && num1 !== undefined && num2 !== undefined){

		return 'The input is not a number. Please check it and try it again.'

	}

	else{

	  function suma (num1, num2){

		  return Math.round((num1 + num2)*1000) / 1000;

	  }   
    
	  function resta (num1, num2){

		  return Math.round((num1 - num2)*1000) / 1000;
		
	  } 

	  function multiplicacio (num1, num2){

		  return Math.round((num1 * num2)*1000) / 1000;
		
	  } 

	  function divisio (num1, num2){

		  return Math.round((num1 / num2)*1000) / 1000;	
	  
	  }  

	  var sum = suma(num1, num2);
	  var res = resta(num1, num2);
	  var mul = multiplicacio(num1,num2);
	  var div = divisio(num1,num2);

	  var results = [num1 + ' + ' + num2 + ' = ' + sum, ' ' + num1 + ' - ' + num2 + ' = ' + res, ' ' + num1 + ' * ' + num2 + ' = ' + mul, ' ' + num1 + ' / ' + num2 + ' = ' + div];

	  return 'Results: ' + results;
	}

}

calculator(3,5);

