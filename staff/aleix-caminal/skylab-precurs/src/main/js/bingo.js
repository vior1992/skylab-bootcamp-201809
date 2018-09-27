var ROWS = 3,  COLS = 5;
var bingo_form = document.querySelector('#bingo_form');
var bingo_ball = document.querySelector('#bingo_ball');
var bingo_card = document.querySelector('#bingo_card');
var bingo_turn = document.querySelector('#bingo_turn');
var card_confirm = document.querySelector('#card_confirm');
var ball_confirm = document.querySelector('#ball_confirm');
var bingo_shoutout = document.querySelector('#bingo_shoutout');
var bingo_score = document.querySelector('#bingo_score');
var bingo_scoreboard = document.querySelector('#bingo_scoreboard');
var bingo_confirm = document.querySelector('#bingo_confirm');
var username, score, scoreboard, ball_turn, line_turn, game_turn, card_nums = [], ball_nums = [];

function checkRow(row) {
    var n = COLS;
    for (var i = 0; i < COLS; i++) {
        if (card_nums[row * COLS + i] === null) n--;
    }
    return !n;
}

function checkBingo() {
    var n = ROWS;
    for (var i = 0; i < ROWS; i++) {
        if (checkRow(i)) n--;
    }
    return !n;
}

function checkBall(ball) {
    bingo_shoutout.innerHTML = '';
    if((pos = card_nums.indexOf(ball)) != -1) {
        card_nums[pos] = null;
        var cell = bingo_card.querySelector('#cell'+pos);
        cell.innerHTML = 'X';
        score += Math.ceil(15 / ball_turn);
        ball_turn = 0;
        if (checkBingo()) {
            bingo_shoutout.innerHTML = 'BINGO!'
            score += Math.ceil(50000 / game_turn);
            endGame();
        } else if (checkRow(Math.floor(pos / COLS))) {
            bingo_shoutout.innerHTML = 'LINIA!'
            score += Math.ceil(5000 / line_turn);
            line_turn = 0;
        }
    }

    bingo_turn.innerHTML = 'Turn: ' + game_turn + ' | Puntuació ' + score;
}

function newTurn() {
    ball_turn++;
    line_turn++;
    game_turn++;
    bingo_ball.innerHTML = '';
    var num = rng(1, 99, ball_nums);
    var ball = document.createElement('div');
    ball.className = 'ball';
    ball.innerHTML = num;
    bingo_ball.appendChild(ball);
    ball_nums.push(num);
    checkBall(num);
}

function newCard() {
    bingo_card.innerHTML = '';
    var table = document.createElement('table');
    var thead = document.createElement('thead');
    var tr = document.createElement('tr');
    var th = document.createElement('th');
    th.colSpan = COLS;
    th.innerHTML = 'Bingo';
    tr.appendChild(th);
    thead.appendChild(tr);

    var tbody = document.createElement('tbody');
    for (var i = 0; i < ROWS; i++) {
        var tr = document.createElement('tr');
        for (var j = 0; j < COLS; j++) {
            var pos = i * COLS + j;
            card_nums[pos] = rng(1, 99, card_nums);
            var td = document.createElement('td');
            var span = document.createElement('span');
            span.id = 'cell' + pos;
            span.innerHTML = card_nums[pos];
            td.appendChild(span);
            tr.appendChild(td);
        }
        tbody.appendChild(tr);
    }

    table.appendChild(thead);
    table.appendChild(tbody);
    bingo_card.appendChild(table);
}

function newGame() {
    score = 0;
    ball_turn = 0;
    line_turn = 0;
    game_turn = 0;
    ball_nums = [];
    bingo_ball.innerHTML = '';
    bingo_turn.innerHTML = '';
    bingo_shoutout.innerHTML = '';
    card_confirm.classList.remove('d-none');
    ball_confirm.classList.add('d-none');
    newCard();
}

function startGame() {
    card_confirm.classList.add('d-none');
    ball_confirm.classList.remove('d-none');
    newTurn();
}

function endGame() {
    bingo_scoreboard.innerHTML = '<h4>Classificació d\'usuaris:</h4>';
    if (scoreboard == null) scoreboard = [];
    scoreboard.push({username:username, score:score});
    changeTab(2, 3, function() {
        bingo_score.innerHTML = 'Puntuació: ' + score;
        var ul = document.createElement('ul');
        for (var i in scoreboard) {
            var li = document.createElement('li');
            li.innerHTML = scoreboard[i].username + ': ' + scoreboard[i].score;
            ul.appendChild(li);
        }
        bingo_scoreboard.appendChild(ul);
    });
}

bingo_form.addEventListener('submit', function(event) {
    event.preventDefault();
    if (validate(bingo_form, ['username'])) {
        username = bingo_form.querySelector('input[name="username"]').value;
        changeTab(1, 2, function() {
            newGame();
        });
    }
});
