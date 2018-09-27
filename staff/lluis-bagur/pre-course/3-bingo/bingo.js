bingo.js

/* BINGO GAME! 🎲🎰
Realiza un programa que simule un Bingo. Cuando se ejecute, pedirá el nombre del jugador y deberá guardarse. Durante el primer turno se mostrará un cartón con 15 números (excluyendo el 0 siempre), para pasar al siguiente turno el usuario deberá confirmar mediante confirm() visualizándose otro número, si coincide con alguno de los existentes en el cartón, cambiará por una "X" o un 0. El cartón se mostrará, al final de cada turno, con los cambios efectuados, indicándole al usuario qué número se ha encontrado. El programa deberá preguntar al usuario al inicio de cada turno si desea continuar, en caso de que se continúe, seguirá el mismo patrón que hasta el momento.

Por supuesto, cuando todos los números de una misma linea estén en "X", mostrará un mensaje "LINEA!", pero la ejecución seguirá, el juego solo acabará cuando todos los números estén a "X".

Cuando el juego concluya, deberá decirle al usuario en cuantos turnos se ha completado el cartón. Por último, deberá preguntar si desea volver a jugar.
*/
var bingoCard = [
    { number: 0, matched: false },
    { number: 0, matched: false },
    { number: 0, matched: false },
    { number: 0, matched: false },
    { number: 0, matched: false },
    //next line
    { number: 0, matched: false },
    { number: 0, matched: false },
    { number: 0, matched: false },
    { number: 0, matched: false },
    { number: 0, matched: false },
    //next line
    { number: 0, matched: false },
    { number: 0, matched: false },
    { number: 0, matched: false },
    { number: 0, matched: false },
    { number: 0, matched: false }
];

function user(){

	return prompt("Nombre de usuario:");
}

var usuario = user();
alert("bienvenido " + usuario);


function bingo(){

	var contador = 0;
	var contX = 0;
	var numbers = [];

	function generateRandomNum() {
    	var random = (Math.random() * 89 + 1).toFixed();

    	if (numbers.includes(random)) {
       	 return generateRandomNum();
   		 } else {
       		 numbers.push(random);
       			 return random;
    		}
	}
	
	function next(){

			return confirm("Quieres continuar?");
	}

	function newTurn (){

		newNum = generateRandomNum();
		alert("ha salido el: " + newNum);

		bingoCard.forEach(function(obj){

			if (obj.number === newNum) {
				obj.matched = true;	
				obj.number = "X";
				contX ++;
			}
			else{
				
			}

		})
		contador ++;
		console.log("Numeros acertados: " + contX);
		console.log("TURNO: " + contador + ", CARTÓN ACTUAL:");
	bingoCard.forEach(function(obj){

		console.log("- " + obj.number);

	})

}

	// Generar carton aleatorio
	
	bingoCard.forEach(function(obj){

		obj.number = generateRandomNum();

	})

	console.log("CARTÓN:")


	bingoCard.forEach(function(obj){

		console.log("- " + obj.number);

	})




	var start = confirm("Quieres empezar a jugar?");

		if 	(start == true){

					numbers = [];

					do {

					newTurn();
					var turno = next();
						if (turno == false){
							return console.log("HAS ABANDONADO EL JUEGO");
						}
					}

					while(contX < 15){

									alert("BINGO!!")

									console.log(usuario + ", has completado el Bingo en " + contador + " turnos")	

									var again = confirm("Desea volver a jugar?");

											if 	(again  == true){

												bingo();
											}
											else {
												return console.log("EL JUEGO HA TERMINADO, GRACIAS POR JUGAR")
											}

					}
		}
		
		else {
			console.log("Has salido del bingo")
			}
}

bingo();