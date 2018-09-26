

function calculator(){

	var num1=document.getElementById("num1").value;
	var num2=document.getElementById("num2").value;
	
	document.getElementById("excepciones").innerHTML = "";
	document.getElementById("suma").innerHTML = "";
	document.getElementById("resta").innerHTML = "";
	document.getElementById("multiplicacion").innerHTML = "";
	document.getElementById("division").innerHTML = "";
	document.getElementById("raiz").innerHTML = "";

	//primero vemos si se ha introducido algún argumento porque si no hay, no hay nada que indicar
	if(num1==="" && num2===""){
		document.getElementById("excepciones").innerHTML = "No se introdujo ningún valor";
	}

	//luego comprobamos si sólo hay un argumento y si es un número, en ese caso hacemos la raiz cuadrada
	else if(num2===""){
		num1=Number(num1);
		if (Math.sign(num1)===-1){
			document.getElementById("excepciones").innerHTML = "Los numeros negativos no tienen raiz cuadrada";
		}	

		else if(isNaN(num1)===false){
			document.getElementById("raiz").innerHTML = Math.sqrt(num1).toFixed(2);
		}
		else{document.getElementById("excepciones").innerHTML = "El valor introducido no es un numero";}
	}

	else if(num1===""){
		num2=Number(num2);
		if (Math.sign(num2)===-1){
			document.getElementById("excepciones").innerHTML = "Los numeros negativos no tienen raiz cuadrada";
		}	
		else if (isNaN(num2)===false){
		document.getElementById("raiz").innerHTML = Math.sqrt(num2).toFixed(2);
		}	
		else{document.getElementById("excepciones").innerHTML = "El valor introducido no es un numero";}
	}

    //también comprobamos si se han introducido dos argumentos y alguno no es un número
	else if(isNaN(Number(num2))&&isNaN(Number(num1))){
		document.getElementById("excepciones").innerHTML = "Ninguno de los dos valores es un numero";
	}
	//o si alguno de los dos argumentos no es un numero
	else if(isNaN(Number(num1))){
		document.getElementById("excepciones").innerHTML = "Numero1 no es un numero";

	}

	else if(isNaN(Number(num2))){
		document.getElementById("excepciones").innerHTML = "Numero2 no es un numero";

	}
	
	else{
	num1=Number(num1);
	num2=Number(num2);
	
	var sum=num1+num2;
	var rest=num1-num2;
	var mult=num1*num2;
	if(num1===0 && num2 ===0){
		var div= "cero entre cero es indeterminado "
	}
	else{
		var div=num1/num2;
		
	}
	
	document.getElementById("suma").innerHTML = sum;
	document.getElementById("resta").innerHTML = rest;
	document.getElementById("multiplicacion").innerHTML = mult;
	document.getElementById("division").innerHTML = div;
	}
}