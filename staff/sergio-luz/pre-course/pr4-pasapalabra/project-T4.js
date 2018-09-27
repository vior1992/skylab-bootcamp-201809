

/*Pasapalabra Game! (Final JS) 🎮⁉️

Resource: https://www.youtube.com/watch?v=xJp2c_rcHDc

Haz el juego del Pasapalabra, el programa deberá lanzar la definición de una palabra y el usuario deberá adivinar que palabra estamos tratando, por ejemplo:

'>>>'With the letter "M", Capital of Spain, located in the center of the country.
'>>>' "Madrid"
'>>>'Correct, you have 1 Point!
Tu juego debería hacer una pregunta por cada letra del alfabeto, al final del juego, y habiendo respondido todas las letras, deberá indicarle al usuario cuantas letras ha fallado y cuantas ha acertado. Si el usuario responde con "pasapalabra" el juego deberá estar preparado para entender que en ese momento, el usuario no responderá esa pregunta, y no estará acertada ni fallada, la dejará para la siguiente ronda. El juego deberá, cuando finalize, mostrar un ranking de usuarios con el nombre y ordenados por cantidad de letras acertadas.

PRO

Los usuarios deberán tener tiempo límite por cada juego, por ejemplo 130 segundos... Resource: https://www.w3schools.com/jsref/met_win_settimeout.asp
El programa no debería hacer distinciones entre mayúsculas, minúsculas... Ejemplo: "animal" == "ANIMAL" // "Animal" // "aNiMal"...
El programa debe estar preparado para aceptar el input "END" para terminar el juego en cualquier momento, si esto sucede, el programa dirá cuantas letras ha acertado pero no entrará en el ranking.
Prepara tu programa para que no repita siempre las mismas preguntas, por ejemplo, de la misma letra, se podrían hacer tres preguntas diferentes.
Ejemplo de preguntas y respuestas: made by => www.github.com/misan7*/

//-VARIABLES-//
var questions = [
	// Lista 1
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
    { letter: "z", answer: "zen", status: 0, question: ("CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional") }
];
var questions2 = [
    { letter: "a", answer: "alfabeto", status: 0, question: ("CON LA A. Conjunto de las letras de un idioma puestas en orden") },
    { letter: "b", answer: "babero", status: 0, question: ("CON LA B. Tela que se pone a los bebés en el pecho para que no se manchen al comer.") },
    { letter: "c", answer: "cabeza", status: 0, question: ("CON LA C. Parte superior del cuerpo que está sobre el cuello") },
    { letter: "d", answer: "dormir", status: 0, question: ("CON LA D. Forma de descanso que hacemos por las noches o en la siesta, con los ojos cerrados, sin darnos cuenta de nada.") },
    { letter: "e", answer: "elefante", status: 0, question: ("CON LA E. Animal mamífero enorme, de color marrón o gris, que vive en Asia o África, y que tiene trompa y grandes orejas.") },
    { letter: "f", answer: "fiebre", status: 0, question: ("CON LA F. Aumento de la temperatura del cuerpo que tenemos cuando estamos enfermos.") },
    { letter: "g", answer: "globo", status: 0, question: ("CON LA G. Especie de pelota de goma, que se hincha con aire, y que a veces los niños llevan flotando atado con una cuerda") },
    { letter: "h", answer: "humo", status: 0, question: ("CON LA H. Lo que sale cuando se hace un fuego") },
    { letter: "i", answer: "iglesia", status: 0, question: ("CON LA I. Lugar en el que se hacen las misas, las bodas, los bautizos, las comuniones,…") },
    { letter: "j", answer: "jardín", status: 0, question: ("CON LA J. Zona que rodea algunas casas o edificios y que está lleno de césped, flores, árboles…") },
    { letter: "k", answer: "kilo", status: 0, question: ("CON LA K. Medida de peso que es igual que 1000 gramos") },
    { letter: "l", answer: "luna", status: 0, question: ("CON LA L. Satélite de la Tierra, de color blanco, que se ve por la noche.") },
    { letter: "m", answer: "mantel", status: 0, question: ("CON LA M. Tela que se pone en las mesas a la hora de comer") },
    { letter: "n", answer: "nido", status: 0, question: ("CON LA N. Tipo de casa que construyen los pájaros para poner sus huevos.") },
    { letter: "ñ", answer: "ñu", status: 0, question: ("CONTIENE LA Ñ. Mamífero africano de color marrón parecido a un toro con los cuernos curvos.") },
    { letter: "o", answer: "ojo", status: 0, question: ("CON LA O. Órgano del sentido de la vista. Lo que usamos para ver") },
    { letter: "p", answer: "peces", status: 0, question: ("CON LA P. Animales que viven en el agua, cubiertos de escamas, con aletas para nadar") },
    { letter: "q", answer: "queso", status: 0, question: ("CON LA Q. Alimento de color amarillento que se fabrica con leche, y que se come en trozos, lonchas, en la pizza, rallado,…") },
    { letter: "r", answer: "rápido", status: 0, question: ("CON LA R. Veloz.") },
    { letter: "s", answer: "sacapuntas", status: 0, question: ("CON LA S. Lo que usas para que tus lápices tengan la punta afilada") },
    { letter: "t", answer: "tenedor", status: 0, question: ("CON LA T. Objeto que se usa para pinchar los alimentos y comérselos.") },
    { letter: "u", answer: "uña", status: 0, question: ("CON LA U. Parte dura que está en la punta de los dedos, que cortamos cuando crece y que las mujeres se pintan a veces") },
    { letter: "v", answer: "verano", status: 0, question: ("CON LA V. Estación del año en la que hace mucho calor.") },
    { letter: "w", answer: "windsurf", status: 0, question: ("CONTIENE LA W. Deporte que se practica en el mar, de pie sobre una tabla alargada que lleva una vela triangular.") },
    { letter: "x", answer: "ximo", status: 0, question: ("CONTIENE LA X. Nombre del actual president de la Generalitat valenciana") },
    { letter: "y", answer: "yegua", status: 0, question: ("CONTIENE LA Y. Hembra del caballo.") },
    { letter: "z", answer: "zurdo", status: 0, question: ("CON LA Z. Que tiene más habilidad con la mano izquierda que con la derecha.") }
];
var questions3 = [
    { letter: "a", answer: "abrigo", status: 0, question: ("CON LA A. Prenda de vestir que se pone sobre las demás para protegerse del frío.") },
    { letter: "b", answer: "beber", status: 0, question: ("CON LA B. Tomar un líquido.") },
    { letter: "c", answer: "collar", status: 0, question: ("CON LA C. Joya que se pone alrededor del cuello.") },
    { letter: "d", answer: "dibujar", status: 0, question: ("CON LA D. Pintar figuras con líneas y colores") },
    { letter: "e", answer: "erizo", status: 0, question: ("CON LA E. Animal mamífero con el cuerpo cubierto de púas") },
    { letter: "f", answer: "furgoneta", status: 0, question: ("CON LA F. Vehículo más pequeño que un camión que sirve para llevar mercancías") },
    { letter: "g", answer: "gasolinera", status: 0, question: ("CON LA G. Establecimiento al lado de una carretera donde se vende gasolina y gasoil") },
    { letter: "h", answer: "hotel", status: 0, question: ("CON LA H. Edificio con muchas habitaciones donde alguien puede quedarse un tiempo pagando por ello") },
    { letter: "i", answer: "infierno", status: 0, question: ("CON LA I. Según algunas religiones, lugar al que van las personas que han sido malas cuando mueren.") },
    { letter: "j", answer: "jamás", status: 0, question: ("CON LA J. Nunca, en ningún momento.") },
    { letter: "k", answer: "karate", status: 0, question: ("CON LA K. Deporte de origen japonés que consiste en luchar dando golpes y patadas con las manos y los pies") },
    { letter: "l", answer: "literas", status: 0, question: ("CON LA L. Camas que están una encima de la otra.") },
    { letter: "m", answer: "mecanico", status: 0, question: ("CON LA M. Persona que trabaja arreglando coches o máquinas") },
    { letter: "n", answer: "naranja", status: 0, question: ("CON LA N. Nombre de una fruta que tiene mucho zumo que además es de ese color") },
    { letter: "ñ", answer: "pañal", status: 0, question: ("CONTIENE LA Ñ. Prenda que se les pone a los bebés para retener el pis y la caca.") },
    { letter: "o", answer: "ole", status: 0, question: ("CON LA O. Lo que se grita para animar y aplaudir a los toreros o a los “bailaores” de flamenco") },
    { letter: "p", answer: "panda", status: 0, question: ("CON LA P. Oso blanco y negro procedente de China") },
    { letter: "q", answer: "quieto", status: 0, question: ("CON LA Q. Que no se mueve") },

    { letter: "r", answer: "reses", status: 0, question: ("CON LA R. Conjunto de cabezas de ganado: vacas, ovejas,…") },
    { letter: "s", answer: "sandía", status: 0, question: ("CON LA S. Fruto grande, redondo y jugoso, de color verde oscuro por fuera y rojo por dentro") },
    { letter: "t", answer: "tiburón", status: 0, question: ("CON LA T. Animal marino que tiene una gran boca con dientes afilados, y una aleta triangular encima.") },
    { letter: "u", answer: "unicornio", status: 0, question: ("CON LA U. Animal imaginario que se parece a un caballo con un cuerno sobre la frente") },
    { letter: "v", answer: "vela", status: 0, question: ("CON LA V. Objeto hecho de cera, con una pequeña llama y que sirve para dar luz o soplarlo en los cumpleaños.") },
    { letter: "w", answer: "wendy", status: 0, question: ("CONTIENE LA W. Personaje de cuento que era una niña amiga de Peter Pan.") },
    { letter: "x", answer: "excavadora", status: 0, question: ("CONTIENE LA X. Máquina que sirve para hacer agujeros, hoyos o zanjas en el suelo.") },
    { letter: "y", answer: "yogurt", status: 0, question: ("CONTIENE LA Y. Alimento muy bueno que se hace con leche, es blanco, pero a veces se le añaden sabores de frutas y azúcar") },
    { letter: "z", answer: "zanahoria", status: 0, question: ("CON LA Z. Planta que tiene una raíz comestible alargada de color anaranjado, y que les gusta mucho a los conejos.") }
];
var Ruleta=[questions, questions2, questions3];
var RuletaUsada=[];
var end=false;
var Jugadores=[{name:"PL1", points:18}, {name:"PL2", points:8}, {name:"PL3", points:11}];
//-//
// JUEGO PASA PALABRA
//-//
function Pasapalabra(){
	//Iniciamos el cronometro 130 segundos
	Cronometro(10);
	// Pasamos por cada letra del abecedario
	RealizarPregunta();
}
//-//
function Cronometro(tiempo){
	//Al pasar el tiempo se llamará a la función fin del juego
	console.log("llamada al cronometro")
	tiempo=tiempo*1000;
	setTimeout(ComprobarFinDelJuego, tiempo);
}
function ComprobarFinDelJuego(){
	var puntos=0, fallos=0;
	for (var i = questions.length - 1; i >= 0; i--) {
		if(questions[i].status>0){
			puntos+=questions[i].status;
		}else if(questions[i].status<0){
			fallos+=questions[i].status;
		}
	}
	console.log("Has acertado "+puntos+" palbras en esta partida y has fallado "+fallos);
	RankingJugadores(puntos);
}
function RankingJugadores(_puntos){
	// Comprobamos si el jugador entra en el ranking:
	// Analizamos si el Ranking está lleno
	if (Jugadores.length>=20){
		// Ordenamos los jugadores por puntos:
		Jugadores.sort(function (a, b){ return (b.points - a.points) });
		// Comprobamos si el jugador tiene más puntos que el último del ranking
		if(_puntos>Jugadores[Jugadores.length-1].points){
			// En caso de tener mas puntos lo substituye, pero antes preguntamos el nombre
			var Nombre="";
			while(Nombre==""){ Nombre=prompt("Has entrado en el Ranking! Escribe tu nombre para guardarte en el top 20");}
			Jugadores.pop();
			Jugadores.push({name:Nombre, points:_puntos});
		}
	}else{
		// En caso de no haber llenado la lista
		var Nombre="";
		while(Nombre==""){ Nombre=prompt("Has entrado en el Ranking! Escribe tu nombre para guardarte en el top 20");}
		Jugadores.pop();
		Jugadores.push({name:Nombre, points:_puntos});
	}
	// Finalmente ordenamos de nuevo el Ranking para mostrarlo
	Jugadores.sort(function (a, b){ return (b.points - a.points) });
	// Mostramos el listado
	console.log("🏆🏆🏆El Ranking de los jugadores es el siguiente🏆🏆🏆")
	for (var i=0; i<Jugadores.length; i++){
		console.log("El jugador "+Jugadores[i].name+" obtuvo "+Jugadores[i].points+" puntos. Puesto numero: "+(i+1));
	}	
}
//-//
function RealizarPregunta(){
	for (var i=0; i<questions.length; i++){
		//Mientras no se haya finalizado el juego:
		if(end==false){
			// Elegimos un questionario aleatorio
			var aleatorio=Math.floor(Math.random() * (Ruleta.length)); //0,1,2
			// Comprobamos que la letra no haya sido contestada ya y que no esté en la lista negra
			if(Ruleta[aleatorio][i].status==0 && !RuletaUsada.includes(Ruleta[aleatorio][i])){
				// Realizamos la pregunta al usuario
				var respuesta="";
				while(respuesta==""){	respuesta= prompt(Ruleta[aleatorio][i].question+"\n.\n.\nRecuerda que para salir del juego has de escribir 'end' y para pasar a la siguiente pregunta 'pasapalabra'", Ruleta[aleatorio][i].answer);}
				// Comprobamos la respuesta
				ComprobarRespuesta(aleatorio, i, respuesta);
			}
			// En caso de no estar contestada pero sí incluida en la lista negra repetimos la letra
			else if(Ruleta[aleatorio][i].status==0 && RuletaUsada.includes(Ruleta[aleatorio][i])) 
			{
				//Comprobamos si todas las preguntas ya han sido formuladas para esa letra. En caso afirmativo limpiaremos la lista negra. 
				RuletaUsada= RuletaUsada.filter(R=> (R!=(Ruleta[0][i]) && R!=(Ruleta[1][i]) && R!=(Ruleta[2][i]) ) );
				//Diminuimos i para volver a pasar por esta letra y formular su pregunta
				i--;
				console.log(questions.length, RuletaUsada);
			}
		}else{
			break;
		}
	}
}
function ComprobarRespuesta(Iquest, Ialph, respuesta){
	if(respuesta!=null && Ruleta[Iquest][Ialph].answer==respuesta.toLowerCase() ){
		for (var j=0; j<3; j++){
			Ruleta[j][Ialph].status=1;
		}
		alert("Correct, you have 1 Point!");
	}else if(respuesta!=null && respuesta.toLowerCase()=="end"){
				end=true;
		alert("Game Over. See you in the next attempt");
		end=true;
	}else if(respuesta!=null && respuesta.toLowerCase()=="pasapalabra"){
		alert("We postpone it. Next letter");
		// En caso de pasar-palabra no podrá repetirse la pregunta. Tomamos medidas y la añadimos a la lista negra
		RuletaUsada.push(Ruleta[Iquest][Ialph]);
	}else{
		for (var j=0; j<3; j++){
			Ruleta[j][Ialph].status=-1;
		}
		alert("Oh no, you have failed!");
	}
}
//-//
Pasapalabra();