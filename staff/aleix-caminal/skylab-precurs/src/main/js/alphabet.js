var alphabet_form = document.querySelector('#alphabet_form');
var alphabet_circle = document.querySelector('#alphabet_circle');
var alphabet_timer = document.querySelector('#alphabet_timer');
var alphabet_hits = document.querySelector('#alphabet_hits');
var alphabet_question = document.querySelector('#alphabet_question label');
var alphabet_answer = document.querySelector('#alphabet_question input');
var alphabet_results = document.querySelector('#alphabet_results');
var alphabet_scoreboard = document.querySelector('#alphabet_scoreboard');
var countdown, username, scoreboard, time = 180, current = 0, hits = 0, fails = 0, questionary = [];
var alphabet = [
    {id: 0, letter: 'a', type: 0, question: 'Subespecies of the Andorians, known for their telephatic habilities', answer: 'aenar'},
    {id: 1, letter: 'b', type: 0, question: 'Neutral planet used as a venue for conferences by the Federation', answer: 'babel'},
    {id: 2, letter: 'c', type: 0, question: 'Starship class of the USS Enterprise (NCC-1701)', answer: 'constitution'},
    {id: 3, letter: 'd', type: 0, question: 'First Federation starship equiped with a fully operational spore drive', answer: 'discovery'},
    {id: 4, letter: 'e', type: 1, question: 'Species that forms the slave labor caste of the Romulan people', answer: 'remans'},
    {id: 5, letter: 'f', type: 1, question: 'City where the Federation was founded and home of the Starfleet Headquarters', answer: 'san francisco'},
    {id: 6, letter: 'g', type: 0, question: 'Name of the energy field that surrounds the rim of the Milky Way', answer: 'galactic barrier'},
    {id: 7, letter: 'h', type: 0, question: 'Intelligent, bilaterally symmetrical and bipedal lifeform, generally mammalian', answer: 'humanoid'},
    {id: 8, letter: 'i', type: 1, question: 'Inhabited tropical Federation planet designated as a "pleasure planet"', answer: 'risa'},
    {id: 9, letter: 'j', type: 0, question: 'Name of the human captain considered the "greatest explorer of the 22nd century"', answer: 'jonathan'},
    {id: 10, letter: 'k', type: 0, question: 'Native species from Andromeda founded by the USS Enterprise in the 23th century', answer: 'kelvans'},
    {id: 11, letter: 'l', type: 1, question: 'The Federation was founded by the Andorians, Vulcans, Humans and...', answer: 'tellarites'},
    {id: 12, letter: 'm', type: 0, question: 'Inhabited planetoid, home of the Federation central library', answer: 'memory alpha'},
    {id: 13, letter: 'n', type: 1, question: 'Homeworld of the Klingon species', answer: 'kronos'},
    {id: 14, letter: 'o', type: 0, question: 'Green-skinned species where the males are slaves to the females.', answer: 'orions'},
    {id: 15, letter: 'p', type: 0, question: 'Capital city of the United Federation of Planets', answer: 'paris'},
    {id: 16, letter: 'q', type: 0, question: 'Major region of space encompassing a portion of a galaxy', answer: 'quadrant'},
    {id: 17, letter: 'r', type: 0, question: 'Militaristic and xenophibic species descendents from the Vulcans', answer: 'romulans'},
    {id: 18, letter: 's', type: 0, question: 'Legendary philosopher of the vulcan Time of Awakening', answer: 'surak'},
    {id: 19, letter: 't', type: 0, question: 'Government dominated by the humans in the mirror universe', answer: 'terran empire'},
    {id: 20, letter: 'u', type: 1, question: 'Color of the skin of the Andorians', answer: 'blue'},
    {id: 21, letter: 'v', type: 1, question: 'Prime planet of the Confederacy of Surak in the alternate reality', answer: 'new vulcan'},
    {id: 22, letter: 'w', type: 0, question: 'Name of the disputed planet between the Andorians and the Vulcans in mid-22th century', answer: 'weytahn'},
    {id: 23, letter: 'x', type: 0, question: 'Species of the Delphic Expansion who tried to destroy human civilization', answer: 'xindi'},
    {id: 24, letter: 'y', type: 0, question: 'Orbital research station and National Park on Earth', answer: 'yosemite'},
    {id: 25, letter: 'z', type: 0, question: 'Name of the inventor of warp drive on Earth', answer: 'zefram'},
    {id: 26, letter: 't', type: 0, question: 'Device capable of almost instantaneously moving an object from one location to another', answer: 'transporter'},
    {id: 27, letter: 'b', type: 1, question: 'Lunar city whose name is given by a German city', answer: 'new berlin'},
    {id: 28, letter: 'c', type: 0, question: 'Sister starship of the Enterprise (NX-01)', answer: 'columbia'},
];

function startGame() {
    alphabet_circle.innerHTML = '';
    let letters = [];
    for (var i in alphabet) {
        if (letters.indexOf(alphabet[i].letter) < 0) {
            letters.push(alphabet[i].letter);
        }
    }

    let buffer, selected;
    for (var i = 0; i < letters.length; i++) {
        var span = document.createElement('span');
        span.id = 'letter' + i;
        span.className = 'letter';
        span.innerHTML = letters[i];
        alphabet_circle.appendChild(span);

        buffer = [];
        for (var j in alphabet) {
            if (alphabet[j].letter === letters[i]) {
                buffer.push(alphabet[j]);
            }
        }

        selected = buffer[Math.floor(Math.random() * buffer.length)];
        questionary.push({
            type: selected.type,
            letter: selected.letter,
            question: selected.question,
            answer: selected.answer,
            status: 0
        });
    }

    arrangeCircle(alphabet_circle);
    printInfo();
    beginCountdown();
}

function beginCountdown() {
    alphabet_timer.innerHTML = time;
    countdown = setInterval(function() {
        alphabet_timer.innerHTML = --time;
        if (time === 0) {
            endGame();
        }
    }, 1000);
}

function nextLetter() {
    for (var i = current + 1; i < questionary.length; i++) {
        if (questionary[i].status === 0) {
            return current = i;
        }
    }

    for (var i = 0; i < current + 1; i++) {
        if (questionary[i].status === 0) {
            return current = i;
        }
    }
}

function printInfo() {
    let type = (questionary[current].type ? 'Contains an ' : 'With an ') + questionary[current].letter + ': ';
    alphabet_question.innerHTML = type + questionary[current].question;
    alphabet_circle.querySelector('#letter' + current).classList.add('active');
    alphabet_hits.innerHTML = hits;
}

function endGame(ranked = true) {
    clearInterval(countdown);
    sleep(5000);
    alphabet_scoreboard.innerHTML = '<h4>User ranking:</h4>';
    if (scoreboard == null) scoreboard = [];
    if (ranked) scoreboard.push({username:username, hits:hits, fails:fails});
    changeTab(2, 3, function() {
        document.querySelector('#alphabet').classList.remove('in-game');
        var h1 = document.createElement('h1');
        h1.innerHTML = 'Answered: ' + hits + ' ';
        var small = document.createElement('small');
        small.innerHTML = 'Failed: ' + fails;
        h1.appendChild(small);
        alphabet_results.appendChild(h1);
        var ul = document.createElement('ul');
        for (var i in scoreboard) {
            var li = document.createElement('li');
            li.innerHTML = scoreboard[i].username + ': ' + scoreboard[i].hits + ' hits, ' + scoreboard[i].fails + ' fails';
            ul.appendChild(li);
        }
        alphabet_scoreboard.appendChild(ul);
    });
}

alphabet_form.addEventListener("submit", function(event) {
    event.preventDefault();
    if (validate(alphabet_form, ['username'])) {
        username = alphabet_form.querySelector('input[name="username"]').value;
        changeTab(1, 2, function() {
            document.querySelector('#alphabet').classList.add('in-game');
            startGame();
        });
    }
});

alphabet_answer.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        alphabet_circle.querySelector('#letter' + current).classList.remove('active');
        switch (alphabet_answer.value.toLowerCase()) {
            case '':
            case 'pasapalabra':
                break;
            case 'end':
                endGame(false);
                break;
            case questionary[current].answer:
                alphabet_circle.querySelector('#letter' + current).classList.add('hit');
                questionary[current].status = 1;
                hits++;
                break;
            default:
                alphabet_circle.querySelector('#letter' + current).classList.add('fail');
                questionary[current].status = -1;
                fails++;
        }

        if (hits + fails === questionary.length) {
            endGame();
        } else {
            nextLetter();
            printInfo();
            alphabet_answer.value = '';
        }
    }
});

window.onresize = function(event) {
    arrangeCircle(alphabet_circle);
};
