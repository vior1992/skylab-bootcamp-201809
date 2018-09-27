

var name = '', users = [], hit, t0, t1, totalTime, letterindex, questions, nextWord, counter,hits, presentUsers = '';

// timer
var timerInterval = null;

function $(myId) {
    return document.getElementById(myId);
}

//enter key response on click
function enterResp(listener, myButton) {
    $(listener).addEventListener('keyup', function(event) {
        event.preventDefault();
        if (event.keyCode === 13) {
            $(myButton).click();
        }
    });
}

enterResp('response','submit');
enterResp('inputName','ajugar');


// //enter key response on click
// $('response').addEventListener('keyup', function(event) {
//     event.preventDefault();
//     if (event.keyCode === 13) {
//         $('submit').click();
//     }
// });

// $('inputName').addEventListener('keyup', function(event) {
//     event.preventDefault();
//     if (event.keyCode === 13) {
//         $('ajugar').click();
//     }
// });

function changeValue() {
    $('timeCounter').innerHTML = 150 - ( ++value );
    if(value === 150){
        timeExpired();
    };
};

function startGame() {
    questions = [
        { letter: 'a', answer: 'abducir', status: 0, question: ('CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien') },
        { letter: 'b', answer: 'bingo', status: 0, question: ('CON LA B. Juego que ha sacado de quicio a todos los \'Skylabers\' en las sesiones de precurso') },
        { letter: 'c', answer: 'churumbel', status: 0, question: ('CON LA C. Niño, crío, bebé') },
        { letter: 'd', answer: 'diarrea', status: 0, question: ('CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida') },
        { letter: 'e', answer: 'ectoplasma', status: 0, question: ('CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación') },
        { letter: 'f', answer: 'fácil', status: 0, question: ('CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad') },
        { letter: 'g', answer: 'galaxia', status: 0, question: ('CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas') },
        { letter: 'h', answer: 'harakiri', status: 0, question: ('CON LA H. Suicidio ritual japonés por desentrañamiento') },
        { letter: 'i', answer: 'iglesia', status: 0, question: ('CON LA I. Templo cristiano') },
        { letter: 'j', answer: 'jabalí', status: 0, question: ('CON LA J. Variedad salvaje del cerdo que sale en la película \'El Rey León\', de nombre Pumba') },
        { letter: 'k', answer: 'kamikaze', status: 0, question: ('CON LA K. Persona que se juega la vida realizando una acción temeraria') },
        { letter: 'l', answer: 'licántropo', status: 0, question: ('CON LA L. Hombre lobo') },
        { letter: 'm', answer: 'misántropo', status: 0, question: ('CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas') },
        { letter: 'n', answer: 'necedad', status: 0, question: ('CON LA N. Demostración de poca inteligencia') },
        { letter: 'ñ', answer: 'señal', status: 0, question: ('CONTIENE LA Ñ. Indicio que permite deducir algo de lo que no se tiene un conocimiento directo.') },
        { letter: 'o', answer: 'ornitorinco', status: 0, question: ('CON LA O. Mamífero que pone huevos, con pico de pato, cola de castor y patas de nutria') },
        { letter: 'p', answer: 'protoss', status: 0, question: ('CON LA P. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft') },
        { letter: 'q', answer: 'queso', status: 0, question: ('CON LA Q. Producto obtenido por la maduración de la cuajada de la leche') },
        { letter: 'r', answer: 'ratón', status: 0, question: ('CON LA R. Roedor') },
        { letter: 's', answer: 'stackoverflow', status: 0, question: ('CON LA S. Comunidad salvadora de todo desarrollador informático') },
        { letter: 't', answer: 'terminator', status: 0, question: ('CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984') },
        { letter: 'u', answer: 'unamuno', status: 0, question: ('CON LA U. Escritor y filósofo español de la generación del 98 autor del libro \'Niebla\' en 1914') },
        { letter: 'v', answer: 'vikingos', status: 0, question: ('CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa') },
        { letter: 'w', answer: 'sandwich', status: 0, question: ('CONTIENE LA W. Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso') },
        { letter: 'x', answer: 'bótox', status: 0, question: ('CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética') },
        { letter: 'y', answer: 'peyote', status: 0, question: ('CONTIENE LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal por indígenas americanos') },
        { letter: 'z', answer: 'zen', status: 0, question: ('CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional') },
    ];
    //initialize counter
    stop(); 
    $('timeCounter').innerHTML = 150;
    $('pointsCounter').innerHTML = 0;
    value = 0;
    timerInterval = setInterval(changeValue, 1000);  
    
    //start questions
    letterIndex = 0, nextWord = []; wordsLeft = 0; counter = 0; hit = 0;
    console.time('answer time');
    name = $('inputName').value;
    $('instructions').style.visibility = 'hidden'; 
    $('result').innerHTML = 'EMPEZAMOS! 💪';
    presentQuestion();
};

function presentQuestion() {
    if (questions[letterIndex].status === 0){
        $('questions').innerHTML = questions[letterIndex].question;
        $(questions[letterIndex].letter).style.border = ' white solid 4px';
        controlKey();
    } else if (counter < questions.length -1){
        letterIndex++;
        counter++;
        presentQuestion();
    } else {
        startAgain();
    };
};

function testResponse() {
    var word = $('response').value;
    $('response').value='';
    word = word.toLowerCase().trim();
    if (word === questions[letterIndex].answer){
        questions[letterIndex].status = 1;
        $('result').innerHTML = 'CORRECTO! 🤩';
        $(questions[letterIndex].letter).style.background = 'radial-gradient(rgb(63, 247, 87),rgb(34, 116, 45)';
        $(questions[letterIndex].letter).style.border = 'white solid 1px';
        hit++;
        $('pointsCounter').innerHTML = hit;
    } else if (word === 'pasapalabra'){
        questions[letterIndex].status = 0;
        $('result').innerHTML = 'PASAPALABRA! 🤔';
        $(questions[letterIndex].letter).style.border = 'white solid 1px';
    } else {
        questions[letterIndex].status = 2;
        $('result').innerHTML = 'INCORRECTO! 😣';
        $(questions[letterIndex].letter).style.background = 'radial-gradient(rgb(136, 50, 50), rgb(255, 0, 0))';
        $(questions[letterIndex].letter).style.border = 'white solid 1px';
    };

    if (counter < 26) {
        letterIndex++;
        counter++;
        presentQuestion();
    } else {
        startAgain();
    };
};

function checkResults(questions) {
    var nextWord = questions.filter(function(item){
        return item.status === 0;
    });

    var hits = questions.filter(function(item){
        return item.status === 1;
    });

    var error = questions.filter(function(item){
        return item.status === 2;
    });

    return [nextWord, hits, error];
};

function startAgain(){
    [nextWord, hits, error] = checkResults(questions);
    if (nextWord.length === 0 && hits.length === 27){
        $('questions').innerHTML = 'ENHORABUENA!!! TE LLEVAS EL BOTE!! 🎊 ';
        // time counter
        clearInterval(timerInterval);
        OrderRanking();
    } else if (nextWord.length === 0 ){
        $('questions').innerHTML = 'JUEGO FINALIZADO!! Has acertado ' + hits.length + ' palabras y has fallado ' + error.length + ' palabras.';
       // time counter
        clearInterval(timerInterval);
        OrderRanking();
    } else {
        $('questions').innerHTML = 'Empezamos de nuevo el rosco para las pasapalabras!';
        letterIndex = 0;
        counter = 0;
        presentQuestion();
    };
};

function OrderRanking() {
    // time counter
    clearInterval(timerInterval);
    clearLetter();
    var points = hits.length;
    users.push({userName: name, userPoints: points, userTime: (150-value)});
    users = orderUsers(users);
    presentUsers = '';
    for (var i = 0; i < users.length; i++){
        if (users[i].userPoints === 1 && users[i].userTime === 1) {
            presentUsers += '<li>'+ users[i].userName + ' tiene ' + users[i].userPoints + ' acierto y un tiempo restante de '+ users[i].userTime + ' segundo. </li>';
        } else if (users[i].userTime === 1) {
            presentUsers += '<li>'+ users[i].userName + ' tiene ' + users[i].userPoints + ' aciertos y un tiempo restante de '+ users[i].userTime + ' segundo. </li>';
        } else if (users[i].userPoints === 1) {
            presentUsers += '<li>'+ users[i].userName + ' tiene ' + users[i].userPoints + ' acierto y un tiempo restante de '+ users[i].userTime + ' segundos. </li>';
        } else {
        presentUsers += '<li>'+ users[i].userName + ' tiene ' + users[i].userPoints + ' aciertos y un tiempo restante de '+ users[i].userTime + ' segundos. </li>';
        };
    };
};

function showRanking() {
    $('ranking').innerHTML = presentUsers;
    return users; 
};

function orderUsers(myArray) {
    myArray.sort(function(a,b) {
        var userA = a.userPoints;
        var userB = b.userPoints;
        return (userA < userB) ? 1 : (userB < userA) ? -1 : 0;
    });
    return myArray;
};

function endGame () {
    // time counter
    clearInterval(timerInterval);
    [nextWord, hits, error] = checkResults(questions);
    $('questions').innerHTML  = 'Has acertado ' + hits.length + ' palabras. Nos vemos pronto!';
    OrderRanking();
    clearLetter();
    return questions;
};

function  timeExpired () {
    // time counter
    clearInterval(timerInterval);
    [nextWord, hits, error] = checkResults(questions);
    $('questions').innerHTML  = 'Lo siento, se acabó tu tiempo!!';
    OrderRanking();
    clearLetter();
    return questions;
}

function newText() {
    $('ajugar').innerHTML= '¡Suerte! 🦄';
};

function oldText() {
    $('ajugar').innerHTML= '¡A jugar!';
};

function showInstru() {
    $('instructions').style.visibility = 'visible'; 
    $('inputName').value = '';
    $('result').innerHTML = '';
    $('result').innerHTML = '';
    $('questions').innerHTML = '';
    $('ranking').innerHTML = '';
    $('timeCounter').innerHTML = 150;
    $('pointsCounter').innerHTML = 0;
};

function clearLetter() {
    for(var i = 0; i < questions.length; i++){
        $(questions[i].letter).style.background = 'radial-gradient( rgb(43, 127, 206), rgb(2, 31, 59))';
        $(questions[letterIndex].letter).style.border = 'white solid 1px';
    };
};



