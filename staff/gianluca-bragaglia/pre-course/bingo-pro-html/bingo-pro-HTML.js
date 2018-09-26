// BINGO PRO


var arrPlayers = [];
var playerName;
var status;

function bingo() {

    var playerPoints = 100;
    var card = [];
    var arrRandomNum = [];
    var countA;
    var countB;
    var countC;
    addNumberCard();
    var card15 = [];
    var card510 = [];
    var card1015 = [];
    var startBlock = document.getElementById("startBlock");
    startBlock.style.display = "inline-block";
    var matchN = document.getElementById('matchN');
    matchN.style.display = "none";
    var pointsN = document.getElementById('points');
    pointsN.style.display = "none";
    var buttonsN = document.getElementById('buttons');
    buttonsN.style.display = "none";
    var cardCont = document.getElementById('cardCont');
    cardCont.style.display = "none";
    card15 = card.slice(0, 5);
    card510 = card.slice(5, 10);
    card1015 = card.slice(10);
    var card15N = document.getElementById("card15");
    var card510N = document.getElementById("card510");
    var card1015N = document.getElementById("card1015");
    var rankingCont = document.getElementById("rankingCont");
    rankingCont.style.display = "none";
    var btnNewGame = document.getElementById("btnNewGame");
    btnNewGame.style.display = "none";
    var btnEndGame = document.getElementById("btnEndGame");
    var btnStart = document.getElementById("btnStart");



    btnStart.onclick = function() {

        playerName = document.getElementById('playerName').value;
        startBlock.style.display = "none";
        card15N.innerHTML = card15.join("&nbsp;&nbsp;&nbsp;");
        card510N.innerHTML = card510.join("&nbsp;&nbsp;&nbsp;");
        card1015N.innerHTML = card1015.join("&nbsp;&nbsp;&nbsp;");
        pointsN.style.display = "inline-block";
        buttonsN.style.display = "inline-block";
        card15N.style.display = "inline-block";
        card1015N.style.display = "inline-block";
        card1015N.style.display = "inline-block";
        randDiv.style.display = "inline-block";
        newTurn();

    }

    btnNewN.onclick = function() {
        newTurn();
    }

    btnNewGame.onclick = function() {
        document.getElementById('ranking').innerHTML = '';
        document.getElementById('playerName').value = ' ';
        bingo();
    }

    btnEndGame.onclick = function() {
        buttonsN.style.display = "none";
        randDiv.style.display = "none";
        cardCont.style.display = "none";
        pointsN.style.display = "none";
        matchN.style.display = "none";
        status = 'loose';
        playerPoints = 0;
        arrPlayers.push({ name: playerName, puntos: playerPoints, status: status });
        results();
    }


    function addNumberCard() {

        var trackingArr = [];
        var targetCount = 15;
        var currentCount = 0;
        var min = 1;
        var max = 90;
        var rnd;

        while (currentCount < targetCount) {
            rnd = Math.floor(Math.random() * (max - min + 1)) + min;
            if (!trackingArr[rnd]) {
                trackingArr[rnd] = rnd;
                card[currentCount] = rnd;
                currentCount += 1;
            }
        }

        return card; // Will contain 15 unique, random numbers between 1 and 90.

    }



    function generateArrRandom() {

        var trackingArr = [];
        var targetCount = 90;
        var currentCount = 0;
        var min = 1;
        var max = 90;
        var rnd;

        while (currentCount < targetCount) {
            rnd = Math.floor(Math.random() * (max - min + 1)) + min;
            if (!trackingArr[rnd]) {
                trackingArr[rnd] = rnd;
                arrRandomNum[currentCount] = rnd;
                currentCount += 1;
            }
        }

        return arrRandomNum // Will contain 90 unique, random numbers between 1 and 90.


    }
    generateArrRandom();



    function generateRandomNum() {

        var numRandom = arrRandomNum[arrRandomNum.length - 1];
        var r = arrRandomNum.length;
        return numRandom;

    }




    function newTurn() {

        var rand = generateRandomNum();
        var line = ['X', 'X', 'X', 'X', 'X'];
        playerPoints--;

        matchN.style.display = "none";
        cardCont.style.display = "inline-block";
        document.getElementById('rand').innerHTML = rand;
        pointsN.innerHTML = (playerName + ' Your points are: ' + playerPoints);


        function newNumber() {

            rand = generateRandomNum();
            playerPoints--;

        }



        btnNewN.click = function() {

            arrRandomNum.pop();
            newNumber();

        }



        for (var i = 0; i < 5; i++) {

            if (card15[i] === rand) {

                card15.splice(i, 1, 'X');
                card15N.innerHTML = card15.join("&nbsp;&nbsp;&nbsp;");
                matchN.style.display = "inline-block";
                matchN.innerHTML = ('Good!! Match number: ' + rand);

            }
        }

        for (var i = 0; i < 5; i++) {

            if (card510[i] === rand) {

                card510.splice(i, 1, 'X');
                card510N.innerHTML = card510.join("&nbsp;&nbsp;&nbsp;");
                matchN.style.display = "inline-block";
                matchN.innerHTML = ('Good!! Match number: ' + rand);
            }
        }

        for (var i = 0; i < 5; i++) {

            if (card1015[i] === rand) {

                card1015.splice(i, 1, 'X');
                card1015N.innerHTML = card1015.join("&nbsp;&nbsp;&nbsp;");
                matchN.style.display = "inline-block";
                matchN.innerHTML = ('Good!! Match number: ' + rand);

            }
        }


        arrRandomNum.pop();

        function areArrsMatch(arr1, arr2) {
            return arr1.sort().toString() === arr2.sort().toString()
        }

        if (areArrsMatch(line, card15) && countA !== 0) {
            countA = 0;
            if (countB === 0 && countC === 0) {

                matchN.innerHTML = 'BINGO!!!';
                status = 'win';
                pointsN.innerHTML = (playerName + ' Your points are: ' + playerPoints);
                buttonsN.style.display = "none";
                randDiv.style.display = "none";
                cardCont.style.display = "none";
                pointsN.style.display = "none";
                arrPlayers.push({ name: playerName, points: playerPoints, status: status });
                results();
            } else {
                matchN.innerHTML = 'LINEA!!!';
            }


        } else if (areArrsMatch(line, card510) && countB !== 0) {
            countB = 0;
            if (countA === 0 && countC === 0) {

                matchN.innerHTML = 'BINGO!!!';
                status = 'win';
                buttonsN.style.display = "none";
                randDiv.style.display = "none";
                cardCont.style.display = "none";
                pointsN.style.display = "none";
                arrPlayers.push({ name: playerName, points: playerPoints, status: status });
                results();
            } else {
                matchN.innerHTML = 'LINEA!!!';
            }

        } else if (areArrsMatch(line, card1015) && countC !== 0) {

            countC = 0;
            if (countB === 0 && countA === 0) {

                matchN.innerHTML = 'BINGO!!!';
                status = 'win';
                pointsN.innerHTML = (playerName + ' Your points are: ' + playerPoints);
                buttonsN.style.display = "none";
                randDiv.style.display = "none";
                cardCont.style.display = "none";
                pointsN.style.display = "none";
                arrPlayers.push({ name: playerName, points: playerPoints, status: status });
                results();
            } else {
                matchN.innerHTML = 'LINEA!!!';
            }

        }
    }

}
bingo();

function sort_by(field, reverse, primer) { //sort array object by

    var key = primer ?
        function(x) { return primer(x[field]) } :
        function(x) { return x[field] };

    reverse = !reverse ? 1 : -1;

    return function(a, b) {
        return a = key(a), b = key(b), reverse * ((a < b) - (b < a));
    }
}

function results() {

    var revArrPlayersSort;


    resultSort();

    function resultSort() {

        var arrPlayersSort = arrPlayers.sort(sort_by('puntos', true, parseInt)); // Sort by price high to low
        revArrPlayersSort = arrPlayersSort.reverse();
        rankingCont.style.display = "inline-block";
        btnNewGame.style.display = "inline-block";
        result2();
    }


    function result2() {
        draw();
    }



    function draw() {

        revArrPlayersSort.forEach(function(obj) {

            if (obj.status === 'win') {
                document.getElementById('ranking').innerHTML += '<tr><td>' + obj.name + '</td><td>' + obj.points + '</td></tr>';

            } else if (obj.status === 'loose') {

                document.getElementById('ranking').innerHTML += '<tr><td>' + obj.name + '</td><td>' + '0' + '</td></tr>';


            }

        })
    }

}