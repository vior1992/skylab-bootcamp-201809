/*********PROJECT AIRLINES*********/

// This is an example of an array of objects... each position of the array contains one object...
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
];

//declaramos la funcion que calculara el coste medio de los vuelos
const averageFlightCost = function (flights) {
  let totalCost = 0;
  let numberOfFlights = flights.length;
  flights.forEach(function(flight){
    totalCost+=flight.cost;
  });
  return totalCost/numberOfFlights;
};

const lastFlights = function (flights) {
  let last5 = 5;
  console.log('Los ultimos 5 vuelos del día son los vuelos con destino a:\n\n')
  for(id = flights.length - 1; last5>=1; id--){
    console.log(flights[id].to);
    last5--;
  }
};

const eliminateFlight = function (id) {
  let index = flights.findIndex(flight =>  flight.id == id);
  console.log('The flight following flight has been removed: \n\n');
  console.table(flights[index]);
  flights.splice(id, 1);
  //comprobamos la nueva array
  console.table(flights);
}

const addFlight = function (id, to, from, cost, scale){
  flights.push({id, to, from, cost, scale});
  console.log(flights[id]);
}

//declaramos la variable para el nombre de usuario
let name;

//declaramos la funcion principal
const mainFunction = function () {
  //Se preguntará por el nombre de usuario y dará la bienvenida.
  name = prompt('Bienvenido. Cual es tu nombre?');
  console.log('Bienvenido ' + name + '. Estos son los vuelos programados para hoy:\n\n');
  //esta variable guardará la cantidad de vuelos con escala:
  let numberOfFlightsWithScales = 0;
  //El usuario visualizará todos los vuelos disponibles de una forma amigable:
  //El vuelo con origen: Barcelona, y destino: Madrid tiene un coste de XXXX€ y no realiza ninguna escala.
  flights.forEach(function(flight){
    if(flight.scale){
      numberOfFlightsWithScales++;
      console.log('\tEl vuelo con origen: ' + flight.from + ', y destino: ' + flight.to + ' tiene un coste de ' + flight.cost + '€ y no realiza ninguna escala.');
    } else {
      console.log('\tEl vuelo con origen: ' + flight.from + ', y destino: ' + flight.to + ' tiene un coste de ' + flight.cost + '€ y realiza escala.');
    }

  });
  //A continuación, el usuario verá el coste medio de los vuelos
  console.log('\nEl coste medio es de: ' + averageFlightCost(flights) + '€');
  //También podrá ver cuantos vuelos efectúan escalas.
  console.log('\nUn total de ' + numberOfFlightsWithScales + ' vuelos realizan escalas.');
  //Y, sabiendo que los ultimos 5 vuelos (los últimos 5 ID's) son los últimos del día, muestra al usuario sus destinos.
  lastFlights(flights);
};

//declaramos la funcion pro
const proFunction = function(){
  //Después de ver toda la información el programa pedirá al usuario si es ADMIN/USER
  let isAdmin = confirm('Are you Admin?');
  if(isAdmin){
    let addAnotherFlight = confirm('Do you want to add a flight?');
    //Poder crear, más vuelos, pidiendo la información por prompt(), sin poder pasar de 15 vuelos, si se intenta introducir uno más, saltará un alert().
    while(addAnotherFlight){
        let id = flights.length;
        let to = prompt('Cual es el Destino?');
        let from = prompt('Cual es el Origen?');
        let cost = prompt('Cual es el Coste?');
        let scale = confirm('Tiene escalas?');
        addFlight(id, to, from, cost, scale);
        addAnotherFlight = confirm('Do you want to add a flight?');
      }
    }
      //Poder eliminar vuelos mediante el ID.
      let eliminateAnotherFlight = confirm('Do you want to eliminate a Flight?');
      while(eliminateAnotherFlight){
          let id = prompt('Entra el número de ID:');
          eliminateFlight(id);
          eliminateAnotherFlight = confirm('Do you want to eliminate another flight?');
        }
      }

mainFunction();
proFunction();
