//Mini-Proyecto del tema 2
//Skylab Airlines!

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
//console.log(flights[0].to);

let name = prompt("Como te llamas?");
console.log("Hola, " + name + "! Bienvenido/a a Skylab Airlines!");
console.log("Estos son los vuelos de hoy:");


//Iba a usar "for... in" pero he leido que no es recomendable cuando el orden del array importa pues "for...in" recorreo el array de forma aleatoria. Lo he probado con "for...in" y funcionaba bien, pero por si acaso...
let scales = 0;
for (let index = 0; index < flights.length; index++) {
  if (flights[index].scale === false) {
  console.log('El vuelo con origen ' + flights[index].from + ' y destino: ' + flights[index].to + ' tiene un coste de ' + flights[index].cost + ' € y no realiza ninguna escala');
    } else if (flights[index].scale === true) {
      console.log('El vuelo con origen ' + flights[index].from + ', y destino: ' + flights[index].to + ' tiene un coste de ' + flights[index].cost + '€ y realiza escala');
      scales++;
    }
}

function averageCost (array) {
  let totalCost = 0;
  let averageCost = 0;
  
  for (let indexAverageCost in array){
    totalCost = totalCost + array[indexAverageCost].cost;
  }
  averageCost = totalCost / (array.length);
  averageCost = averageCost.toFixed(2);
  return averageCost;
}

averageCost = averageCost(flights);
console.log('El coste medio de los vuelos es de ' + averageCost + ' euros.');
console.log('Hay ' + scales + ' vuelos que realizan escalas hoy.')
console.log('Los destinos de los ultimos vuelos del dia son:');

//Lo mismo aqui que arriba: no he usado "for...in" por si acaso afecta al orden
for (let indexLastFlights = flights.length-1; indexLastFlights >= flights.length-5; indexLastFlights--) {
  console.log(flights[indexLastFlights].to);
}


//PRO

let adminOrUser = ('');
let idNum = 0;

function addFlight (origin, destination, cost, scale) {
  let newFlight = {
  	id: flights.length,
    to: destination,
    from: origin,
    scale: scale 
  	};  
  flights.push(newFlight);
  console.log('El vuelo ' + flights[flights.length-1].from + ' - ' + flights[flights.length-1].to + ' ha sido introducido correctamente');
}

adminOrUser = prompt('Eres ADMIN o USER?');
adminOrUser = adminOrUser.toUpperCase();

while (adminOrUser !== 'ADMIN' && adminOrUser !=='USER') {
  console.log('Invalid option. ');
  adminOrUser = prompt('Eres ADMIN o USER?'); 
  adminOrUser = adminOrUser.toUpperCase();
}

let optionAdmin = 0;
let counter = 0;
let end = false;
let delOneMoreFlight = '';
let exit = '';

while (optionAdmin !== 3) {
  
if (adminOrUser === 'ADMIN') 
{
  console.log("Que deseas hacer?\n1.Crear vuelos\n2.Eliminar vuelos\n3.Salir");
  optionAdmin = prompt('Introduce numero a continuacion:');
  
  switch (optionAdmin) {
    case '1':
      end = false;
      
      let origin = [];
      let destination = [];
      let cost = 0;
      let scale = false;
      let addOneMoreFlight = " ";
            
      while (counter <15 && end === false) 
      {
        console.log('Introduce los siguientes datos:');
        origin = prompt('Origen');
        destination = prompt('Destino');
        cost = prompt('Coste:');
        scale = prompt('Escalas: (true/false)');
        //CONTROLAR INFO ENTRADA
                
        addFlight(origin, destination, cost, scale);
        counter++;
        addOneMoreFlight = prompt('Añadir otro vuelo?(Y/N)');
        
        if (addOneMoreFlight === 'N') {
          end = true;
        }
        else if (addOneMoreFlight !== 'Y' && addOneMoreFlight !== 'N') {
          console.log('Invalid option');
          end = true;
        }
      }
      if (counter === 15) {
        console.log('Has llegado al maximo de vuelos que puedes introducir.');
        end = true;
        }
      break;
    case '2':
      end = false;
      while (end === false) 
      {
        idNum = prompt('Introduce el id del vuelo que quieres eliminar');
        flights.splice(idNum, 1);
        console.log('Vuelo eliminado correctamente');
        delOneMoreFlight = prompt('Eliminar otro vuelo?(Y/N)');
        delOneMoreFlight = delOneMoreFlight.toUpperCase();
        
        if (delOneMoreFlight === 'N') {
          end = true;
        }
        else if (delOneMoreFlight !== 'Y' && delOneMoreFlight !== 'N') {
          console.log('Invalid option');
          end = true;
        }
      }
      break;
    case '3':
      exit = prompt('Deseas salir?(Y/N)');
      exit = exit.toUpperCase();
      if (exit === 'Y') {
        console.log('Hasta la proxima!');
        optionAdmin = 3;
      }
      //else if (exit !=='Y' && !=='N') { console.log('Invalid option!'); }
      
      break;
  }    
}

else if (adminOrUser === 'USER') {
  
  let precio = 0;
  console.log('Quieres buscar vuelos de un precio mas ALTO, mas BAJO o IGUAL?');
  let optionUser = prompt(' Introduce ALTO, BAJO o IGUAL a continuacion:');
  optionUser = optionUser.toUpperCase();
  let indexOptionUser = 0;
  let idFlight = 0;

  switch (optionUser) 
  {
    case 'ALTO':
      precio = prompt('Introduce precio minimo');
      for (indexOptionUser in flights) {
        if (flights[indexOptionUser].cost > precio) {
            if (flights[indexOptionUser].scale === false) {
            console.log('Id. vuelo: ' + flights[indexOptionUser].id + '. Vuelo con origen ' + flights[indexOptionUser].from + ' y destino: ' + flights[indexOptionUser].to + ' tiene un coste de ' + flights[indexOptionUser].cost + ' € y no realiza ninguna escala');
            } else if (flights[indexOptionUser].scale === true) {
            console.log('Id. vuelo: ' + flights[indexOptionUser].id + '. Vuelo con origen ' + flights[indexOptionUser].from + ', y destino: ' + flights[indexOptionUser].to + ' tiene un coste de ' + flights[indexOptionUser].cost + '€ y realiza escala');
            }
        }
      }
      idFlight = prompt('Indique el ID del vuelo que desea comprar:');
      flights.splice(idFlight, 1);
      console.log("Gracias por su compra, vuelva pronto.");
      break;

    case 'BAJO':
      precio = prompt('Introduce precio maximo');
      for (indexOptionUser in flights) {
        if (flights[indexOptionUser].cost < precio) {
            if (flights[indexOptionUser].scale === false) {
            console.log('Id. vuelo: ' + flights[indexOptionUser].id + '. Vuelo con origen ' + flights[indexOptionUser].from + ' y destino: ' + flights[indexOptionUser].to + ' tiene un coste de ' + flights[indexOptionUser].cost + ' € y no realiza ninguna escala');
            } else if (flights[indexOptionUser].scale === true) {
            console.log('Id. vuelo: ' + flights[indexOptionUser].id + '. Vuelo con origen ' + flights[indexOptionUser].from + ', y destino: ' + flights[indexOptionUser].to + ' tiene un coste de ' + flights[indexOptionUser].cost + '€ y realiza escala');
            }
        }
      }
      idFlight = prompt('Indique el ID del vuelo que desea comprar:');
      flights.splice(idFlight, 1);
      console.log("Gracias por su compra, vuelva pronto.");
      break; 

    case 'IGUAL':
      precio = prompt('Introduce el precio que quieres pagar');
      for (indexOptionUser in flights) {
        if (flights[indexOptionUser].cost === precio) {
            if (flights[indexOptionUser].scale === false) {
            console.log('Id. vuelo: ' + flights[indexOptionUser].id + '. Vuelo con origen ' + flights[indexOptionUser].from + ' y destino: ' + flights[indexOptionUser].to + ' tiene un coste de ' + flights[indexOptionUser].cost + ' € y no realiza ninguna escala');
            } else if (flights[indexOptionUser].scale === true) {
            console.log('Id. vuelo: ' + flights[indexOptionUser].id + '. Vuelo con origen ' + flights[indexOptionUser].from + ', y destino: ' + flights[indexOptionUser].to + ' tiene un coste de ' + flights[indexOptionUser].cost + '€ y realiza escala');
            }
        }
      }
      idFlight = ('Indique el ID del vuelo que desea comprar:');
      flights.splice(idFlight, 1);
      console.log("Gracias por su compra, vuelva pronto.");
      break;
    default:
      console.log('No es una opcion valida. ');
  }
  optionAdmin = 3;
  }
}

