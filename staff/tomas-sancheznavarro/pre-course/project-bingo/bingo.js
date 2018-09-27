function askName() {

    var userName = prompt("Ingresa tu nombre");
    if (userName) {
        window.alert("¡Bienvenid@, " + userName + "!\n¡Vamos a jugar al bingo!");
    } else {
        return askName();
    }
};

var shownBalls = [];

function generateRandomNumber() {
    var randomNum = Math.floor(Math.random() * 15 + 1);
    // shownBalls.filter()
    return randomNum;
};

function unique() {
    var number = generateRandomNumber();

    while (shownBalls.indexOf(number) > -1) {
        number = generateRandomNumber();
    }

    shownBalls.push(number);

    return number;
}

function generateRandomArray() {
    var randArr = [];
    for (i = 0; i < 5; i++) {
        randArr.push(unique());
    }

    // Array(5).fill().map(function () {
    //     return Math.floor(Math.random() * 15 + 1)
    // });
    return randArr;
};



function bingo() {


    var newCarton = generateRandomArray();
    shownBalls = [];
    var fullCarton = ["*", "*", "*", "*", "*"];
    var counter = 0;

    askName();

    window.alert('Este es tu cartón:\n' + newCarton.join(' - '));

    askTurn();

    function askTurn() {

        var confirm = window.confirm("Haz click en 'Aceptar' para sacar una bola o en 'Cancelar' para salir del juego.");
        if (confirm) {
            counter++;
            playGame();
        } else {
            return endGame();
        }
    }

    function playGame() {

        var newBall = unique();

        shownBalls.push(newBall);
        // console.log(shownBalls);

        window.alert('Ha salido el ' + newBall + '.');


        for (let i = 0; i < newCarton.length; i++) {

            var matched = newCarton.indexOf(newBall);

            if (matched > -1) {
                newCarton[matched] = "*";
                window.alert("¡Encontrado el " + newBall + "!");
                window.alert(newCarton.join(' - '));
            } else {
                return askTurn();
            }
            return checkIfFull();
        }

        function checkIfFull() {
            if (newCarton.toString() === fullCarton.toString()) {
                window.alert('¡BINGO!\nHas completado el cartón en ' + counter + ' turnos.');
                return replay();
            } else {
                return askTurn();
            }
        }
    }

    function replay() {
        var answer = prompt("¿Quieres jugar de nuevo? S/N")
        if (answer === 's' || answer === 'S') {
            return bingo();
        } else {
            if (answer === 'n' || answer === 'N') {
                return endGame();
            }
        }
    }

    function endGame() {
        window.alert('¡Gracias por jugar!');
        return;
    }
};

bingo();