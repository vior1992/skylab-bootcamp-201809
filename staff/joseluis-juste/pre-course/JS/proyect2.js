Array.prototype.showAll = function () {
	this.forEach(function (x) {

		console.log("ID: " + x.id + ", Origen: " + x.from + ", Destino: " + x.to + ", Coste: " + x.cost + ", Escala: " + x.scale);
	});
};

var flights =
	[
		{ id: 00, to: "New York", from: "Barcelona", cost: 700, scale: false },
		{ id: 01, to: "Los Angeles", from: "Madrid", cost: 1100, scale: true },
		{ id: 02, to: "Paris", from: "Barcelona", cost: 210, scale: false },
		{ id: 03, to: "Roma", from: "Barcelona", cost: 150, scale: false },
		{ id: 04, to: "London", from: "Madrid", cost: 200, scale: false },
		{ id: 05, to: "Madrid", from: "Barcelona", cost: 90, scale: false },
		{ id: 06, to: "Tokyo", from: "Madrid", cost: 1500, scale: true },
		{ id: 07, to: "Shangai", from: "Barcelona", cost: 800, scale: true },
		{ id: 08, to: "Sydney", from: "Barcelona", cost: 150, scale: true },
		{ id: 09, to: "Tel-Aviv", from: "Madrid", cost: 150, scale: false }
	];

function admin(conf) {
	do {
		conf.optionAdmin = prompt("Desea anadir o eliminar un vuelo: [add | delete]");
		if ((conf.optionAdmin !== "add") && (conf.optionAdmin !== "delete") && (conf.optionAdmin !== null)) {
			console.log("");
			console.log("El valor introducido es incorrecto");
			continue;
		}
		if (conf.optionAdmin === null) {
			continue;
		}
		switch (conf.optionAdmin) {
			case "add":

				do {
					conf.flight.from = prompt("Introduzca el origen");
					conf.flight.to = prompt("Introduzca el destino");
					conf.flight.cost = prompt("Introduzca el coste");
					if (isNaN(conf.flight.cost)) {
						console.log("");
						console.log("El coste introducido no es un número");
						conf.flight = {};
						continue;
					}
					conf.flight.scale = confirm("¿Sera un vuelo con escala?");
					conf.flight.id = flights.length === 0 ? 0 : flights[flights.length - 1].id + 1;
					flights.push(conf.flight);
					conf.flight = {};
					console.log("");
					flights.showAll();
					console.log("");
					console.log("");

				} while (confirm("¿Desea anadir otro vuelo?"));

				break;

			case "delete":

				do {
					if (flights.length === 0) {
						console.log("");
						console.log("Ya no quedan vuelos para eliminar");
						continue;
					}
					conf.idEliminar = prompt("Introduzca el ID del vuelo a eliminar");
					if (isNaN(conf.idEliminar) || (conf.idEliminar === "")) {
						console.log("");
						console.log("No ha introducido un valor numerico");
						continue;
					} else if (conf.idEliminar === null)

						continue;

					conf.index = flights.findIndex(function (x) {

						return x.id === Number.parseInt(conf.idEliminar);
					});
					if (conf.index === -1) {
						console.log("");
						console.log("No se ha encontrado ningun vuelo que se corresponda con el ID introducido");
					}
					else {
						conf.index = flights.splice(conf.index, 1);
						console.log("");
						console.log("Se ha eliminado correctamente el vuelo con ID: " + conf.index[0].id);
						console.log("");
						flights.showAll();
					}

				} while (confirm("¿Desea eliminar otro vuelo?"));

				break;

		}

	} while (!confirm("¿Desea finalizar el programa?"));
}

function userManagement(conf) {
	do {
		conf.precio = prompt("Introduzca un precio para realizar la búsqueda");
		if (isNaN(conf.precio) || (conf.precio === "")) {
			console.log("");
			console.log("No ha introducido un valor numerico");
			continue;

		} else if (conf.precio === null)
			continue;

		conf.rango = prompt("Buscar vuelos mayores, menores o iguales al precio introducido: [equal | higher | less]");
		switch (conf.rango) {
			case "equal":
				conf.filtered = flights.filter(x => x.cost === Number.parseInt(conf.precio));
				break;

			case "less":
				conf.filtered = flights.filter(x => x.cost < conf.precio);
				break;

			case "higher":
				conf.filtered = flights.filter(x => x.cost > conf.precio);
				break;
			case null:
				continue;
				break;
			default:
				console.log("");
				console.log("El valor introducido es incorrecto");
				continue;
				break;
		}
		if (conf.filtered.length > 0) {
			console.log("");
			console.log("Los vuelos encontrados son:");
			console.log("----------------------------");
			console.log("");
			conf.filtered.showAll();
			console.log("");
			console.log("Gracias por su compra");
		}
		else {
			console.log("");
			console.log("No se ha encontrado ningun vuelo que coincida con los criterios de busqueda");
		}

	} while (!confirm("¿Desea finalizar el programa?"));
}


(function () {
	var user = "";
	var escala = "";
	var avg = 0;
	var conEscalas = 0;
	var esAdmin = false;
	var conf = {

		precio: 0,
		rango: "igual",
		filtered: [],
		optionAdmin: "",
		idEliminar: 0,
		index: -1,
		flight: {}
	};

	user = prompt("Introduzca su nombre");

	if ((user === "") || (user === null)) {

		console.log("No ha introducido ningun nombre, saliendo del programa...");
		return;
	}

	console.log("Bienvenido Mr/Ms " + user);
	console.log("----------------------------");
	console.log("");

	flights.forEach(function (x) {

		avg += x.cost;
		escala = x.scale ? " y es un vuelo con escalas" : " y es un vuelo sin escalas";
		conEscalas += x.scale ? 1 : 0;
		console.log("El vuelo con origen: " + x.from + ", y destino: " + x.to + " tiene un coste de " + x.cost + escala);
	});

	console.log("");
	console.log("El coste medio de los vuelos es: " + avg / flights.length);
	console.log("");
	console.log("El numero de vuelos que efectuan escalas es de: " + conEscalas);
	console.log("");
	console.log("Los destinos de los ultimos cinco vuelos son:");
	console.log("----------------------------------------------");
	console.log("");

	flights.reverse().slice(0, 5).reverse().forEach(function (x) {

		console.log("ID: " + x.id + " TO: " + x.to);
	});

	flights.reverse();

	esAdmin = confirm("¿Es usted ADMINISTRADOR?");

	if (esAdmin) {
		admin(conf);
	}
	else {
		userManagement(conf);

	}

})();