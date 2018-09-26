/*
    -   Airline ---------------------------------------------------------
    Programa una inferfaz de usuario para una aerolinea
    Esta aerolinea dispondrá de 10 vuelos para el dia de hoy
    Se preguntará por el nombre de usuario y dará la bienvenida
    El usuario visualizará todos los vuelos disponibles de una forma amigable
    A continuación, el usuario verá el coste medio de los vuelos
    También podrá ver cuantos vuelos efectúan escalas.
    los ultimos 5 vuelos... muestra al usuario sus destinos
*/

function Airline(flights) {

    this.flights = flights;

    this.clientName = () => {
        let name = prompt("Please enter your name");
        return (name) ? console.log(`Welcome ${name}`) : this.clientName();
    };

    this.information = () => {
        this.flights.forEach(flight => {
            console.log(`
                        El vuelo con origen: ${flight.from}, 
                        y destino: ${flight.to} 
                        tiene un coste de ${flight.cost}€ 
                        y ${(flight.scale) ? 'si' : 'no'} realiza escala.
                        `);
        });
    };

    this.averageCost = () => {
        let total = 0;
        this.flights.forEach(obj => total += obj.cost);
        console.log(`El coste medio de los vuelos ${total / flights.length}€`);
    };

    this.withScale = () => {
        this.flights.filter(f => f.scale).forEach(f => console.log(`${f.from} => ${f.to} => ${f.cost}€ `));
    };

    this.last = () => {
        let ids = [];
        this.flights.forEach(flight => ids.push(flight.id));
        let max =  Math.max.apply(null, ids);
        let last = this.flights.filter(flight => flight.id > max - 5);
        last.forEach(f => console.log(` ${f.from} => ${f.to} => ${f.cost}€ `));
    }


}

let flightsInfo = [
    {id: 0, to: "New York", from: "Barcelona", cost: 700,scale: false},
    {id: 1, to: "Los Angeles", from: "Madrid", cost: 1100,scale: true},
    {id: 2, to: "Paris", from: "Barcelona", cost: 210,scale: false},
    {id: 3, to: "Roma", from: "Barcelona", cost: 150,scale: false},
    {id: 4, to: "London", from: "Madrid", cost: 200,scale: false},
    {id: 5, to: "Madrid", from: "Barcelona", cost: 90,scale: false},
    {id: 6, to: "Tokyo", from: "Madrid", cost: 1500,scale: true},
    {id: 7, to: "Shangai", from: "Barcelona", cost: 800,scale: true},
    {id: 8, to: "Sydney", from: "Barcelona", cost: 150,scale: true},
    {id: 9, to: "Tel-Aviv", from: "Madrid", cost: 150,scale: false}
];

let flights = new Airline(flightsInfo);

flights.clientName();
flights.information();
flights.averageCost();
flights.withScale();
console.log('Los ultimos 5 vuelos...............');
flights.last();