
/*Tareas a realizar:
- Llevar un control de qué números han salido y si se repite sacar otro número al azar OK!!
- Hacer que los cartones se generen de manera automática y sean siempre diferentes. OK!!
- Que cheque cada vez que sale un número que la línea no sean todo x par cantar línea OK!!
- Cuando se muestra el cartón al final de cada turno hay que mostrar el número que se ha encontrado OK!!
- Hay que llevar la cuenta de los turnos que lleva el jugador OK!!
- Comprobar que el contador de turnos esté bien OK!!
- Pendiente ver si quiere volver a jugar OK!!
- Controlar el boton cancelar del prompt

TAREAS PRO:
-Cuando se muestre la carta, se preguntará al usuario si realmente quiere ese cartón o generar otro, si realmente
 quiere ese cartón, deberá responder "yes" para proceder OK!!
- Establece un sistema de puntos, en cuantos más turnos se complete el cartón, menos puntos (el sistema de puntos
- intégralo como quieras), por el contrario, a menos turnos, más puntos. OK!!
- Antes de empezar el juego, muestra el sistema de puntos al usuario. OK!!
- Ranking de usuarios (ordenado por puntos).OK!! 
*/

/* creamos una variable global bombo, con el bombo generaremos los cartones y los numeros del juego
es una variable global para que podamos controlar que no se repitan números*/
var bombo = bombo = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];
/*La variable turnos tamibién la he hecho global porque así la modifico dentro de la funcion y 
la puedo usar donde quiera*/
var turnos = 0;
/*También global para llamarla donde quiera*/
var player = "player";
/*vamos a hacer la variable carton glogal también*/
var carton;
/*el ranking es global*/
var ranking = [];
/*hay que crear una variable jugador que almacene nombres y resultados*/
var jugador = {nombre:"nombre",puntuacion: 0};

/*Genera un número aleatorio*/
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
  }
/*Devuelve el nombre del jugador*/
function newPlayer(){
	return(prompt("Please introduce player name"));
}

/*Genera un carton aleatorio, cuando termina volvemos a "llenar" el bombo*/
function newCarton(){

		var linea = [];
		var carton = [];
		var randomnumber = 0;
	for (var j=0;j<3;j++){
	for (var i=0;i<5;i++){
		randomnumber = getRandomInt(1,bombo.length);
		linea.push(bombo[randomnumber]);
		bombo.splice(randomnumber,1);
	}
		carton.push(linea);
		linea=[];
		randomnumber = 0;
	}
	bombo = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];	
	return carton;
}

/* Muestra el cartón la llamamos muchas veces durante la ejecución*/
function showCarton(carton){
console.log("Su carton:");
for(var i=0;i<carton.length;i++){
console.log(carton[i].join());
}
}

/*Función que pregunta al usuario si está contento con el cartón, si el usuario responde que no genera otro y 
vuelve a preguntar*/
function okCarton(){
	var answer;

	while(answer!="yes"&&answer!="no"){
		answer=prompt("The carton it´s ok for you? (yes/no)").toLowerCase();
		if (answer!="yes"&&answer!="no"){
		alert("You must write yes or no");
	}
	}

	if(answer==="no"){
		carton = newCarton();
		showCarton(carton);
		okCarton()
	}

}

/*Esta funcion es la que hace el bucle que va sacando bolas y va mostrando los resultados cada turno*/
function letsplay(carton){
	var randomnumber = 0;
	var counter = 0;
	while(counter<(carton.length*carton[0].length)){
	if(confirm("Pulse to obtain a new number!!")===false){
		return("Game aborted!!");
	}
	randomnumber = bombo[getRandomInt(1,bombo.length)];
	bombo.splice(bombo.indexOf(randomnumber),1);
	/*console.log (bombo);*/
	console.log("Ha salido el "+randomnumber+"!");
	for(var j=0;j<carton.length;j++){
	for(var i = 0; i<carton[j].length; i++){
		if (carton[j][i]===randomnumber){
			carton[j][i]="X";
			var counterlinea = 0;
			for (var k=0;k<carton[j].length;k++){
				if (carton[j][k]==="X"){
					counterlinea++;
				}
				if (counterlinea===5){
					console.log("LINEA!!");
				}
			}
			counter++;
		}
	}
	}
  	showCarton(carton);
  	turnos++;
  	}
  	bombo = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];
  	jugador.puntuacion=(30-turnos);
  	return("Bingo!! después de "+turnos+" turnos!! La puntuación de "+player+" es de "+(30-turnos)+" puntos!!");


}

function playAgain(){
	if((confirm("Quiere hacerse otro cartoncito??? ludópata???"))===true){
		turnos = 0;
		bingo();
	}
	else{
		console.log("Game Over");
		
	}
}

/*Cada vez que hay una nueva entrada en el ranking lo ordena de mas a menos puntos*/
function ordena(){
    var temporal;
    for(var j=0; j<ranking.length-1; j++){
        for(var i=0; i<ranking.length-1; i++){
    if(ranking[i].puntuacion<ranking[i+1].puntuacion){
        temporal = ranking[i];
        ranking[i]=ranking[i+1];
        ranking[i+1]=temporal;
    }
    }
    }

}

/*funcion que muetra el ranking*/
function showranking(){
	console.log("Hall of Fame");
	for(var i=0;i<ranking.length;i++){
		console.log(ranking[i].nombre+" "+ranking[i].puntuacion+" PUNTOS");
	}
}


/*funcion principal que llama a las demas*/
function bingo(){
	jugador = {nombre:"nombre",puntuacion: 0};
	console.log("El sistema de puntos es el siguiente: La puntuación final del jugador será 30 menos el número de turnos que haya usado en completar el cartón")
	player = newPlayer();
	jugador.nombre=player;
	console.log("Bienvenido "+player)
	carton = newCarton();
	showCarton(carton);
	okCarton();
	console.log(letsplay(carton));
	ranking.unshift(jugador);
	if(ranking.length>1){
	ordena();}
	showranking();
	playAgain();


}

bingo();