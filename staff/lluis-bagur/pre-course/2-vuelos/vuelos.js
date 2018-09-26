project-tema2.js

/* Programa una inferfaz de usuario para una aerolinea (por terminal...). Esta aerolinea dispondrá de 10 vuelos para el dia de hoy, para empezar, estos vuelos estarán declarados de manera global, cuando se llame a la función:

Se preguntará por el nombre de usuario y dará la bienvenida.
El usuario visualizará todos los vuelos disponibles de una forma amigable: El vuelo con origen: Barcelona, y destino: Madrid tiene un coste de XXXX€ y no realiza ninguna escala.
A continuación, el usuario verá el coste medio de los vuelos.
También podrá ver cuantos vuelos efectúan escalas.
Y, sabiendo que los ultimos 5 vuelos (los últimos 5 ID's) son los últimos del día, muestra al usuario sus destinos.*/

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

var user = prompt(" qual es su nombre?");
alert("Bienvenido!")

var escalas = 0;

flights.forEach(function(obj){

	if (obj.scale === false) {
	console.log("El vuelo con origen: " + obj.from + "y destino: " + obj.to + " tiene un coste de " + obj.cost + "€ " + "y no realiza ninguna escala.")
	}
	else{
	console.log("El vuelo con origen: " + obj.from + "y destino: " + obj.to + " tiene un coste de " + obj.cost + "€ " + "y realiza escala.")
	
	escalas ++;

	} 
})


var acc=0;
var count = 0;

flights.forEach(function(obj){
	acc += obj.cost;
	count ++;

	})

var media = acc/count;
var lastFlights = count-5;

console.log ("El precio medio de todos los vuelos es de: " + media + "€");

console.log ("el total de vuelos con escala es: " + escalas);

console.log("Estos son los últimos destinos de hoy: ")

flights.forEach(function(obj){

	if (obj.id >= lastFlights) {
	console.log("- " + obj.to)
	}
	else{
	
	} 
})












