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
    ]

var fails = 0;
var wins = 0;
var answered = 0;
var forAnswer = 27;
var name = "";

//PRINCIPIO INICIO DEL JUEGO
function startGame(){
    var newGame = confirm("New game?");
    //Si queremos una nueva partida.
    if (newGame) {
        console.log("Let's roll!");
        playerName();
        //Si no queremos jugar,adios.
    } else {
        gameFinish();
    }
}//Cierre startGame

function gameFinish(){
    console.log("Goodbye, see you soon " + name + "!") 
}//Cierre GameFinish

function gameOver(){
    console.log("Game over, you lose " + name + "!")
}//Cierre gameOver

function gameWin(){
    console.log("Game finished, you win " + name + "!")
}

function playerName(){
    name = prompt("Please introduce your name", "Player name");
    if (name != null) {
        console.log("Hello " + name);
        areYouReady();
        
    } else {
        gameFinish();
    }
    return name 
}//Cierre playerName


function areYouReady(){
     var ayr = confirm("Are you ready?");
    //Si estamos ready
    if (ayr) {
        console.log("Start!");
        playGame();
        //Si no estamos ready, volvemos al inicio.
    } else {
        startGame();
    }
}

//FINAL INICIO JUEGO

//PRINCIPIO EMPEZAR A JUGAR

function playGame(){ //Falta usar el boton cancelar para parar el juego en cualquier momento.
    
   

    console.log(questions)
    var filteredQuestions = questions.filter(function(pasapalabra){
        return pasapalabra.status === 0
    })

    filteredQuestions.map(function(pasapalabra){
        
        var playerAnswer = prompt(pasapalabra.question , "Answer");

        if (pasapalabra.status === 0 && playerAnswer == "pasapalabra"){
            console.log("Pasapalabra, next question")

        } else if (pasapalabra.status == 0 && playerAnswer != pasapalabra.answer){
            pasapalabra.status++;
            answered++;
            forAnswer--;
            fails++;
            console.log("Incorrect answer! " + name + " you have " + fails + " errors!")

        } else if (pasapalabra.status === 0 && playerAnswer == pasapalabra.answer){
            pasapalabra.status++;
            answered++;
            forAnswer--;
            wins++;
            console.log("Correct answer!" + name + " you have " + wins + " hits!");   
        }

        })

    allAsksAnswered();
 
}//Cierre playgame

function resume(){
    console.log("Game finish " + name + "! . You have " + wins + " correct answers and " + fails + " wrong answers!");
    playAgain();
}//Cierre resume

function playAgain(){
    var tryNewGame = confirm("Do you want try again?");
    //Si queremos una nueva partida.
    if (tryNewGame) {
        console.log("Okey, go!");
        resetGame();
        playGame();

        //Si no queremos jugar,adios.
    } else {
        gameFinish();
    }
}//Cierre playAgain

function allAsksAnswered(){
    if (answered != questions.length){
        playGame();
    } else {
        if (fails >= 1){
            gameOver();
        } else {
            gameWin();
        }
        resume();
    } 

}//Cierre allasksAnswered

function resetGame(){
    questions = questions.map(function(reset){
        reset.status = 0;
        return reset
    })

    answered = 0;
    forAnswer = 27;
    fails = 0;
    wins = 0;
} //Cierre resetGame

//FINAL EMPEZAR JUGAR

//PRUEBAS

startGame();