//Pasapalabra Proyecto Tema 4

var preguntas = [];
var aciertos = 0;
var errores = 0;
var tiempo = 0;
var numerodepregunta = -1;

var questions = [
	[
		{
			letter: 'a',
			answer: 'anarquista',
			status: 0,
			question: 'Empieza por A: Que no tiene ni dios ni patria ni amo.',
		},
		{
			letter: 'a',
			answer: 'anecdota',
			status: 0,
			question:
				'Empieza por A: Relato breve de un acontecimiento extraño, curioso o divertido, generalmente ocurrido a la persona que lo cuenta.',
		},
		{
			letter: 'a',
			answer: 'abducir',
			status: 0,
			question:
				'Empieza por A: Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien',
		},
	],
	[
		{
			letter: 'b',
			answer: 'bisiesto',
			status: 0,
			question: 'Empieza por B: Año que dura 366 días.',
		},
		{
			letter: 'b',
			answer: 'bollo',
			status: 0,
			question:
				'Empieza por B: Pasta dulce y esponjosa, hecha con harina, huevos, levadura y otros ingredientes, que puede tener distintas formas.',
		},
		{
			letter: 'b',
			answer: 'bingo',
			status: 0,
			question:
				"Empieza por B: Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso",
		},
	],
	[
		{
			letter: 'c',
			answer: 'calendario',
			status: 0,
			question: 'Empieza por C: Sistema de división del tiempo.',
		},
		{
			letter: 'c',
			answer: 'cascada',
			status: 0,
			question:
				'Empieza por C: Corriente de agua que cae desde cierta altura a causa de un brusco desnivel en su cauce, especialmente en un río.',
		},
		{
			letter: 'c',
			answer: 'churumbel',
			status: 0,
			question: 'Empieza por C: Niño, crío, bebé',
		},
	],
	[
		{
			letter: 'd',
			answer: 'día',
			status: 0,
			question:
				'Empieza por D: Tiempo que la Tierra emplea en dar una vuelta alrededor de su eje, aproximadamente veinticuatro horas.',
		},
		{
			letter: 'd',
			answer: 'daga',
			status: 0,
			question:
				'Empieza por D: Arma blanca de hoja corta, ancha y puntiaguda, parecida a la espada pero de menor tamaño.',
		},
		{
			letter: 'd',
			answer: 'diarrea',
			status: 0,
			question:
				'Empieza por D: Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida',
		},
	],
	[
		{
			letter: 'e',
			answer: 'espiral',
			status: 0,
			question:
				'Empieza por E: Línea curva que describe varias vueltas alrededor de un punto, alejándose cada vez más de él.',
		},
		{
			letter: 'e',
			answer: 'estocolmo',
			status: 0,
			question: 'Empeiza por E: Capital de Suecia.',
		},
		{
			letter: 'e',
			answer: 'ectoplasma',
			status: 0,
			question:
				'Empieza por E: Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación',
		},
	],
	[
		{
			letter: 'f',
			answer: 'putrefacto',
			status: 0,
			question:
				'Contiene la F: Que está descompuesto o podrido por la acción de diversos factores y determinados microorganismos.',
		},
		{
			letter: 'f',
			answer: 'finiquito',
			status: 0,
			question:
				'Empeiza con la F. Remate de las cuentas, o certificación que se da para constancia de que están ajustadas y satisfecho el alcance que resulta de ellas.',
		},
		{
			letter: 'f',
			answer: 'facil',
			status: 0,
			question:
				'Empieza por F: Que no requiere gran esfuerzo, capacidad o dificultad',
		},
	],
	[
		{
			letter: 'g',
			answer: 'gregorio',
			status: 0,
			question:
				'Empieza por G: Papa que da nombre a nuestro calendario actual.',
		},
		{
			letter: 'g',
			answer: 'garrulo',
			status: 0,
			question:
				'Empieza por la G: Que se comporta de manera ruda, tosca o grosera.',
		},
		{
			letter: 'g',
			answer: 'galaxia',
			status: 0,
			question:
				'Empieza por G: Conjunto enorme de estrellas, polvo interestelar, gases y partículas',
		},
	],
	[
		{
			letter: 'h',
			answer: 'hijo',
			status: 0,
			question: 'Empieza por H: El orgullo del padre.',
		},
		{
			letter: 'h',
			answer: 'rechoncho',
			status: 0,
			question:
				'Contiene la H: Persona o animal que es grueso y de poca altura.',
		},
		{
			letter: 'h',
			answer: 'harakiri',
			status: 0,
			question: 'Empieza por H: Suicidio ritual japonés por desentrañamiento',
		},
	],
	[
		{
			letter: 'i',
			answer: 'india',
			status: 0,
			question: 'Empieza por I: Segundo pais del mundo más habitado.',
		},
		{
			letter: 'i',
			answer: 'interestelar',
			status: 0,
			question:
				'Empieza por I: Que está en el espacio existente entre dos astros, o que tiene relación con él.',
		},
		{
			letter: 'i',
			answer: 'iglesia',
			status: 0,
			question: 'Empieza por I: Templo cristiano',
		},
	],
	[
		{
			letter: 'j',
			answer: 'juerga',
			status: 0,
			question: 'Empieza por J: Fiesta sin fin.',
		},
		{
			letter: 'j',
			answer: 'jalapeño',
			status: 0,
			question:
				'Empieza por J: Chile picante de unos 5 cm de largo, carnoso y de punta redonda, que se usa para condimentar ciertos guisos.',
		},
		{
			letter: 'j',
			answer: 'jabali',
			status: 0,
			question:
				"Empieza por J: Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba",
		},
	],
	[
		{
			letter: 'k',
			answer: 'punky',
			status: 0,
			question: 'Contiene la K: El jabón de lagarto le aguanta la cresta.',
		},
		{
			letter: 'k',
			answer: 'kryptonita',
			status: 0,
			question:
				'Empieza por K: Mineral ficticio que aparece en los cómics de Superman de DC Comics.',
		},
		{
			letter: 'k',
			answer: 'kamikaze',
			status: 0,
			question:
				'Empieza por K: Persona que se juega la vida realizando una acción temeraria',
		},
	],
	[
		{
			letter: 'l',
			answer: 'leviatán',
			status: 0,
			question: 'Contiene la L: Monstruo de las profundidades marinas.',
		},
		{
			letter: 'l',
			answer: 'homunculo',
			status: 0,
			question: 'Contiene la L: Hombre pequeño y débil.',
		},
		{
			letter: 'l',
			answer: 'licantropo',
			status: 0,
			question: 'Empieza por L: Hombre lobo',
		},
	],
	[
		{
			letter: 'm',
			answer: 'muermo',
			status: 0,
			question: 'Empieza por M: Soso, aburrido.',
		},
		{
			letter: 'm',
			answer: 'martir',
			status: 0,
			question:
				'Empieza por M: Persona que sufre o muere por defender su religión o sus ideales.',
		},
		{
			letter: 'm',
			answer: 'misantropo',
			status: 0,
			question:
				'Empieza por M: Persona que huye del trato con otras personas o siente gran aversión hacia ellas',
		},
	],
	[
		{
			letter: 'n',
			answer: 'necedad',
			status: 0,
			question: 'CON LA N. Demostración de poca inteligencia',
		},
		{
			letter: 'n',
			answer: 'necrófilo',
			status: 0,
			question: 'Empieza por N: Que le gustan los muertos.',
		},
		{
			letter: 'n',
			answer: 'neon',
			status: 0,
			question:
				'Empieza por N: Tubo fluorescente que produce una luz brillante.',
		},
	],
	[
		{
			letter: 'o',
			answer: 'ornitorrinco',
			status: 0,
			question: 'Empieza por O: Único mamifero que pone huevos.',
		},
		{
			letter: 'o',
			answer: 'omnisciente',
			status: 0,
			question: 'Empieza por O: Que conoce todas las cosas reales y posibles.',
		},
		{
			letter: 'o',
			answer: 'orco',
			status: 0,
			question:
				'CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien',
		},
	],
	[
		{
			letter: 'p',
			answer: 'perejil',
			status: 0,
			question: 'Empieza por P: No falta en un plato de Arguiñano',
		},
		{
			letter: 'p',
			answer: 'alpargata',
			status: 0,
			question:
				'Contiene la P: Calzado de lona, con suela de esparto, cáñamo o goma, que se sujeta al pie por presión o con unas cintas que se atan al tobillo.',
		},
		{
			letter: 'p',
			answer: 'protoss',
			status: 0,
			question:
				'CON LA P. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft',
		},
	],
	[
		{
			letter: 'q',
			answer: 'quemar',
			status: 0,
			question: 'Empieza por Q: Arder, combustionar.',
		},
		{
			letter: 'q',
			answer: 'quebradizo',
			status: 0,
			question: 'Empieza por Q: Que se puede romper fácilmente.',
		},
		{
			letter: 'q',
			answer: 'queso',
			status: 0,
			question:
				'CON LA Q. Producto obtenido por la maduración de la cuajada de la leche',
		},
	],
	[
		{
			letter: 'r',
			answer: 'reglas',
			status: 0,
			question: 'Empieza por R: Se rompen o se cumplen.',
		},
		{
			letter: 'r',
			answer: 'rinoplastia',
			status: 0,
			question: 'Empieza por R: Operación quirúrgica para restaurar la nariz.',
		},
		{ letter: 'r', answer: 'raton', status: 0, question: 'CON LA R. Roedor' },
	],
	[
		{
			letter: 's',
			answer: 'pésimo',
			status: 0,
			question: 'Contiene la S: Peor que malo.',
		},
		{
			letter: 's',
			answer: 'sesaliño',
			status: 0,
			question:
				'Contiene la S: Falta de cuidado en la forma de vestir y en el aseo personal.',
		},
		{
			letter: 's',
			answer: 'stackoverflow',
			status: 0,
			question:
				'CON LA S. Comunidad salvadora de todo desarrollador informático',
		},
	],
	[
		{
			letter: 't',
			answer: 'teruel',
			status: 0,
			question: 'Empieza por T: Para algunos existe.',
		},
		{
			letter: 't',
			answer: 'tabardillo',
			status: 0,
			question: 'Empieza por T: Persona alocada, bulliciosa y molesta.',
		},
		{
			letter: 't',
			answer: 'terminator',
			status: 0,
			question:
				'CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984',
		},
	],
	[
		{
			letter: 'u',
			answer: 'urbanita',
			status: 0,
			question: 'Empieza por U: Dícese del que es muy de ciudad.',
		},
		{
			letter: 'u',
			answer: 'huraño',
			status: 0,
			question:
				'Contiene la U: Persona que rehúye el trato de otras personas y rechaza las atenciones y muestras de cariño.',
		},
		{
			letter: 'u',
			answer: 'unamuno',
			status: 0,
			question:
				"CON LA U. Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914",
		},
	],
	[
		{
			letter: 'v',
			answer: 'valiente',
			status: 0,
			question: 'Empieza por V: Contrario de cobarde.',
		},
		{
			letter: 'v',
			answer: 'vasallaje',
			status: 0,
			question:
				'Empieza por V: Tributo que el vasallo pagaba a su señor o servicio que le prestaba según este vínculo.',
		},
		{
			letter: 'v',
			answer: 'vikingos',
			status: 0,
			question:
				'CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa',
		},
	],
	[
		{
			letter: 'w',
			answer: 'westfalia',
			status: 0,
			question: 'Empieza por W: La cama en el techo de las furgonetas.',
		},
		{
			letter: 'w',
			answer: 'wolframio',
			status: 0,
			question:
				'Empieza por la W. Elemento químico de número atómico 74 que se encuentra en el grupo 6 de la tabla periódica de los elementos. Su símbolo es W. ',
		},
		{
			letter: 'w',
			answer: 'sandwich',
			status: 0,
			question:
				'CONTIENE LA W. Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso',
		},
	],
	[
		{
			letter: 'x',
			answer: 'climax',
			status: 0,
			question:
				'Contiene la X: Punto culminante o de mayor satisfacción de la excitación sexual en las zonas erógenas o sexuales.',
		},
		{
			letter: 'x',
			answer: 'taxidermista',
			status: 0,
			question: 'Contiene la X: El que tiene el oficio de disecar.',
		},
		{
			letter: 'x',
			answer: 'botox',
			status: 0,
			question:
				'CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética',
		},
	],
	[
		{
			letter: 'y',
			answer: 'yamaha',
			status: 0,
			question: 'Empieza por Y: La marca del diapasón.',
		},
		{
			letter: 'y',
			answer: 'buey',
			status: 0,
			question:
				'Contiene la Y: Toro castrado, que se utiliza como animal de tiro y del cual se aprovecha su carne.',
		},
		{
			letter: 'y',
			answer: 'peyote',
			status: 0,
			question:
				'CONTIENE LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal por indígenas americanos',
		},
	],
	[
		{
			letter: 'z',
			answer: 'zoquete',
			status: 0,
			question: 'Empieza por Z: Duro de mollera.',
		},
		{
			letter: 'z',
			answer: 'pazguato',
			status: 0,
			question: 'Contiene la Z: Que es tonto o tiene poca rapidez mental.',
		},
		{
			letter: 'z',
			answer: 'zen',
			status: 0,
			question:
				'CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional',
		},
	],
]; //status = 0 no respondido, 1 correcto, 2 erroneo

function pasapalabra() {
  if (todoContestado()){
    finalDePartida(tiempo);
  }else{
    tiempo++;
    if (numerodepregunta < 25) {
		  numerodepregunta++;
	  } else {
		  numerodepregunta = 0;
	  }
    if (preguntas[numerodepregunta].status == 0) {
      var respuesta = prompt(preguntas[numerodepregunta].question).toLowerCase();
      if (respuesta == preguntas[numerodepregunta].answer) {
        console.log('Correcto!');
        preguntas[numerodepregunta].status = 1;
        aciertos++;
        pasapalabra();
      } else if (respuesta == 'pasapalabra' || respuesta == '') {
        console.log('Pasamos palabra');
        pasapalabra();
      } else if (respuesta == 'end') {
        console.log('Has parado el tiempo!');
        finalDePartida();
      } else {
        console.log('NOOOO!');
        preguntas[numerodepregunta].status = 2;
        errores++;
        pasapalabra();
      }
	  } else {
		  pasapalabra();
	  }
  }
	
}

function elegirPregunta() {
	//Funcion para elegir pregunta aleatoriamente y crear el Array definitivo de preguntas de esa partida
	for (var i = 0; i < questions.length; i++) {
		preguntas.push(questions[i][random()]); //Añadimos la pregunta que ha tocado en el Array preguntas
	}
}

function random() {
	//Funcion para que me de un numero aleatorio
	return Math.floor(Math.random() * (3 - 0) + 0); // Retorna un entero aleatorio entre min (incluido) y max (excluido)
}

function todoContestado() {
	var palabrasRespondidas = 0;
	preguntas.forEach(function(obj) {
		if (obj.status != 0) {
			palabrasRespondidas++;
		}
	});
	return palabrasRespondidas == 26 ? true : false;
}

function finalDePartida(tiempo) {
	if (aciertos == 26) {
		alert('Felicidades!!!!');
		console.log('Has completado el rosco en ' + tiempo + ' turnos.');
	} else  {
		console.log(
			'Has completado el rosco con ' +
				aciertos +
				' aciertos y con ' +
				errores +
				' errores. Puedes intentarlo de nuevo.'
		)
	} 
	var juegoNuevo = prompt('Quieres volver a jugar? Si/No', 'Escribe Si o No').toLowerCase();
	switch (juegoNuevo) {
		case 'si': //Si la respuesta es Si volvemos a generar nuevas preguntas
			console.clear();
			nuevoJuego(); //Llamada a la funcion nuevoJuego
			break;
		case 'no': //Si la respuesta es No:
			console.log('Hasta la próxima!');
			break;
		default:
			//Si se ha escrito cualquier otra cosa, acabamos juego
			console.log(
				'No has escrito ni Si ni No, cerramos juego. Hasta la próxima!'
			);
			break;
	}
}

alert('Escribe pasapalabra o deja en blanco para pasar palabra. Si quieres finalizar el juego escribe end. Vamos allá!');

function nuevoJuego() {
	resetearTodo();
	elegirPregunta();
  pasapalabra();
}

function resetearTodo() {
	var preguntas = [];
	var aciertos = 0;
	var errores = 0;
  var tiempo = 0;
  var numerodepregunta = -1;
}
nuevoJuego();