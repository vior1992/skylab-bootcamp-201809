var questions = [
    { letter: "a", answer: "apu", status: 0, question: ("CON LA A. Vendedor del badulaque, con octillizos, de origen indio") },
    { letter: "b", answer: "bart", status: 0, question: ("CON LA B. Hijo primogenito de la familia Simpson que siempre se mete en problemas") },
    { letter: "c", answer: "charles", status: 0, question: ("CON LA C. Nombre del dueño de la central nuclear de Springfield") },
    { letter: "d", answer: "doh", status: 0, question: ("CON LA D. Expresion en ingles que utiliza Homer cuando algo no sale bien (sin el apostrofe entre las dos palabras)") },
    { letter: "e", answer: "excluido", status: 0, question: ("CON LA E. Se lo dice Homer a Wendal, Rudy, Steven y mas niños despues de entrenar al equipo de futbol americano") },
    { letter: "f", answer: "fresisuis", status: 0, question: ("CON LA F. Bebida fria y extremadamente dulce con la que Bart y Milhouse pillan una sobredosis de azucar ") },
    { letter: "g", answer: "gato", status: 0, question: ("CON LA G. Que animal es Bola de nieve IV?") },
    { letter: "h", answer: "hugo", status: 0, question: ("CON LA H. Hermano gemelo de Bart que sale en un especial de terror") },
    { letter: "i", answer: "italiano", status: 0, question: ("CON LA I. Idioma que sabe hablar Milhouse por que su abuela se lo hizo aprender a golpes") },
    { letter: "j", answer: "joe", status: 0, question: ("CON LA J. Segundo nombre de Homer") },
    { letter: "k", answer: "krusty", status: 0, question: ("CON LA K. Payaso estrella de television con cierta adiccion al alcohol") },
    { letter: "l", answer: "lisa", status: 0, question: ("CON LA L. **** necesita un aparato, SEGURO DENTAAAAAAL") },
    { letter: "m", answer: "mocasines", status: 0, question: ("CON LA M. Pieza de ropa que quiere hacerse el Sr. Burns con la piel de dos mastines") },
    { letter: "n", answer: "nucelar", status: 0, question: ("CON LA N. Lo dice homer antes de entrar en el submarino; N****** la palabra es N******") },
    { letter: "enye", answer: "cañonero", status: 0, question: ("CONTIENE LA Ñ. Todoterreno que anuncia Krusy el payaso y que Homer compra en su version femenina por herror") },
    { letter: "o", answer: "otto", status: 0, question: ("CON LA O. Conductor del autobus escolar, le encanta el heavy metal") },
    { letter: "p", answer: "pendiente", status: 0, question: ("CON LA P. Lo utiliza Homer en el submarino para paliar el problema con la fuga de agua") },
    { letter: "q", answer: "quiero", status: 0, question: ("CON LA Q. ****** mi bocadillo, ****** mi bocadillo, ****** mi bocadillo") },
    { letter: "r", answer: "ralph", status: 0, question: ("CON LA R. Un gnomo le dijo que quemara cosas") },
    { letter: "s", answer: "simpson", status: 0, question: ("CON LA S. Apellido de la familia mas conocida de Springfield") },
    { letter: "t", answer: "tele", status: 0, question: ("CON LA T. Sin **** ni cerveza Homer pierde la cabeza") },
    { letter: "u", answer: "uter", status: 0, question: ("CON LA U. Nombre del chico gordito aleman del colegio de Springfield que se apellida Zörker") },
    { letter: "v", answer: "videojuego", status: 0, question: ("CON LA V. Lo roba Bart en un supermercado en navidad") },
    { letter: "w", answer: "wiggum", status: 0, question: ("CON LA W. Apellido del jefe de policia de la ciudad de Springfield") },
    { letter: "x", answer: "expediente x", status: 0, question: ("CONTIENE LA X. Serie a la que hacen un guiño en el episodio del Sr Burns y el supuesto extraterrestre") },
    { letter: "y", answer: "yogulado", status: 0, question: ("CONTIENE LA Y. Se lo vende el dependiente chino de una tienda mistica, esta maldito") },
    { letter: "z", answer: "tanzanian", status: 0, question: ("CONTIENE LA Z. Apellido REAL del Seimour Skiner") }
    ];

//copia de la variable anterior para volver a darle el mismo valor al reiniciar.
var questionsTwo = [
    { letter: "a", answer: "apu", status: 0, question: ("CON LA A. Vendedor del badulaque, con octillizos, de origen indio") },
    { letter: "b", answer: "bart", status: 0, question: ("CON LA B. Hijo primogenito de la familia Simpson que siempre se mete en problemas") },
    { letter: "c", answer: "charles", status: 0, question: ("CON LA C. Nombre del dueño de la central nuclear de Springfield") },
    { letter: "d", answer: "doh", status: 0, question: ("CON LA D. Expresion en ingles que utiliza Homer cuando algo no sale bien (sin el apostrofe entre las dos palabras)") },
    { letter: "e", answer: "excluido", status: 0, question: ("CON LA E. Se lo dice Homer a Wendal, Rudy, Steven y mas niños despues de entrenar al equipo de futbol americano") },
    { letter: "f", answer: "fresisuis", status: 0, question: ("CON LA F. Bebida fria y extremadamente dulce con la que Bart y Milhouse pillan una sobredosis de azucar ") },
    { letter: "g", answer: "gato", status: 0, question: ("CON LA G. Que animal es Bola de nieve IV?") },
    { letter: "h", answer: "hugo", status: 0, question: ("CON LA H. Hermano gemelo de Bart que sale en un especial de terror") },
    { letter: "i", answer: "italiano", status: 0, question: ("CON LA I. Idioma que sabe hablar Milhouse por que su abuela se lo hizo aprender a golpes") },
    { letter: "j", answer: "joe", status: 0, question: ("CON LA J. Segundo nombre de Homer") },
    { letter: "k", answer: "krusty", status: 0, question: ("CON LA K. Payaso estrella de television con cierta adiccion al alcohol") },
    { letter: "l", answer: "lisa", status: 0, question: ("CON LA L. **** necesita un aparato, SEGURO DENTAAAAAAL") },
    { letter: "m", answer: "mocasines", status: 0, question: ("CON LA M. Pieza de ropa que quiere hacerse el Sr. Burns con la piel de dos mastines") },
    { letter: "n", answer: "nucelar", status: 0, question: ("CON LA N. Lo dice homer antes de entrar en el submarino; N****** la palabra es N******") },
    { letter: "enye", answer: "cañonero", status: 0, question: ("CONTIENE LA Ñ. Todoterreno que anuncia Krusy el payaso y que Homer compra en su version femenina por herror") },
    { letter: "o", answer: "otto", status: 0, question: ("CON LA O. Conductor del autobus escolar, le encanta el heavy metal") },
    { letter: "p", answer: "pendiente", status: 0, question: ("CON LA P. Lo utiliza Homer en el submarino para paliar el problema con la fuga de agua") },
    { letter: "q", answer: "quiero", status: 0, question: ("CON LA Q. ****** mi bocadillo, ****** mi bocadillo, ****** mi bocadillo") },
    { letter: "r", answer: "ralph", status: 0, question: ("CON LA R. Un gnomo le dijo que quemara cosas") },
    { letter: "s", answer: "simpson", status: 0, question: ("CON LA S. Apellido de la familia mas conocida de Springfield") },
    { letter: "t", answer: "tele", status: 0, question: ("CON LA T. Sin **** ni cerveza Homer pierde la cabeza") },
    { letter: "u", answer: "uter", status: 0, question: ("CON LA U. Nombre del chico gordito aleman del colegio de Springfield que se apellida Zörker") },
    { letter: "v", answer: "videojuego", status: 0, question: ("CON LA V. Lo roba Bart en un supermercado en navidad") },
    { letter: "w", answer: "wiggum", status: 0, question: ("CON LA W. Apellido del jefe de policia de la ciudad de Springfield") },
    { letter: "x", answer: "expediente x", status: 0, question: ("CONTIENE LA X. Serie a la que hacen un guiño en el episodio del Sr Burns y el supuesto extraterrestre") },
    { letter: "y", answer: "yogulado", status: 0, question: ("CONTIENE LA Y. Se lo vende el dependiente chino de una tienda mistica, esta maldito") },
    { letter: "z", answer: "tanzanian", status: 0, question: ("CONTIENE LA Z. Apellido REAL del Seimour Skiner") }
    ];

var fail = 0;
var failText = "Fallos:";
var showFails = fails.innerHTML = failText + " " + fail;

var win = 0;
var winText = "Aciertos:";
var showWins = wins.innerHTML = winText + " " + win;

var QforAnswer = 27;
var QforAnswerText = "Por contestar:";
var showForAnswer = forAnswer.innerHTML = QforAnswerText + " " + QforAnswer;

var name = "";

var answered = 0;

var wroteAnswerVar = 0;

var ready = 0;

//INICIO DEL JUEGO
function startGame(){
    var newGame = confirm("New game?");
    if (newGame) {
        playerName();
    } else {
        gameFinish();
    }
}

//Introducimos el nombre del jugador.
function playerName(){
    name = prompt("Please introduce your name", "Player name");
    if (name != null || name.length <= 1) { 
        areYouReady(); 
    } else {
        startGame();
    }
    return name;
}

//Confirmamos que estamos preparados y empezamos a jugar.
function areYouReady(){
     var ayr = confirm("Are you ready?");
    if (ayr) {
        ready = 1;
        clock();
        runQuestions();
    } else {
        startGame();
    }
}

//JUEGO INICIADO

//Enseña las preguntas que tocan en el panel.
function runQuestions(){
    if (ready == 1 && questions[answered].status == 0){

        var pregunta = document.getElementById("questions");
        pregunta.innerHTML = questions[answered].question; 
    } 
}

//Cuenta cuando le damos al boton de enviar la respuesta.
function wroteAnswer(){
    wroteAnswerVar ++;
}

//Envia lo escrito en el input a la parte logica.
function writeAnswer(answerWroted){
    if (ready == 1){
        var playerAnswer = document.getElementById("answer").value;
        var playerAnswerChecked = playerAnswer.toLowerCase();
        return playerAnswerChecked;
    }
}

//Envia y confirma la pregunta y filtra si es acierto, fallo o pasapalabra.
function sendAnswer(){
    
    if (ready == 1 && QforAnswer != 0){

        if (questions[answered].status === 0 && writeAnswer() == "pasapalabra"){
                    document.getElementById(questions[answered].letter).style.background = "#ffff00";
                    answered ++;

        } else if (questions[answered].status === 0 && writeAnswer() != questions[answered].answer){
                    questions[answered].status++;
                    QforAnswer--;
                    fail++;
                    document.getElementById(questions[answered].letter).style.background = "#cc0000";
                    answered++;
                    var showFails = fails.innerHTML = failText + " " + fail;
                    var showForAnswer = forAnswer.innerHTML = QforAnswerText + " " + QforAnswer;


        } else if (questions[answered].status === 0 && writeAnswer() == questions[answered].answer){
                    questions[answered].status++;
                    QforAnswer--;
                    win++;
                    document.getElementById(questions[answered].letter).style.background = "#00cc00";
                    answered++;
                    var showWins = wins.innerHTML = winText + " " + win;
                    var showForAnswer = forAnswer.innerHTML = QforAnswerText + " " + QforAnswer;
                 
        }   
     }
}

//Comprueba si se ha hecho el primer ciclo y si esta completo o hay pasapalabras
function checkQuestionsAnswer(){
    if (wroteAnswerVar <= 26){
        runQuestions();
    } else {
        filterQuestions();
        allAsksAnswered();   
    }
}

//Filtra las preguntas contestadas en el caso de hacer otro ciclo si hay algun pasapalabra
function filterQuestions(){
    var filteredQuestions = questions.filter(function(pasapalabra){
        return pasapalabra.status === 0;
    });
    return filteredQuestions;
}

//Comprueba si todas las preguntas estan respondidas.
function allAsksAnswered(){
    if (QforAnswer != 0){
        answered = 0;
        filterQuestions();
        questions = filterQuestions();
        runQuestions();
    } else {
        if (fail >= 1){
            gameOver();
        } else {
            gameWin();
        }
        resume();
    } 

}

//Boton para parar el juego en cualquier momento y volver a los stats de inicio. No es pausa.
function stop(){
    if (name !=  "") {
        var askStop = confirm("Parar el juego y acabar la partida " + name + "?");
        if (askStop) {
            resetGame();
            startGame();
        } else {
            
        }
    } else {

    }
}

//Resumen del juego con aciertos y fallos.
function resume(){
    alert("Game finish " + name + "! . You have " + win + " correct answers and " + fail + " wrong answers!");
    playAgain();
}

//Confirmacion si queremos volver a jugar o no
function playAgain(){
    var tryNewGame = confirm("Do you want try again?");
    
    if (tryNewGame) {
        playAgainSamePlayer();
        runQuestions();
        areYouReady();

        
    } else {
        resetGame();
        gameFinish();
        
    }
}

//Reinicio del juego con el mismo nombre de jugador introducido.
function playAgainSamePlayer(){
    questions = questionsTwo 
        questions.map(function(reset){
        document.getElementById(reset.letter).style.background = "";
        reset.status = 0;
        return reset;
    });
    
    clearInterval(clockRun);
    wroteAnswerVar = 0;
    ready = 0;
    answered = 0;
    QforAnswer = 27;
    fail = 0;
    win = 0;
    var showFails = fails.innerHTML = failText + " " + fail;
    var showWins = wins.innerHTML = winText + " " + win;
    var showForAnswer = forAnswer.innerHTML = QforAnswerText + " " + QforAnswer;
}

//Reinicio untroduciendo nombre nuevo.
function resetGame(){
    questions = questionsTwo 
    questions.map(function(reset){
        document.getElementById(reset.letter).style.background = "";
        reset.status = 0;
        return reset;
    });

    clearInterval(clockRun);
    wroteAnswerVar = 0;
    ready = 0;
    answered = 0;
    QforAnswer = 27;
    fail = 0;
    win = 0;
    name = "";
    var showFails = fails.innerHTML = failText + " " + fail;
    var showWins = wins.innerHTML = winText + " " + win;
    var showForAnswer = forAnswer.innerHTML = QforAnswerText + " " + QforAnswer;
}

//Reloj con 5 minutos
function clock() {
    var countdown = document.getElementById("clock");

    countdown.innerHTML = "300";

    seconds = 300;

    clockRun = setInterval(function() {
        seconds--;
        if (seconds == 10 ) {
            
            alert("Quedan 10 segundos!");
        };

        if (seconds === 0) {
            clearInterval(clockRun);
            resume();
        }

        countdown.innerHTML = "Tiempo: " + seconds;
    },1000)
}

//Cierre del juego reseteando stats
function gameFinish(){
    alert("Goodbye, see you soon " + name + "!");
    resetGame();
}

//Mensaje si pierdes
function gameOver(){
    alert("Game over, you lose " + name + "!");
}

//Mensaje si ganas.
function gameWin(){
    alert("Game finished, you win " + name + "!");
}
