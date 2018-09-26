function globalConf(numLineas = 2, cantNumeros = 5, cantJugadores = 2, max = 10, min = 1) {
	return {

		nLineas: numLineas,
		cantidadNumeros: cantNumeros,
		cantidadJugadores: cantJugadores,
		max: max,
		min: min,
		setNumJugadores: function (num) {
			this.cantidadJugadores = num;
		}
	};

}

function obtenerJugadores(conf) {
	var jugadores = [];
	var numJugadores = 0;

	if (confirm("¿Desea establecer el numero de jugadores, por defecto seran dos?")) {
		numJugadores = prompt("Introduzca el numero de jugadores");

		if (!isNaN(numJugadores))

			conf.setNumJugadores(numJugadores);
	}
	for (var i = 0; i < conf.cantidadJugadores; i++) {
		jugadores.push({

			nombre: prompt("Introduzca el nombre para el jugador " + (i + 1)),
			puntos: 0,
			carton: obtenerCarton(conf),
			resetCarton: function () {

				this.carton = ObtenerCarton(conf)

			},
			mostrarCarton: function () {

				var linea = "";
				console.log("");
				console.log("");
				console.log("CARTON DEL JUGADOR -> " + this.nombre);
				this.carton.forEach((lin, i) => {

					console.log("");
					console.log("LINEA " + (i + 1));
					console.log("-----------------------------------------");
					console.log("");
					lin.forEach(number => {

						linea += number.number + " ";

					});
					console.log(linea.trim());
					console.log("");
					linea = "";
				});
			},
			mostrarLineasGanadoras: function () {

				var ganadoras = [];
				var lin = "";
				ganadoras = this.carton.filter(linea => {

					return linea.filter(number => { return number.number === "X" }).length === linea.length;
				});
				console.log("");
				console.log("");
				console.log("GANADOR -> " + this.nombre);
				console.log("-----------------------------------");
				ganadoras.forEach((linea, i) => {

					console.log("");
					console.log("LINEA " + (i + 1));
					console.log("-----------------------------------------");
					console.log("");
					linea.forEach(number => lin += number.number + " ");
					console.log(lin.trim());
					lin = "";

				});

			},
			comprobarNum: function (num) {

				var mostrar = false;
				this.carton.forEach((linea, i) => {

					linea.forEach(number => {

						if (number.number === num) {
							this.puntos++;
							number.number = "X";
							console.log("");
							console.log("El jugador: " + this.nombre + " tiene el numero " + num + " en la linea " + (i + 1) + " de su carton");
							mostrar = true;
						}

					});
				});
				return mostrar;

			},
			comprobarLinea: function () {
				var linea = true;

				this.carton.forEach((lin, i) => {

					lin.forEach(number => {

						if (number.number !== "X") {
							linea = false;
							return;
						}

					});
					if (linea) {
						if (lin[0].matched !== true) {
							console.log("");
							console.log("¡¡¡LINEAAAAA!!!  El jugador: " + this.nombre + " ha completado la linea " + (i + 1) + " de su carton");
							lin.forEach(number => number.matched = true);
						}
						return;
					}
					linea = true;
				});

				return linea;
			},
			comprobarCarton: function () {
				var completo = true;

				this.carton.forEach(linea => {

					linea.forEach(number => {

						if (number.number !== "X") {
							completo = false;
							return;
						}

					});
					if (!completo)
						return;
				});
				return completo;
			}
		});
	}
	return jugadores;
}

function getRandomNumber(conf) {
	return Math.round(Math.random() * (conf.max - conf.min)) + conf.min;
}

function obtenerCarton(conf) {
	var carton = [];

	for (var i = 0; i < conf.nLineas; i++) {
		carton.push([]);

		for (var j = 0; j < conf.cantidadNumeros; j++) {
			carton[i].push({

				number: getRandomNumber(conf).toString(),
				matched: false
			});
		}

	}
	return carton;

}

function mostrarCartones(jugadores) {
	jugadores.forEach(jugador => {

		jugador.mostrarCarton();

	});

}

function mostrarRank(jugadores) {

	jugadores.sort((a, b) => {

		return b.puntos - a.puntos;

	});

	console.log("");
	console.log("");
	console.log("EL RANKING DE JUGADORES QUEDA:");
	console.log("---------------------------------");
	console.log("");

	jugadores.forEach(jugador => {

		console.log(jugador.nombre + ", ha obtenido " + jugador.puntos + " puntos");

	});

}


/*A PARTIR DE AQUÍ LOGICA DEL JUEGO*/

(
	function () {
		var ganador = false;
		var salir = false;
		/*
			Pasar los parámetros requeridos a la función para cambiar sus valores por  defecto. 
			Para que el juego discurra rápido, se ha seteado 2 líneas por cartón y cinco números por línea.
			Tambien por defecto se ha seteado 2 jugadores y los cartones tendrán los números del 1 al 10.
		*/
		var conf = globalConf();
		var jugadores = [];
		var numero = "";
		var ganadores = [];

		do {
			ganador = false;
			jugadores = obtenerJugadores(conf);
			ganadores = [];

			mostrarCartones(jugadores);
			console.log("");
			console.log("SISTEMA DE PUNTOS");
			console.log("-----------------------------------------------");
			console.log("");
			console.log("Por cada número acertado, el jugador obtendrá un punto");
			console.log("");
			console.log("");
			console.log("COMIENZA EL JUEGO");
			console.log("----------------------------------");
			do {
				numero = getRandomNumber(conf).toString();
				console.log("");
				console.log("");
				console.log("Se ha generado el número " + numero);

				//Si se quiere desactivar la regeneración de cartones a efectos de testear la app más rápidamente, comentar esta sencción, así apareceran menos confirms*/

				jugadores.forEach(jugador => {

					if (!confirm("¿Desea usar el carton actual para el jugador " + jugador.nombre + " o generar otro?. Pulce aceptar para utilizar el mismo"))
						jugador.resetCarton();

				});

				/*********/

				jugadores.forEach(jugador => {

					if (jugador.comprobarNum(numero))
						jugador.mostrarCarton();

					jugador.comprobarLinea();

				});

				ganadores = jugadores.filter(jugador => { return jugador.comprobarCarton() === true; });
				if (ganadores.length > 0) {
					console.log("");
					console.log("");
					console.log("");
					console.log("EL/LOS GANADOR/ES ES/SON");
					console.log("----------------------------------");
					ganadores.forEach(jugador => jugador.mostrarLineasGanadoras());
					if (jugadores.length > 1)
						mostrarRank(jugadores);
					ganador = true;
				}
				else {
					if (confirm("¿Generar el siguiente numero?"))
						continue;
					else
						break;
				}


			} while (!ganador);

			if (!confirm("¿FINISH GAME: Desea que el programa se ejecute de nuevo?")) {
				salir = true;
				break;
			}
			console.clear();

		} while (!salir);

	}

)();