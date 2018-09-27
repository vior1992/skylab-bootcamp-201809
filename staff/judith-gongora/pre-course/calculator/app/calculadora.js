var almacen = 0
var resultado = 0
var signo 
var coma = 0
function almacenar (num){
	document.getElementById("ac").innerHTML = "C"
	if(almacen == 0){
		if (num==".") { //si escribimos una coma al principio del número
	        almacen="0." //guardar número
	        document.getElementById("res").innerHTML=almacen //escribimos 0.
        	coma=1 //cambiar estado de la coma
        }else{
        	var numero = almacen.toString() + num
            almacen = parseFloat(numero)
            document.getElementById("res").innerHTML = almacen
        }
    }else { //continuar escribiendo un número
        if (num=="." && coma==0) { //si escribimos una coma decimal por primera vez
            var numero = almacen.toString() + num
            almacen = numero
            coma=1 //cambiar el estado de la coma 
            document.getElementById("res").innerHTML = almacen
        }else if (numero=="." && coma==1) {} //si intentamos escribir una segunda coma decimal no realiza ninguna acción.
        //Resto de casos: escribir un número del 0 al 9: 	 
        else {
            var numero = almacen.toString() + num
            almacen = parseFloat(numero)
            document.getElementById("res").innerHTML = almacen
        }
    }	
}

/*function almacenar (numero){
	document.getElementById("ac").innerHTML = "C";
	var numero = almacen.toString() + numero
	almacen = parseInt(numero)
	document.getElementById("res").innerHTML = almacen;
}*/

// función para realizar el cálculo SIGNO: 1 sumar, 2 restar, 3 multiplicar, 4 dividir, 5 igual.
function funcion(tipo){
	if (resultado==0){
		signo = tipo
		resultado = almacen
		almacen = 0
		coma = 0
	} else{
		switch (signo){
			case 1:
				resultado+=almacen
				almacen = 0
				coma = 0
				break
			case 2:
				resultado-=almacen
				almacen = 0
				coma = 0
				break
			case 3:
				resultado*=almacen
				almacen = 0
				coma = 0
				break
			case 4:
				resultado/=almacen
				almacen = 0
				coma = 0
				break
	}
	if (resultado.toString().length>10){
		alert("Entra")
		resultado=limitarDecimales(resultado)
	}
	document.getElementById("res").innerHTML = resultado;
		if (tipo != 5){
			signo = tipo
		}

	}
}

function limitarDecimales(num){
    if (num - Math.floor(num) == 0) {
        return num;
    } else {
        return num.toFixed(9);
    }
}

function borrar(){
	if (almacen==0){
		resultado = 0
		document.getElementById("ac").innerHTML = "AC";
		document.getElementById("res").innerHTML = 0;
	}else{
		almacen = 0
		document.getElementById("ac").innerHTML = "AC";
		document.getElementById("res").innerHTML = almacen;
	}
	

}




