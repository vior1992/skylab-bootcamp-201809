////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Set up DOM variables//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var circleLetters = document.querySelectorAll(".item");
var correctAnswers = document.querySelector(".points span");
var seconds = document.querySelector(".seconds span");
var playButton = document.querySelector(".jugar-button");
var nameInput = document.querySelectorAll("input")[0];
var answerInput = document.querySelectorAll("input")[1];
var gameOverMessage = document.querySelector(".game-over-message")
var gameOverMessageh1 = document.querySelector(".game-over-message h1");
var gameOverMessageh2 = document.querySelector(".game-over-message h2");
var questionPartOne = document.querySelector("#empieza-por");
var questionPartTwo = document.querySelector("#question");
var playAgainIcon = document.querySelector(".fa-sync-alt");
var stopPlaying = document.querySelector(".fa-ban");
var siuuImage = document.querySelector("#siuu")
var noooImage = document.querySelector("#nooo");
var correctSound = document.querySelector("#audio");
const sendAnswer = document.querySelectorAll("button")[0];
const pasapalabra = document.querySelectorAll("button")[1];
const introSection = document.querySelector(".right-side .intro-text");
const questionsSection = document.querySelector(" .right-side  #preguntas");
const circleSection = document.querySelector(".circle-wrapper");
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Set up questions object//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var questions = [{
        letter: "a",
        answer: ["Alves"],
        status: 0,
        question: ["Empieza por A:", "Apellido del jugador que más títulos ha ganado en la historia"]
    },
    {
        letter: "b",
        answer: ["Butragueño"],
        status: 0,
        question: ["Empieza por B:", "Apellido del ex jugador del Real Madrid que recibía el apodo de 'el buitre'"]
    },
    {
        letter: "c",
        answer: ["Croacia"],
        status: 0,
        question: ["Empieza por C:", "País finalista del Mundial 2018"]
    },
    {
        letter: "d",
        answer: ["De Gea"],
        status: 0,
        question: ["Empieza por D:", "Apellido del actual portero de la selección española"]
    },
    {
        letter: "e",
        answer: ["Enrique"],
        status: 0,
        question: ["Empieza por E:", "Apellido del entrenador del Barça que conquistó el segundo triplete"]
    },
    {
        letter: "f",
        answer: ["Figo"],
        status: 0,
        question: ["Empieza por F", "Apellido del jugador Portugués que cambió el Barça por el Madrid"]
    },
    {
        letter: "g",
        answer: ["Guardiola"],
        status: 0,
        question: ["Empieza por G", "Apellido del entrenador del Barça que conquistó el primer triplete"]
    },
    {
        letter: "h",
        answer: ["Hernandez"],
        status: 0,
        question: ["Empieza por H:", "Apellido del jugador Mexicano que jugó en el Manchester United"]
    },
    {
        letter: "i",
        answer: ["Iniesta"],
        status: 0,
        question: ["Empieza por I", "Apellido del mítico centrocampista del Barça que se fue a Japón este año"]
    },
    {
        letter: "j",
        answer: ["Johan"],
        status: 0,
        question: ["Empieza por J:", "Nombre del inventor del estilo de juego del Barça"]
    },
    {
        letter: "k",
        answer: ["Kylian"],
        status: 0,
        question: ["Empieza por K", "Nombre del jugador que ganó el premio al ‘Mejor jugador jóven’ en el mundial 2018"]
    },
    {
        letter: "l",
        answer: ["Lloris"],
        status: 0,
        question: ["Empieza por L:", "Apellido del actual portero de la selección Francesa"]
    },
    {
        letter: "m",
        answer: ["Messi"],
        status: 0,
        question: ["Empieza por M:", "D10S"]
    },
    {
        letter: "n",
        answer: ["Neymar"],
        status: 0,
        question: ["Empieza por N:", "Jugador Brasileño que se fue del Barça por 222 millones de euros"]
    },
    {
        letter: "o",
        answer: ["Oblak"],
        status: 0,
        question: ["Empieza por O:", "Apellido del actual portero del Atletico de Madrid"]
    },
    {
        letter: "p",
        answer: ["Puyol"],
        status: 0,
        question: ["Empieza por P:", "Mítico defensa y capitán del Barça"]
    },
    {
        letter: "q",
        answer: ["Quaresma"],
        status: 0,
        question: ["Empieza por Q:", "Apellido del Portugués que jugó en el Barça en la temporada 2003-2004"]
    },
    {
        letter: "r",
        answer: ["Ronaldo"],
        status: 0,
        question: ["Empieza por R:", "Apellido del actual balón de oro actualmente jugando en la Juventus"]
    },
    {
        letter: "s",
        answer: ["Suarez"],
        status: 0,
        question: ["Empieza por S:", "Apellido del jugador Uruguayo que juega actualmente en el Barça"]
    },
    {
        letter: "t",
        answer: ["Torres"],
        status: 0,
        question: ["Empieza por T:", "Apellido del ex jugador del Atlético de Madrid llamado ‘El Niño’"]
    },
    {
        letter: "u",
        answer: ["UEFA"],
        status: 0,
        question: ["Empieza por U:", "La confederación europea de asociaciones nacionales de fútbol"]
    },
    {
        letter: "v",
        answer: ["Vidal"],
        status: 0,
        question: ["Empieza por V:", "Jugador Chileno fichado por el Barça este año"]
    },
    {
        letter: "w",
        answer: ["Wanda Metropolitano"],
        status: 0,
        question: ["Empieza por W:", "Estadio del Atlético de Madrid"]
    },
    {
        letter: "x",
        answer: ["Xavi"],
        status: 0,
        question: ["Empieza por X:", "Mítico centrocampista del Barça actualmente jugando en Qatar"]
    },
    {
        letter: "y",
        answer: ["Neymar"],
        status: 0,
        question: ["Contiene la Y:", "Apellido del actual entrenador del Arsenal’"]
    },
    {
        letter: "z",
        answer: ["Zidane"],
        status: 0,
        question: ["Empieza por Z:", "Ex entrenador del Madrid que consiguió 3 Champions en 3 años consecutivos"]
    },
]

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Create objects with global variables to store game data//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function GameStatus(name = "", correct = 0, wrong = 0, playing = false, turns = 0, currentIndex = 0, currentAnswer = "", completeGame = false) {
    this.name = name
    this.correct = correct
    this.wrong = wrong
    this.playing = playing
    this.turns = turns
    this.currentIndex = currentIndex
    this.currentAnswer = currentAnswer
    this.completeGame = completeGame
}
//Create empty object with gameplay variables
var gameplay = new GameStatus();
var timeLeft = 120;

//Points object
var overallPoints = [{
        user: 'User 1',
        points: 5
    },
    {
        user: 'User 2',
        points: 20
    },
    {
        user: 'User 3',
        points: 17
    },
]

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Gameplay Functions//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Set up countdown
function countDown() {
    seconds.innerHTML = timeLeft;

    function timeIt() {
        timeLeft--;
        seconds.innerHTML = timeLeft;
        if (timeLeft === 0 || (gameplay.correct + gameplay.wrong===26)) {
            gameplay.playing = false;
            appendScore(overallPoints);
            clearInterval(timer);
        }
    }
    timer = setInterval(timeIt, 1000);

}

//Intro functions
function playerName() {
    gameplay.name = nameInput.value;
}

function introShow() {
    introSection.style.display = "block";
    questionsSection.style.display = "none";
}

function introHide() {
    introSection.style.display = "none";
    questionsSection.style.display = "block";
}

function checkIfEmptyText(gameplay) {
    if (gameplay.name === "") {
        var message = document.querySelector("#enter-name")
        message.style.color = "red";
        message.textContent = "Please enter your name!";
        introShow();
    } else {
        introHide();
        gameplay.playing = true;
        countDown();
    }
}

//Game logic functions

function nextQuestion() {
    questionPartOne.innerHTML = questions[gameplay.currentIndex].question[0];
    questionPartTwo.innerHTML = questions[gameplay.currentIndex].question[1];
}


function checkAnswer() {
    if (answerInput.value.toUpperCase() === questions[gameplay.currentIndex].answer[0].toUpperCase()) {
        questions[gameplay.currentIndex].status = 1
        modifyCircle(gameplay);
        modifyPoints(gameplay);
        endGameCheck(gameplay);
        findNextLetter();

    } else if (answerInput.value.toUpperCase() === "PASAPALABRA") {
        skipQuestion();
    } else {
        questions[gameplay.currentIndex].status = 1;
        modifyCircle(gameplay);
        modifyPoints(gameplay);
        endGameCheck(gameplay);
        findNextLetter();
    }


}


function skipQuestion() {
    gameplay.currentIndex++;
    gameplay.currentIndex = gameplay.currentIndex % questions.length;
    endGameCheck(gameplay);
    findNextLetter();
        questionPartOne.innerHTML = questions[gameplay.currentIndex].question[0];
        questionPartTwo.innerHTML = questions[gameplay.currentIndex].question[1];
    
}

function findNextLetter() {
    if (gameplay.playing === true) {
        while (questions[gameplay.currentIndex].status != 0) {
            gameplay.currentIndex++;
            gameplay.currentIndex = gameplay.currentIndex % questions.length;
        }
    }
}


function modifyCircle(gameplay) {
    if (answerInput.value.toUpperCase() === questions[gameplay.currentIndex].answer[0].toUpperCase()) {
        circleLetters[gameplay.currentIndex].style.backgroundColor = "green";
        siuuImage.style.display = "block";
        imgMove(siuuImage);        
        playAudio();
        setTimeout(function () {
            siuuImage.style.display = 'none'
        }, 500);
        siuuImage.style.left = -200 + 'px';
    } else {
        circleLetters[gameplay.currentIndex].style.backgroundColor = "red";
        noooImage.style.display = "block";
        imgMove(noooImage); 
        setTimeout(function () {
            noooImage.style.display = 'none'
        }, 500);
        noooImage.style.left = -200 + 'px';
    }
}


function modifyPoints(gameplay) {
    if (answerInput.value.toUpperCase() === questions[gameplay.currentIndex].answer[0].toUpperCase()) {
        gameplay.correct++;
        correctAnswers.innerHTML = gameplay.correct;
    } else {
        gameplay.wrong++;
    }
}


function playAudio() {
    correctSound.play();
}

////////////////////////////////////////////////////////Display scores

function endGameCheck(gameplay) {
    var found = questions.some(function (el) {
        return el.status === 0;
    });
    if (found === false) {
        gameplay.playing = false;
    }
}

function stopPlayingScreen() {
    if (gameplay.playing === false) {
        circleSection.style.visibility = "hidden";
        gameOverMessage.style.visibility = "visible";
        questionsSection.style.display = "none";

        if (gameplay.correct === 1) {
            gameOverMessageh1.innerHTML = "<h1>HAS CONSEGUIDO " + gameplay.correct + " PUNTO!</h1>"
        } else {
            gameOverMessageh1.innerHTML = "<h1>HAS CONSEGUIDO " + gameplay.correct + " PUNTOS!</h1>"
        }
    }

}

function showScores(arr) {
    circleSection.style.visibility = "hidden";
    gameOverMessage.style.visibility = "visible";
    questionsSection.style.display= "none";
    gameOverMessageh1.innerHTML = "Has conseguido " + gameplay.correct + " puntos  <br><br>";

    var sortedArray = arr.sort(function (a, b) {
        return b.points - a.points;
    });
    sortedArray.forEach(function (el) {
        gameOverMessageh1.innerHTML += el.user + '===>';
        gameOverMessageh1.innerHTML += el.points + ' Points' + '<br>';
    })
}


function appendScore(arr) {
    if (gameplay.playing === false) {
        arr.push({
            user: gameplay.name,
            points: gameplay.correct
        });
        showScores(overallPoints);
    }
}

function imgMove(selectedImage) {
    var pos  = -200;
    var id = setInterval(frame, 10);
    function frame() {
        if (pos === 0) {
            
            clearInterval(id);
        }
        else {
            pos = pos + 5;
            selectedImage.style.left  = pos + 'px';
        }
    }
}


//Main function

function main() {
    playButton.addEventListener("click", function () {
        gameplay.playing = true;
        playerName();
        checkIfEmptyText(gameplay);
        nextQuestion();
        
    }) 

    sendAnswer.addEventListener("click", function () {

        checkAnswer();
        nextQuestion();
        // appendScore(overallPoints);
        answerInput.value = "";

    })

    pasapalabra.addEventListener("click", function () {

        skipQuestion();
        answerInput.value = "";

    })

    playAgainIcon.addEventListener("click", function () {
        location.reload();
    })

    stopPlaying.addEventListener("click", function () {
        
        gameplay.playing = false;
        stopPlayingScreen();
    })

    gameOverMessageh2.addEventListener("click", function () {
        location.reload();
    })

    answerInput.addEventListener("keyup", function () {
        if (event.keyCode === 13) {
            sendAnswer.click();
        }
    })


    nameInput.addEventListener("keyup", function () {
        if (event.keyCode === 13) {
            playButton.click();
        }
    })

}

main()