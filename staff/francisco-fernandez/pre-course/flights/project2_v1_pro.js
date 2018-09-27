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

//funcion de bienvenida
function welcome(){
	console.log("Welcome "+prompt("Please write usuary name"));
}

//función que muestra todos los vuelos
function allFlights(flights){
	flights.forEach(function(element){
		if(element.scale===true){
			var scale = "has";
		}
		else{
			var scale = "has no";
		}
		console.log("The flight from "+element.from+" to "+element.to+" costs "+element.cost+" euros and "+scale+ " scales");
  	});
}

//función que calcula el coste medio de los vuelos del día
function averageCost(flights){
	var sumCost=0;
	flights.forEach(function(element){
		sumCost=sumCost+element.cost;
  		
  	});
  	console.log("The average cost of a flight today is "+(sumCost/flights.length)+ " euros");
}

//función que dice cuantos vuelos hay con escala
function flightsWithScale(flights){
	var sumScales = 0;
	flights.forEach(function(element){
		if(element.scale===true){
			sumScales = sumScales+1;
		}
		
  	});
  	console.log("There are "+sumScales+" flights with scale");
}

//función que muestra los últimos cinco vuelos de la lista
function lastFlights(flights){
	flights.forEach(function(element){
		if(element.id>=(flights.length-5)){
			console.log("The flight "+element.id+" is the last flight to "+element.to);
		}
});
}

//funcion que pregunta si el usuario es ADMIN o USER, devuelve la respuesta solo si es ADMIN o USER
function adminuser(){
	var userclass;
	while(userclass != "ADMIN" && userclass != "USER"){
		userclass = prompt("Are you ADMIN or USER?");
		if(userclass != "ADMIN" && userclass != "USER"){
		alert("You must write ADMIN or USER");
	}
	}
	return userclass;
}

//función que ejecuta unas acciones dependientemente de si se es ADMIN o USER, hay que pasárselo como argumento

function usercontrol(user){
	var flightstotal=flights.length;
	var todelete;
	var cost;
	var compare;
	if(user==="ADMIN"){
		while(flights.length<15){
		if(prompt("Do you wish to create a new flight? if yes write y")==="y"){
		var newf = {id: flights[flights.length-1].id+1, to: prompt("To:"), from: prompt("From:"), cost: Number(prompt("Cost:")),scale: toboolean(prompt("Scale (true/false):"))};
		flights.push(newf);
		}	
		else{
			break;
		}
		}

		while(flights.length!=0){
		if(prompt("Do you wish to delete a flight? if yes write y")==="y"){
			todelete = Number(prompt("Please id of the flight you want to delete"));
			for(var i=0;i<flights.length;i++){
				if(flights[i].id===todelete){
					flights.splice(i,1);
				}
			}
		}

		else{
			break;
		}
		}
		console.log("After your changes-->")
		allFlights(flights);
	}
	if(user==="USER"){
		cost=Number(prompt("Search by import, introduce import:"));
		while(compare!="lower"&&compare!="higher"&&compare!="equal"){
			compare=prompt("Search lower/higher/equal:")
			if(compare!="lower"&&compare!="higher"&&compare!="equal"){
				alert("El valor introducido no es valido");
			}
		}
		if(compare==="lower"){
			console.log("LIST OF FLIGHTS WITH COST LESS THAN "+cost);
			flights.forEach(function(element) {
  			if(element.cost < cost){
  				if(element.scale===true){
				var scale = "has";
				}
				else{
				var scale = "has no";
				}
				console.log("The flight from "+element.from+" to "+element.to+" costs "+element.cost+" euros and "+scale+ " scales");
  				}
			});
		}

		else if(compare==="higher"){
			console.log("LIST OF FLIGHTS WITH COST MORE THAN "+cost);
			flights.forEach(function(element) {
  			if(element.cost > cost){
  				if(element.scale===true){
				var scale = "has";
				}
				else{
				var scale = "has no";
				}
				console.log("The flight from "+element.from+" to "+element.to+" costs "+element.cost+" euros and "+scale+ " scales");
  				}
			});
		}

		else if(compare==="equal"){
			console.log("LIST OF FLIGHTS WITH COST EQUAL TO "+cost);
			flights.forEach(function(element) {
  			if(element.cost === cost){
  				if(element.scale===true){
				var scale = "has";
				}
				else{
				var scale = "has no";
				}
				console.log("The flight from "+element.from+" to "+element.to+" costs "+element.cost+" euros and "+scale+ " scales");
  				}
			});
		}



	}



}

//funcion que pasa "true" y "false" a boolean

function toboolean(word){
	if(word==="true"){
		return true;
	}
	if(word==="false"){
		return false;
	}
}


//función que llama a todas las funciones anteriores
function showAll(flights){
	welcome();
	allFlights(flights);
	averageCost(flights);
	flightsWithScale(flights);
	lastFlights(flights);
	usercontrol(adminuser());
}

showAll(flights);