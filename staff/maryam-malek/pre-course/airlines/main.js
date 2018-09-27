//Skylab Airlines!

//Programa una inferfaz de usuario para una aerolinea (por terminal...). Esta aerolinea dispondrá de 10 vuelos para el dia de hoy, para empezar, estos vuelos estarán declarados de manera global, cuando se llame a la función:

//Se preguntará por el nombre de usuario y dará la bienvenida.
//El usuario visualizará todos los vuelos disponibles de una forma amigable: El vuelo con origen: Barcelona, y destino: Madrid tiene un coste de XXXX€ y no realiza ninguna escala.
//A continuación, el usuario verá el coste medio de los vuelos.
//También podrá ver cuantos vuelos efectúan escalas.
//Sabiendo que los ultimos 5 vuelos (los últimos 5 ID's) son los últimos del día, muestra al usuario sus destinos.

function airlinesGeneral(){

	var flights = [
	    { id: 00, to: 'Bilbao', from: 'Barcelona', cost: 1600, scale: false },
	    { id: 01, to: 'New York', from: 'Barcelona', cost: 700, scale: false },
	    { id: 02, to: 'Los Angeles', from: 'Madrid', cost: 1100, scale: true },
	    { id: 03, to: 'Paris', from: 'Barcelona', cost: 210, scale: false },
	    { id: 04, to: 'Roma', from: 'Barcelona', cost: 150, scale: false },
	    { id: 05, to: 'London', from: 'Madrid', cost: 200, scale: false },
	    { id: 06, to: 'Madrid', from: 'Barcelona', cost: 90, scale: false },
	    { id: 07, to: 'Tokyo', from: 'Madrid', cost: 1500, scale: true },
	    { id: 08, to: 'Shangai', from: 'Barcelona', cost: 800, scale: true },
	    { id: 09, to: 'Sydney', from: 'Barcelona', cost: 150, scale: true },
	    { id: 10, to: 'Tel-Aviv', from: 'Madrid', cost: 150, scale: false }
	];




	function userName(name){
		var userName = window.prompt('Could you type your name?', 'Mary Poppins');
		console.log( "Hello " + userName + ". Thanks for using Skylab Airlines!");
	}

	userName('Maryam')

	function viewFlights(flights){
		for (var i=0; i<flights.length; i++){
			if(flights[i].scale == true){
			    var scaleMessage = "makes one scale.";	
			}else{
				var scaleMessage = "doesn't make any scale."
			}
			
			console.log("The flight with origin: " + flights[i].from + " to: " + flights[i].to + " costs: " + flights[i].cost + "€ and " + scaleMessage)
		}
	}

	viewFlights(flights);

	function averageCost(flights){
		var costsSum = 0;
		for (var i=0; i<flights.length; i++){
			costsSum = costsSum + flights[i].cost;
			
		}
		var averageCost = Math.round(costsSum/flights.length*100)/100;
		console.log('The average price of the flights is: ' + averageCost + '€.');

	}
	averageCost(flights);

	function scaleFlights(flights){

		console.log('Next flights are the ones with scales:')
		for (var i=0; i<flights.length; i++){
			if(flights[i].scale == true){
			    console.log("The flight with origin: " + flights[i].from + " to: " + flights[i].to + " and cost: " + flights[i].cost + "€.")	
			}
		}
	}
	scaleFlights(flights);

	function showLastsFlights(flights){
		console.log('Next flights are the last ones of the day:')
		for (var i=6; i<flights.length; i++){
			if(flights[i].scale == true){
			    var scaleMessage = "makes one scale.";	
			}else{
				var scaleMessage = "doesn't make any scale."
			}
			
			console.log("The flight with origin: " + flights[i].from + " to: " + flights[i].to + " costs: " + flights[i].cost + "€ and " + scaleMessage)
		}
	}
	showLastsFlights(flights);

}
airlinesGeneral();

