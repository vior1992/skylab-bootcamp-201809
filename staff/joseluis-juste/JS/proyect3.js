function GlobalConf(num_lineas = 2, cant_numeros = 5, cant_jugadores = 2, max = 10, min = 1)
	{
		return { 

			num_lineas:num_lineas,
			cant_numeros:cant_numeros,
			cant_jugadores:cant_jugadores,
			max:max,
			min:min,
			set_num_jugadores:function(num)
			{
				this.cant_jugadores = num;
			}
		};
	
	}

	function ObtenerJugadores(conf)
	{
		var jugadores = [];
		var num_jugadores = 0;
		
		if (confirm("¿Desea establecer el numero de jugadores, por defecto seran dos?"))
		{
			num_jugadores = prompt("Introduzca el numero de jugadores");
			
			if (!isNaN(num_jugadores))
				
				conf.set_num_jugadores(num_jugadores);
		}
		for(var i = 0; i < conf.cant_jugadores; i++)
		{
			jugadores.push({

				nombre: prompt("Introduzca el nombre para el jugador " + (i+1)),
				puntos: 0,
				carton: ObtenerCarton(conf),
				reset_carton: function(){
					
					this.carton = ObtenerCarton(conf)
				
				},
				mostrar_carton: function(){

					var linea = "";
					console.log("");
					console.log("");
					console.log("CARTON DEL JUGADOR -> " + this.nombre);
					this.carton.forEach( (_linea,i) => {
						
						console.log("");
						console.log("LINEA " + (i+1));
						console.log("-----------------------------------------");
						console.log("");
						_linea.forEach(number => {

							linea += number.number + " ";

						});	
						console.log(linea.trim());
						console.log("");
						linea = "";				
					});
				},
				mostrar_lineas_ganadoras: function(){

					var ganadoras = [];
					var _linea = "";
					ganadoras = this.carton.filter(linea => {

						return linea.filter(number => {return number.number === "X"}).length === linea.length;
					});
					console.log("");
					console.log("");
					console.log("GANADOR -> " + this.nombre);
					console.log("-----------------------------------");
					ganadoras.forEach((linea,i) => {

						console.log("");
						console.log("LINEA " + (i+1));
						console.log("-----------------------------------------");
						console.log("");
						linea.forEach(number => _linea += number.number + " ");
						console.log(_linea.trim());
						_linea = "";	

					});

				},
				comprobar_num:function(num){
				
					var mostrar = false;
					this.carton.forEach((linea,i) => {

						linea.forEach(number => {

							if(number.number === num)
							{
								this.puntos++;
								number.number = "X";
								console.log("");
								console.log("El jugador: " + this.nombre +  " tiene el numero " + num + " en la linea " + (i+1) + " de su carton");
								mostrar = true;
							}

						});
					});
					return mostrar;

				},
				comprobar_linea:function()
				{
					var linea = true;

					this.carton.forEach((_linea,i) => {

						_linea.forEach(number => {

							if(number.number !== "X")
							{
								linea = false;
								return;
							}

						});
						if (linea)
						{
							if (_linea[0].matched !== true) 
							{
								console.log("");
								console.log("¡¡¡LINEAAAAA!!!  El jugador: " + this.nombre +  " ha completado la linea " + (i+1) + " de su carton");
								_linea.forEach(number => number.matched = true);
							}
							return;
						}
						linea = true;
					});

					return linea;
				},
				comprobar_carton:function()
				{
					var completo = true;

					this.carton.forEach(linea => {

						linea.forEach(number => {

							if (number.number !== "X")
							{
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

	function GetRandomNumber(conf)
	{
		return Math.round(Math.random() * (conf.max - conf.min)) + conf.min;
	}

	function ObtenerCarton(conf)
	{
		var carton = [];

		for(var i = 0; i < conf.num_lineas; i++)
		{
			carton.push([]);

			for(var j = 0; j < conf.cant_numeros;j++)
			{
				carton[i].push({

					number:GetRandomNumber(conf).toString(),
					matched:false
				});
			}
			
		}
		return carton;

	}

	function MostrarCartones(jugadores)
	{
		jugadores.forEach(jugador => {

			jugador.mostrar_carton();
			
		});
		
	}

	function MostrarRank(jugadores)
	{
		
		jugadores.sort((a,b) => {

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
		function()
		{
			var ganador = false;
			var salir = false;
			/*
				Pasar los parámetros requeridos a la función para cambiar sus valores por  defecto. 
				Para que el juego discurra rápido, se ha seteado 2 líneas por cartón y cinco números por línea.
				Tambien por defecto se ha seteado 2 jugadores y los cartones tendrán los números del 1 al 10.
			*/
			var conf = GlobalConf(); 
			var jugadores = [];
			var numero = "";
			var sig_turno = false;
			var ganadores = [];

			do
			{
				ganador = false;
				jugadores = ObtenerJugadores(conf);
				sig_turno = false;
				ganadores = [];

				MostrarCartones(jugadores);
				console.log("");
				console.log("SISTEMA DE PUNTOS");
				console.log("-----------------------------------------------");
				console.log("");
				console.log("Por cada número acertado, el jugador obtendrá un punto");
				console.log("");
				console.log("");
				console.log("COMIENZA EL JUEGO");
				console.log("----------------------------------");
				do
				{
					numero = GetRandomNumber(conf).toString();
					console.log("");
					console.log("");
					console.log("Se ha generado el número " + numero);
					
					//Si se quiere desactivar la regeneración de cartones a efectos de testear la app más rápidamente, comentar esta sencción, así apareceran menos confirms*/
					
					jugadores.forEach(jugador => {

						if (!confirm("¿Desea usar el carton actual para el jugador " + jugador.nombre + " o generar otro?. Pulce aceptar para utilizar el mismo"))
							jugador.reset_carton();

					});

					/*********/

					jugadores.forEach(jugador => {

						if (jugador.comprobar_num(numero))
							jugador.mostrar_carton();

						jugador.comprobar_linea();
						
					});

					ganadores = jugadores.filter(jugador => {return jugador.comprobar_carton() === true;});
					if (ganadores.length > 0)
					{
						console.log("");
						console.log("");
						console.log("");
						console.log("EL/LOS GANADOR/ES ES/SON");
						console.log("----------------------------------");
						ganadores.forEach(jugador => jugador.mostrar_lineas_ganadoras());
						if (jugadores.length > 1)
							MostrarRank(jugadores);
						ganador = true;
					}
					else
					{
						if(confirm("¿Generar el siguiente numero?"))
							continue;
						else
							break;
					}


				}while(!ganador);

				if (!confirm("¿FINISH GAME: Desea que el programa se ejecute de nuevo?"))
				{
					salir = true;
					break;
				}
				console.clear();

			}while(!salir);
			
		}

	)();