let flights = [{
        id: 0,
        to: "Bilbao",
        from: "Barcelona",
        cost: 1600,
        layover: false
    },
    {
        id: 1,
        to: "Nueva York",
        from: "Barcelona",
        cost: 700,
        layover: false
    },
    {
        id: 2,
        to: "Los Ángeles",
        from: "Madrid",
        cost: 1100,
        layover: true
    },
    {
        id: 3,
        to: "París",
        from: "Barcelona",
        cost: 210,
        layover: false
    },
    {
        id: 4,
        to: "Roma",
        from: "Barcelona",
        cost: 150,
        layover: false
    },
    {
        id: 5,
        to: "Londres",
        from: "Madrid",
        cost: 200,
        layover: false
    },
    {
        id: 6,
        to: "Madrid",
        from: "Barcelona",
        cost: 90,
        layover: false
    },
    {
        id: 7,
        to: "Tokio",
        from: "Madrid",
        cost: 1500,
        layover: true
    },
    {
        id: 8,
        to: "Shangai",
        from: "Barcelona",
        cost: 800,
        layover: true
    },
    {
        id: 9,
        to: "Sydney",
        from: "Barcelona",
        cost: 150,
        layover: true
    },
    {
        id: 10,
        to: "Tel-Aviv",
        from: "Madrid",
        cost: 150,
        layover: false
    }
];

function dayHour() {
    var currentTime = new Date();
    var greeting = "";
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    if (hours < 10) {
        hours = "0" + hours;
    }

    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    var fullTime = hours + ":" + minutes;

    if ((fullTime >= "05:00") && (fullTime <= "13:59")) {
        greeting = "Buenos días";
    } else if ((fullTime >= "14:00") && (fullTime <= "20:00")) {
        greeting = "Buenas tardes";
    } else {
        greeting = "Buenas noches";
    }

    return greeting;
}

var resultTime = dayHour();

function logIn() {
    const name = prompt("Ingrese su nombre");
    window.alert(resultTime + ', ' + name + ".\nBienvenid@ a SkyLab Airlines.");

    function viewFlights() {
        console.log('Estimad@ ' + name + ":");
        for (var i = 0; i < flights.length; i++) {
            if (!flights[i].layover) {
                console.log(flights[i].id + 1 + ') ' +
                    "El vuelo con origen " +
                    flights[i].from +
                    " y destino " +
                    flights[i].to +
                    ", tiene un coste de €" +
                    flights[i].cost +
                    " y no realiza ninguna escala."
                );
                console.log('\n');
            } else {
                console.log(flights[i].id + 1 + ') ' +
                    "El vuelo con origen " +
                    flights[i].from +
                    " y destino " +
                    flights[i].to +
                    ", tiene un coste de €" +
                    flights[i].cost +
                    " y realiza escalas."
                );
                console.log('\n');
            }
        }
    }
    viewFlights();

    function meanCost() {
        var counter = 0;
        flights.forEach(function (flight) {
            counter += flight.cost;
        });
        console.log('>>> El coste promedio de los vuelos es de €' + (counter / flights.length).toFixed(2));
        console.log('\n');

    }
    meanCost();

    function filterByLayover() {
        var layOver = [];
        for (var i = 0; i < flights.length; i++) {
            if (flights[i].layover) {
                layOver.push(flights[i].to);
            }
        }
        console.log(">>> Los vuelos que efectúan escalas son " + layOver.length + ": Los que tienen destino a " + layOver.join(', ').replace(/,([^,]*)$/, ' y$1.'));
        console.log('\n');

    }
    filterByLayover();

    function lastFlights() {
        var destinations = [];
        for (var i = 0; i < flights.length; i++) {
            if (flights[i].id > 5) {
                destinations.push(flights[i].to)
            }
        }
        destinations = destinations.join(', ').replace(/,([^,]*)$/, ' y$1');
        console.log('>>> Los últimos cinco vuelos del día tienen destino a ' + destinations + '.');
    }
    lastFlights();
}

logIn();