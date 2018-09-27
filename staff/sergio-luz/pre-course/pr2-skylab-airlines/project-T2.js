

/*Programa una inferfaz de usuario para una aerolinea (por terminal...). Esta aerolinea dispondrá de 10 vuelos para el dia de hoy, para empezar, estos vuelos estarán 
declarados de manera global, cuando se llame a la función:




Si eres ADMIN, la función debería permitir:

Poder crear, más vuelos, pidiendo la información por prompt(), sin poder pasar de 15 vuelos, si se intenta introducir uno más, saltará un alert().
Poder eliminar vuelos mediante el ID.
Si eres USER la función debería permitir:

Buscar por precio ( más alto, más bajo o igual), el usuario debería mostrar los datos de los vuelos encontrados y, indicando el ID, el programa responderá: 
"Gracias por su compra, vuelva pronto."*/


//-//
var flights = [
	{id: 00, to: "New York", from: "Barcelona", cost: 700,scale: false},
	{id: 01, to: "Los Angeles", from: "Madrid", cost: 1100,scale: true},
	{id: 02, to: "Paris", from: "Barcelona", cost: 210,scale: false},
	{id: 03, to: "Roma", from: "Barcelona", cost: 150,scale: false},
	{id: 04, to: "London", from: "Madrid", cost: 200,scale: false},
	{id: 05, to: "Madrid", from: "Barcelona", cost: 90,scale: false},
	{id: 06, to: "Tokyo", from: "Madrid", cost: 1500,scale: true},
	{id: 07, to: "Shangai", from: "Barcelona", cost: 800,scale: true},
	{id: 08, to: "Sydney", from: "Barcelona", cost: 150,scale: true},
	{id: 09, to: "Tel-Aviv", from: "Madrid", cost: 150,scale: false}
]
//-//
//Programa principal
function Main(){
	NombreUser();

	flights.forEach(visualizarDatos);

	inicializarCosteMedio();
	flights.forEach(calcularCosteMedio);
	visualizarCosteMedio();

	inicializarContadorEscalas();
	flights.forEach(contarEscalas);
	visualizarNumEscalas();

	console.log("\n");
	flights.forEach(Mostrar5ultimosVuelos);
}
//-//
//Se preguntará por el nombre de usuario y dará la bienvenida.
var name="";
function NombreUser(){
	while(name=="")	{name = prompt("Introduce tu nombre", "Eustaquio");}
	alert("Bienvenido "+ name);
}
//-//
//El usuario visualizará todos los vuelos disponibles de una forma amigable: El vuelo con origen: Barcelona, y destino: Madrid tiene un coste de XXXX€ y no realiza ninguna escala.
function visualizarDatos(obj){
	if(obj.scale==false){
		console.log("El vuelo con origen: "+obj.from+", y destino: "+obj.to+" tiene un coste de "+obj.cost+"€ y no realiza ninguna escala.")
		return ("El vuelo con origen: "+obj.from+", y destino: "+obj.to+" tiene un coste de "+obj.cost+"€ y no realiza ninguna escala.");
	}else{
		console.log("El vuelo con origen: "+obj.from+", y destino: "+obj.to+" tiene un coste de "+obj.cost+"€ y realiza escala.")
		return ("El vuelo con origen: "+obj.from+", y destino: "+obj.to+" tiene un coste de "+obj.cost+"€ y realiza escala.");
	}
}
//-//
//A continuación, el usuario verá el coste medio de los vuelos.
var costeMedio;
function inicializarCosteMedio(){

	costeMedio=0;
}
function calcularCosteMedio(obj){

	costeMedio+=obj.cost;
}
function visualizarCosteMedio(){

	console.log("\nEl coste medio de los vuelos es "+(costeMedio/flights.length)+"€");
}
//-//
//También podrá ver cuantos vuelos efectúan escalas.
var acumuladorEscalas;
function inicializarContadorEscalas(){

	acumuladorEscalas=0;
}
function contarEscalas(obj){
	if(obj.scale==true){
		acumuladorEscalas++;
	}
}
function visualizarNumEscalas(){

	console.log("\n"+acumuladorEscalas+ ' vuelos hacen escala');
}
//-//
//Y, sabiendo que los ultimos 5 vuelos (los últimos 5 ID's) son los últimos del día, muestra al usuario sus destinos.
function Mostrar5ultimosVuelos(obj){
	if(obj.id>=(flights.length-5)){
		console.log("El vuelo que sale de "+obj.from+" con destino "+obj.to+ ", con coste: "+obj.cost+"€, es uno de los 5 últimos del día");
	}
	if(obj.id==(flights.length-1)){
		sleep(1000);	
	}
}
//-//
//PRO!: -------------------------------------------------------------------------------------------------------------------------------------
//-//
//Después de ver toda la información el programa pedirá al usuario si es ADMIN/USER, dependiendo de la elección, el programa se comportará de la siguiente manera:
function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
  comprobarPermisosUsuario();	
}
function comprobarPermisosUsuario(){
	var permiso = prompt("Si eres administrador introduce ADMIN. Si eres usuario introduce USER.", "user");
	if (permiso!=null){ permiso=permiso.toUpperCase();}
	switch(permiso) {
        case "ADMIN":
        	console.log("\nPermisos de ADMIN concedidos");
        	PreguntarCrearMasVuelos();
        	break;
    	case "USER":
        	console.log("\nPermisos de USER concedidos");
        	programaUser();
        	break;
        default:
        	alert("No he entendido la respuesta. Por favor, responde otra vez");
        	comprobarPermisosUsuario();
        }
}
//-//
//Si eres ADMIN, la función debería permitir:
//-//
//Poder crear, más vuelos, pidiendo la información por prompt(), sin poder pasar de 15 vuelos, si se intenta introducir uno más, saltará un alert().
var MaxVuelos=15;
function PreguntarCrearMasVuelos(){
	var querer= prompt("¿Quieres crear más vuelos? (El limite son "+MaxVuelos+" al día. Actualmente existen "+flights.length+" en la lista) \ny/n", "n");
	if(querer!=null){	querer=querer.toLowerCase();}
	switch(querer) {
        case "y":
        	if(flights.length<MaxVuelos){
    			crearMasVuelos();
    		}else{
		    	alert("Se ha alcanzado el límite máximo de vuelos ("+MaxVuelos+").");
		    	MostrarListaEliminar();
		    }
        	break;
    	case "n":
    		MostrarListaEliminar();
        	break;
        default:
        	alert("No he entendido la respuesta. Por favor, responde otra vez");
        	PreguntarCrearMasVuelos();
        }
}
function crearMasVuelos(){
	var procedencia= prompt("Indica la ciudad de procedencia del vuelo", "Barcelona");
	var destino=prompt("Indica la ciudad de destino del vuelo", "Valencia");
	var escalas=preguntarEscalas();
	var precio= preguntarPrecio();
	var object={};
	var i=flights.length;
	object.id=i;
	object.from=procedencia;
	object.to=destino;
	object.scale=escalas;
	object.cost=precio;
	flights.push(object);
	MostrarListaAñadir();
}
function preguntarEscalas(){
	var escalas=prompt("El vuelo tiene alguna escala? y/n", "n");
	escalas=escalas.toLowerCase();
	switch(escalas) {
        case "y":
        	return escalas=true;
    	case "n":
    		return escalas=false;
        default:
        	alert("No he entendido la respuesta. Por favor, responde otra vez");
        	preguntarEscalas();
        }
}
function preguntarPrecio(){
	var precio=parseFloat(prompt("Indica el precio del vuelo", 150));
	if(precio>=0) {
       	return precio;
	}
	else{
		alert("No he entendido la respuesta. Por favor, responde otra vez");
		preguntarPrecio();
    }
}
function MostrarListaAñadir(){
	console.log("\nLa lista de vuelos actual es la siguiente:\n");
	for (var i=0; i<flights.length; i++){
		flights[i].id=i; //actualizamos las ID
		console.log("ID : "+flights[i].id+ " , From: "+flights[i].from+" to "+flights[i].to+ ", cost: "+flights[i].cost);
	}	
	//pausa para verlos en consola
	var start = new Date().getTime();
  	for (var i = 0; i < 1e7; i++) {
    	if ((new Date().getTime() - start) > 1000){
    	  break;
  	  }
  	}
  	//fin de la pausa
  	PreguntarCrearMasVuelos();
}
//-//
//Poder eliminar vuelos mediante el ID.
function MostrarListaEliminar(){
	console.log("\nLa lista de vuelos actual es la siguiente:\n");
	for (var i=0; i<flights.length; i++){
		flights[i].id=i; //actualizamos las ID
		console.log("ID : "+flights[i].id+ " , From: "+flights[i].from+" to "+flights[i].to+ ", cost: "+flights[i].cost);
	}	
	//pausa para verlos en consola
	var start = new Date().getTime();
  	for (var i = 0; i < 1e7; i++) {
    	if ((new Date().getTime() - start) > 1000){
    	  break;
  	  }
  	}
  	//fin de la pausa
  	EliminarVuelos();
}
function EliminarVuelos(){
  	var querer= prompt("¿Quieres eliminar vuelos de la lista? y/n");
	if(querer!=null){	querer=querer.toLowerCase();}
	switch(querer) {
        case "y":
        	var idEliminar=prompt("Introduce la ID del vuelo que quieres eliminar. En caso de descartar esta opcion introduce N/n");
        	if(idEliminar=="N"||idEliminar=="n"){	
        		break;
        	}
        	else if(!isNaN(idEliminar)){
        		if(0<=idEliminar<flights.length){
        			flights.splice(idEliminar,1);
        			alert("Vuelo eliminado");
        			MostrarListaEliminar();
        		}else{
        			console.log("El numero de ID introducido no corresponde a ningun vuelo. Vuelve a intentarlo.")
        			EliminarVuelos();
        		}
			}
    		else
    		{	
    			alert("No he entendido la respuesta. Por favor, responde otra vez");
        		EliminarVuelos();
        	}
    	case "n":
        	break;
        default:
        	alert("No he entendido la respuesta. Por favor, responde otra vez");
        	EliminarVuelos();
        }
}
//-//
//Si eres USER la función debería permitir:
//-//
//Buscar por precio ( más alto, más bajo o igual), el usuario debería mostrar los datos de los vuelos encontrados y, indicando el ID, el programa responderá: 
//"Gracias por su compra, vuelva pronto."
function programaUser(){
	var accion= BuscarPrecio();
	var numero= IndicarValorPrecio();
	var contador=0;
	var IDcomprables=[];
	//Buscamos y mostramos los resultados solicitados
	flights.forEach(function(obj){
	    if(obj.cost>numero && accion=="A"){	
	    	console.log("ID : "+obj.id+ " , From: "+obj.from+" to "+obj.to+ ", cost: "+obj.cost); 
	    	contador++;
	    	IDcomprables.push(obj.id);
	    }
	    if(obj.cost<numero&& accion=="B"){	
	    	console.log("ID : "+obj.id+ " , From: "+obj.from+" to "+obj.to+ ", cost: "+obj.cost); 
	    	contador++;
	    	IDcomprables.push(obj.id);
	    }
	    if(obj.cost==numero&& accion=="I"){	
	    	console.log("ID : "+obj.id+ " , From: "+obj.from+" to "+obj.to+ ", cost: "+obj.cost); 
	    	contador++;
	    	IDcomprables.push(obj.id);
		}
	})
	//En caso de no haber obtenido resultados informamos al usuario
	if (contador==0){
		var sino=prompt("No se han encontrado resultados. ¿Quieres realizar otra busqueda? y/n", "y");
		if(sino=="y"){
			programaUser();
		}else{
			alert("Bye!");
		}
	} //Si hemos obtenido resultados esperamos para que le aparezcan los resultados en pantalla y le enviamos a la opción de compra
	else{
		var start = new Date().getTime();
		for (var i = 0; i < 1e7; i++) {
		    if ((new Date().getTime() - start) > 1000){
		      break;
		    }
		  }
		ComprarVuelo(IDcomprables);
	}
}
function BuscarPrecio(){
	var letra= prompt("Buscar por precio:\nA=> Mas alto que...\nB=> Mas bajo que...\nI=> Igual a...","I");
	if(letra!=null){	letra=letra.toUpperCase();}
	switch(letra) {
        case "A":
        return letra;
        case "B":
        return letra;
        case "I":
        return letra;
        default:
        	alert("No he entendido la respuesta. Por favor, responde otra vez");
        	BuscarPrecio();
    }
}
function IndicarValorPrecio(){
	var num= parseFloat(prompt("Introduce el valor para buscar", 250));
	if(isNaN(num)||num<=0){
		alert("No he entendido la respuesta. Por favor, responde otra vez");
		IndicarValorPrecio();
	}else{
		return num;
	}
}
function ComprarVuelo(IDcomprables){
	var num= parseFloat(prompt("Introduce el valor de la ID del vuelo que deseas comprar", 1));
	if(isNaN(num)||num<0){
		alert("No he entendido la respuesta. Por favor, responde otra vez");
		ComprarVuelo();
	}else if(IDcomprables.includes(num)){
		alert("Gracias por su compra, vuelva pronto.")
	}else{
		alert("La ID introducida no corresponde a ningún resultado encontrado según las caracteristicas introducidas");
		ComprarVuelo();
	}
}
//-//
Main();