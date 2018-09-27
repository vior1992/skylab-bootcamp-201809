function askName () {
  var userName = prompt('Bienvenido a Pasapalabra! Como te llamas?');
  return userName;
}


function pasapalabra () {

var answer = '';
var end = false;
var gameEnd = false;
var finished = false;

	while (!gameEnd && !end) {

		for (var indexWord = 0; indexWord < 27; indexWord++) {

			if (questions[indexWord].status === 0 && !end && !finished) {

				answer = prompt(questions[indexWord].question);
				answer = answer.toLowerCase();
			
				switch (answer) {
					case 'end':
					end = true;
					console.log('Has acertado ' + doings + ' palabras.')
					console.log('See you next time!');
					break;

					case 'pasapalabra':
					break;
			
					default:
					if (answer === questions[indexWord].answer) {
						console.log('Correcto!');
						questions[indexWord].status = 1;
						doings++;
					}
					else {
						console.log('Respuesta incorrecta!');
						console.log('La respuesta correcta es: ' + questions[indexWord].answer);
						questions[indexWord].status = -1;
						errors++;
					}
					finished = (doings+errors===27);
				}
			}
		}
		gameEnd = (doings+errors===27);
	}
	return finished;
}

function showResults() {
	for (var indexRanking = 0; indexRanking < ranking.length; indexRanking++) {
    	console.log(`Ranking: ${ranking[indexRanking].ranking} | Jugador: ${ranking[indexRanking].jugador} | Palabras acertadas: ${ranking[indexRanking].aciertos}`);
	}
}

function checkRanking (userName) {
var added = false;
  	
  for (var indexRanking = 0; indexRanking < ranking.length; indexRanking++) {
   
    if (doings === ranking[indexRanking].aciertos && !added) {
			var addUser = { ranking: indexRanking+1, jugador: userName, aciertos: doings, fallos: errors};
      added = true;
      ranking.splice(indexRanking+1, 0, addUser);
    }
    else if (doings > ranking[indexRanking].aciertos && !added) {
      addUser = { ranking: indexRanking+1, jugador: userName, aciertos: doings, fallos: errors};
      ranking.splice(indexRanking, 0, addUser);
      added = true;
      
      for (indexChangeRanking = indexRanking+1; indexChangeRanking < ranking.length; indexChangeRanking++) {
          ranking[indexChangeRanking].ranking = indexChangeRanking+1;
      }
    }
  }
  if (!added) { 
    addUser = { ranking: indexRanking+1, jugador: userName, aciertos: doings, fallos: errors};
    ranking.push(addUser); 
  }
} 

var ranking = [
	{ ranking: 1, jugador: "Almu", aciertos: 27, fallos: 0},
	{ ranking: 2, jugador: "Lali", aciertos: 25, fallos: 2},
	{ ranking: 3, jugador: "Bibi", aciertos: 24, fallos: 3},
	{ ranking: 4, jugador: "Ainhoa", aciertos: 23, fallos: 4},
	{ ranking: 5, jugador: "Joana", aciertos: 22, fallos: 5},
	{ ranking: 6, jugador: "Cris", aciertos: 21, fallos: 6}
];

var doings = 0;
var errors = 0;
var questions = [
    { letter: "a", answer: "abducir", status: 0, question: ("CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien") },
    { letter: "b", answer: "bingo", status: 0, question: ("CON LA B. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso") },
    { letter: "c", answer: "churumbel", status: 0, question: ("CON LA C. Niño, crío, bebé") },
    { letter: "d", answer: "diarrea", status: 0, question: ("CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida") },
    { letter: "e", answer: "ectoplasma", status: 0, question: ("CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación") },
    { letter: "f", answer: "facil", status: 0, question: ("CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad") },
    { letter: "g", answer: "galaxia", status: 0, question: ("CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas") },
    { letter: "h", answer: "harakiri", status: 0, question: ("CON LA H. Suicidio ritual japonés por desentrañamiento") },
    { letter: "i", answer: "iglesia", status: 0, question: ("CON LA I. Templo cristiano") },
    { letter: "j", answer: "jabali", status: 0, question: ("CON LA J. Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba") },
    { letter: "k", answer: "kamikaze", status: 0, question: ("CON LA K. Persona que se juega la vida realizando una acción temeraria") },
    { letter: "l", answer: "licantropo", status: 0, question: ("CON LA L. Hombre lobo") },
    { letter: "m", answer: "misantropo", status: 0, question: ("CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas") },
    { letter: "n", answer: "necedad", status: 0, question: ("CON LA N. Demostración de poca inteligencia") },
    { letter: "ñ", answer: "señal", status: 0, question: ("CONTIENE LA Ñ. Indicio que permite deducir algo de lo que no se tiene un conocimiento directo.") },
    { letter: "o", answer: "orco", status: 0, question: ("CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien") },
    { letter: "p", answer: "protoss", status: 0, question: ("CON LA P. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft") },
    { letter: "q", answer: "queso", status: 0, question: ("CON LA Q. Producto obtenido por la maduración de la cuajada de la leche") },
    { letter: "r", answer: "raton", status: 0, question: ("CON LA R. Roedor") },
    { letter: "s", answer: "stackoverflow", status: 0, question: ("CON LA S. Comunidad salvadora de todo desarrollador informático") },
    { letter: "t", answer: "terminator", status: 0, question: ("CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984") },
    { letter: "u", answer: "unamuno", status: 0, question: ("CON LA U. Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914") },
    { letter: "v", answer: "vikingos", status: 0, question: ("CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa") },
    { letter: "w", answer: "sandwich", status: 0, question: ("CONTIENE LA W. Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso") },
    { letter: "x", answer: "botox", status: 0, question: ("CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética") },
    { letter: "y", answer: "peyote", status: 0, question: ("CONTIENE LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal por indígenas americanos") },
    { letter: "z", answer: "zen", status: 0, question: ("CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional") },
];


function main () {

	var nameUser = askName();
	var finished = pasapalabra();

	if (finished) {
		console.log('Has conseguido ' + doings + ' aciertos!');
		checkRanking(nameUser);
		showResults();
	}
}

main();
