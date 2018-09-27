/*PASAPALABRA*/
/*AÑADIRLE UN TIEMPO LIMITE, CUANDO ACABE MOSTRARÁ LOS RESULTADOS DE ESE JUGADOR*/
/*AL FINALIZAR EL TIEMPO TAMBIEN PREGUNTARÁ SI QUIERE JUGAR OTRO JUGADOR, GUARDARÁ EN EL RANKING Y LANZARA OTRA*/
/**/

var questions = [
    { letter: "a", answer: "abducir", status: 0, question: ("CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien") },
    { letter: "b", answer: "bingo", status: 0, question: ("CON LA B. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso") },
    { letter: "c", answer: "churumbel", status: 0, question: ("CON LA C. Niño, crío, bebé") },
    { letter: "d", answer: "diarrea", status: 0, question: ("CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida") },
    /*{ letter: "e", answer: "ectoplasma", status: 0, question: ("CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación") },
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
	*/
]

var correct = 0;
var incorrect = 0;
var ranking = [];
var jugador = {nombre:"nombre",puntuacion: 0};

/*Primero una función guarde el jugador actual*/
function player(){
	jugador.nombre = prompt("Introduzca nombre de jugador:");
}

/*Haremos una función que vaya cogiendo cada elemento del array y lanzando las preguntas y 
recogiendo las respuestas*/

function round(){
	for (var j=0; j<2 ;j++){
	for(var i = 0; i < questions.length; i++){
		if(questions[i].status!=1){
		console.log(questions[i].question);
		checkword(prompt("Respuesta: "), i) ;
	}
	}

}}

/*ahora haremos una funcion que compruebe la respuesta introduciendole la palabra y el indice i*/

function checkword(word,index){
	if (word==="pasapalabra"){
		return ("pasapalabra");
	}
	if(word===questions[index].answer){
		console.log("Correcto, un punto para ti!")
		correct = correct + 1;
		questions[index].status=1;
	}
	else{
		console.log("Noooooooooo! la respuesta correcta es "+questions[index].answer)
		incorrect = incorrect + 1;
		questions[index].status=1;
	}
}

/*función que muestra por pantalla cuantas palabras se acertaron*/

function result(number){
	jugador.puntuacion=number;
	console.log(jugador.nombre +" acertaste "+number+" palabras");
	ranking.push(jugador);
	
}

/*Esta funcion es para si se quiere volver a jugar, reinicia el status de la lista de palabras*/

function playagain(){
	if((prompt("Se anima otro jugador?")) === ("si" || "SI")){
		initiatestatus();
		letsplay();
	}
	else{
		console.log("bye bye");
	}
	}

/*esta es la funcion que inicia el status de la lista tambien las variables correct e incorrect y el jugador*/

function initiatestatus(){
	for(var i = 0; i<questions.length ;i++){
		questions[i].status = 0;
	}
	correct = 0;
	incorrect = 0;
	jugador = {nombre:"nombre",puntuacion: 0};

}

/*esta es la funcion padre que va llamando a las otras*/
function letsplay(){
	player();
	round(questions);
	result(correct);
	playagain();

}

/*las funciones de ordena y rankingfinal las he sacado fuera porque no son parte del juego*/

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

function rankingfinal(){
	ordena();
	console.log("HALL OF FAME!!!");
	for (var i = 0; i < ranking.length; i++){
		console.log(ranking[i].nombre + " " + ranking[i].puntuacion + " puntos!!");

}
}


letsplay();
rankingfinal();



