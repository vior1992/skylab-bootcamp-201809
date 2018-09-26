
var abecedario = [
{id: 1, letra: "a", pregunta: "Instrumento o maquina que sirve para atacar o defenderse.", respuesta: "arma", siguiente: true},
{id: 2, letra: "a", pregunta: "Instrumento o maquina que sirve para atacar o defenderse.", respuesta: "arma", siguiente: true},
{id: 3, letra: "a", pregunta: "Instrumento o maquina que sirve para atacar o defenderse.", respuesta: "arma", siguiente: true},
{id: 4, letra: "a", pregunta: "Instrumento o maquina que sirve para atacar o defenderse.", respuesta: "arma", siguiente: true},
{id: 5, letra: "a", pregunta: "Instrumento o maquina que sirve para atacar o defenderse.", respuesta: "arma", siguiente: true},
]

var usuarios = [
{id: 1, nombre: "a", acertadas: 0, falladas: 0},
{id: 2, nombre: "a", acertadas: 0, falladas: 0},
{id: 3, nombre: "a", acertadas: 0, falladas: 0},
{id: 4, nombre: "a", acertadas: 0, falladas: 0},
]

var questionsAcc = 0;
var correctAnswer = 0;
var incorrectAnswer = 0;
var timeLeft;
var timerGenerate;
var gameTest = document.getElementById('game_questions');
var userAnswer = document.getElementById('answer');
var userName = document.getElementById('user_name').value;

function endGame() {
	clearInterval(timerGenerate);
	document.getElementById('play_menu').style.display = 'block';
	document.getElementById('name_intro').style.visibility = "hidden";
	document.getElementById('container_game').style.visibility = "hidden";
	document.getElementById('container_menu').style.visibility = "visible";

function User() {
	userName = document.getElementById('user_name').value;
	userName = userName.toUpperCase();
	if (userName === '') {
	} else if (userNameBox.indexOf(userName) === -1) {
		userNameBox.push(userName);
		document.getElementById('container_menu').style.visibility = "hidden";
		document.getElementById('play_menu').style.display = 'none';
		document.getElementById('container_game').style.visibility = "visible";
		document.getElementById('correct').innerHTML = "Aciertos";
		document.getElementById('incorrect').innerHTML = "Errores";
		document.getElementById('correct').style.color = "white";
		document.getElementById('incorrect').style.color = "white";
		questionsAcc = 0;
		correctAnswer = 0;
		incorrectAnswer = 0;
		for(var i = 0; i < questions.length; i++) {
			questions[i].status = 0;
			document.getElementsByClassName('results')[i].style.backgroundColor = 'white';
		}
		gameQuestions();
		timer();
	} else {
		document.getElementById('alert_user').style.visibility = 'visible';
		setTimeout(newUserIntro, 2000);
	};
	document.getElementById('answer').focus()
}