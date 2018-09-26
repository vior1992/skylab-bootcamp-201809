papalabra.js

var abecedario = [
{id: 1, letra: "a", pregunta: "Instrumento o maquina que sirve para atacar o defenderse.", respuesta: "arma", acertada: false, siguiente: true},
{id: 2, letra: "a", pregunta: "Instrumento o maquina que sirve para atacar o defenderse.", respuesta: "arma", acertada: false, siguiente: true},
{id: 3, letra: "a", pregunta: "Instrumento o maquina que sirve para atacar o defenderse.", respuesta: "arma", acertada: false, siguiente: true},
{id: 4, letra: "a", pregunta: "Instrumento o maquina que sirve para atacar o defenderse.", respuesta: "arma", acertada: false, siguiente: true},
{id: 5, letra: "a", pregunta: "Instrumento o maquina que sirve para atacar o defenderse.", respuesta: "arma", acertada: false, siguiente: true},
]

var usuarios = [
{id: 1, nombre: "a", acertadas: 0, falladas: 0},
{id: 2, nombre: "a", acertadas: 0, falladas: 0},
{id: 3, nombre: "a", acertadas: 0, falladas: 0},
{id: 4, nombre: "a", acertadas: 0, falladas: 0},
]

var user = prompt(" qual es su nombre?");
alert("Bienvenido " + user);
var cont = 5;
var acert = 0;
var falla = 0;
var jugador = 0;

if (cont != 0) {

	abecedario.forEach(function(obj){

	if (obj.siguiente === true){


		console.log(obj.id + "ª Pregunta: con la letra " + obj.letra + ", " + obj.pregunta)
		var respuesta = prompt("respuesta");
		if (respuesta === obj.respuesta || respuesta === "pasapalabra"){

				if (respuesta === obj.respuesta){
				obj.acertada = true;
				obj.siguiente = false;
				cont - 1;
				acert ++;
				
				console.log("Has acertado! Siguente pregunta ==>")
			}
				else{
					obj.acertada = false;
					obj.siguiente = true;
					console.log("Has pasado! Siguente pregunta ==>")

				}

		}
		else {
				obj.acertada = false;
				obj.siguiente = false;
				falla --;
				cont - 1;
				console.log("Has fallado! Siguente pregunta ==>")


		}
	}

	})

}

else{

	jugador ++;
	Object.defineProperty(usuarios,)
}
