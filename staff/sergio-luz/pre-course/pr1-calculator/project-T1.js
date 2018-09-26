

//Haz una calculadora. Un único programa al que le pasarás dos parámetros y el usuario podrá visualizar por consola la suma, resta, multiplicación y división entre ambos números. 
//El resultado debería ser mostrado con 3 decimales como mucho (En caso de que hubieran). El programa debe contemplar y actuar correctamente en el caso de que el usuario 
//introduzca cualquier cosa que no sean números.

//Si el usuario introduce un solo numero, deberá mostrar SOLO su raíz cuadrada, si vuelve a introducir los dos, volverá a mostrar las 4 operaciones de siempre.
//Los resultados deberían almacenarse dentro de una array y mostrarlos de una forma amigable al usuario.

//-//
var Lis=[], i=0;
//-//
function Sistema(){
	Lis=[];
	RealizarOperacion();
	console.log(Lis);
	VisualizadorDatos(Lis);
}
//-//
function RealizarOperacion(){
	var res="";
	do{
		CaptarDatos();
		res=PreguntaContinuar();
	}while(res!=="n");
}
//-//
function CaptarDatos(){
	var num = prompt("Introduce un número", "8");
	if(isNaN(num)||num==""){
		alert("Valor incorrecto. Has de introducir un número")
		CaptarDatos(i);
	}else{
		Lis[i]=num;
		i++;
	}
}
//-//
function VisualizadorDatos(){
	var list=arguments[0];
	var Datos=[];
	var resultados=[];

	if(list.length==1){
		resultados[0]=Math.sqrt(list[0]);
		console.log("La raiz cuadrada de "+list[0]+ " es "+resultados[0].toFixed(3));
	}else{
		Datos=EjecutarCalculadora(list);
		for (num in list){
			if(num==0){
				resultados[0]=" "+list[0];
				resultados[1]=" "+list[0];
				resultados[2]=" "+list[0];
				resultados[3]=" "+list[0];
			}
			else
			{
				//Suma
				resultados[0]+=FraseSumar(list[num]);
				//Resta
				resultados[1]+=FraseRestar(list[num]);
				//Multiplicar
				resultados[2]+=FraseMultiplicar(list[num]);
				//Dividir
				resultados[3]+=FraseDividir(list[num]);
			}
		}
		//Suma
		resultados[0]+=" = "+Datos[0];
		//Resta
		resultados[1]+=" = "+Datos[1];
		//Multiplicar
		resultados[2]+=" = "+Datos[2];
		//Dividir
		resultados[3]+=" = "+Datos[3];
		console.log("Results = ["+resultados+"]")
		sleep(1000);
	}
}
//-//
function EjecutarCalculadora(){
	var ArrayResultados=[];
	ArrayResultados[0]=sumar(arguments[0]);
	ArrayResultados[1]=restar(arguments[0]);
	ArrayResultados[2]=multiplicar(arguments[0]);
	ArrayResultados[3]=dividir(arguments[0]);
	return ArrayResultados;
}
function sumar(){
	var list=arguments[0];
    var tot=0;
    for (i in list){
    	if(i==0){
    		tot=tot+parseInt(list[i]);}
    	else{
    		tot += parseInt(list[i]);  }
    }
    return tot;
}
function restar(){
	var list=arguments[0];
    var total=0;
    for (i in list){
    	if(i==0){total+=list[i];}
    	else{total -= list[i];  }
    }
    return total
}
function multiplicar(){
	var list=arguments[0];
    var total = 0;
    for (i in list){
    	if(total==0){
    		total=list[i];
    	}else{
    	    total = total*list[i]   
    	}
    }
    return total
}
function dividir(){
	var list=arguments[0];
    var total = 0;
    for (i in list){
    	if(total==0){
    		total=list[i];
    	}else{
    	    total = total/list[i]   
    	}    
    }
    return total.toFixed(3)
}
//-//
function FraseSumar(){
	var Str=" + "+arguments[0];
	return Str;	
}
function FraseRestar(){
	var Str=" - "+arguments[0];
	return Str;	
}
function FraseMultiplicar(){
	var Str=" * "+arguments[0];
	return Str;	
}
function FraseDividir(){
	var Str=" / "+arguments[0];
	return Str;	
}
//-//
function PreguntaContinuar(){
	var num = prompt("¿Quieres continuar introduciendo números? Introduce Y en caso afirmativo y N en caso negativo");
	if(num!=null){	num=num.toLowerCase();}
	switch(num) {
        case "y":
        return num;
        case "n":
        return num;
        default:
        alert("No he entendido la respuesta. Por favor, responde otra vez");
    }
}
//-//
function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
  MasOperaciones();	
}
function MasOperaciones(){
	var num=prompt("¿Quieres realizar las operaciones con otros números nuevos? y/n")
	if(num!=null){	num=num.toLowerCase();}
	switch(num){
    case "y":
    	Sistema();
    case "n":
    	alert("Bye!");
   	default:
        alert("No he entendido la respuesta. Por favor, responde otra vez");
	}
}
//-//
Sistema();
//-//
