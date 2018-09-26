$(document).on("ready", function () {
			
})

var userName = ''; 

function start() {
	userName = document.getElementById('name').value;
	hideIntro();
	displayGame();
	timer();
	newLetter();
}

function newLetter() {
	
	indexWord++;
	if (indexWord < 27 && doings + errors < 27) {
		
		if(questions[indexWord].status === 0) {
			highlightLetter();
			displayQuestion();
		}

		else {
			do {
				indexWord++;
			}
			while (questions[indexWord].status !== 0 && indexWord < 27);

			if (indexWord === 27) {
				indexWord = -1;
				newLetter();
			}
			else if (questions[indexWord].status === 0) {
				highlightLetter();
				displayQuestion();
			}

		}	
	}

	else if (indexWord === 27 && doings + errors < 27) {
		indexWord = -1;
		newLetter();
	}

	else {
		endGame();
	}
}

function animation() {

	setTimeout(function(){ 
			document.getElementById('animation').innerHTML = 'YOU WIN';
			$("#animation").css("color", "#63cbd3");
			$("#animation").css("visibility", "visible");
		}, 500);

	setTimeout(function(){ 
			$("#animation").css("visibility", "hidden");
		}, 1000);

	setTimeout(function(){ 
			$("#animation").css("visibility", "visible");
		}, 1500);

	setTimeout(function(){ 
			$("#animation").css("visibility", "hidden");
		}, 2000);

	setTimeout(function(){ 
			$("#animation").css("visibility", "visible");
		}, 2500);

	setTimeout(function(){ 
			document.getElementById('animation').innerHTML = '';
			$("#animation").css("visibility", "hidden");
		}, 3000);

}

function passWord() {
	removeHighlightLetter();
	newLetter();
}

var x = 0;

function timer(){

	//Add something here to really stop the timer before calling it again
	
	var countdown = 130;
	x = window.setInterval(function() {

		if (countdown === 0) {
	    clearInterval(x);
	    endGame();
		}

		document.getElementById('timer').innerHTML = countdown;
		countdown--;

	}, 1000);
}

function displayGame() {

	$("#pregunta").css("visibility", "visible");
	$("#question").css("visibility", "visible");
	$("#answer").css("visibility", "visible");
	$("#correctIncorrect").css("visibility", "visible");
	$("#infoAnswer").css("visibility", "visible");
	
	$("#checkWord").css("visibility", "visible");
	$("#passWord").css("visibility", "visible");
	$("#endGame").css("visibility", "visible");

	$("#timer").css("visibility", "visible");
	$("#doings").css("visibility", "visible");
	
	$(".donut").css("visibility", "visible");
	$(".letterRounded").css("visibility", "visible");
}

function hideIntro() {
	
	$("#infoAnswer").css("visibility", "hidden");
	$("#textIntro").css("visibility", "hidden");
	$("#comenzar").css("visibility", "hidden");
	$("#demo").css("visibility", "hidden");
	$("#name").css("visibility", "hidden");

}

function hideResultsRanking() {

	$("#displayResults").css("visibility", "hidden");
	$("#tableResults").css("visibility", "hidden");
	$("#restart").css("visibility", "hidden");
	$("#end").css("visibility", "hidden");
}

function displayDoings() {

	document.getElementById('doings').innerHTML = doings;
}

function displayQuestion () {
	
	document.getElementById('question').innerHTML = questions[indexWord].question;
}

function showResults() {
	
	$("#displayResults").css("visibility", "visible");
	var resultString = 'Has conseguido ' + doings + ' acierto/s y ' + errors + ' fallo/s.';
	document.getElementById('displayResults').innerHTML = resultString;
}

function showRanking() {
	document.getElementById('firstName').innerHTML = ranking[0].jugador;
  	document.getElementById('firstDoings').innerHTML = ranking[0].aciertos;
  	document.getElementById('secondName').innerHTML = ranking[1].jugador;
  	document.getElementById('secondDoings').innerHTML = ranking[1].aciertos;
  	document.getElementById('thirdName').innerHTML = ranking[2].jugador;
  	document.getElementById('thirdDoings').innerHTML = ranking[2].aciertos;
  	document.getElementById('forthName').innerHTML = ranking[3].jugador;
  	document.getElementById('forthDoings').innerHTML = ranking[3].aciertos;
  	document.getElementById('fithName').innerHTML = ranking[4].jugador;
  	document.getElementById('fithDoings').innerHTML = ranking[4].aciertos;
  
  	$("#tableResults").css("visibility", "visible");
}


function showButtons() {
	$("#restart").css("visibility", "visible");
	$("#end").css("visibility", "visible");
}

function hideGame() {
	$("#question").css("visibility", "hidden");
	$("#inforAnswer").css("visibility", "hidden");
	$("#answer").css("visibility", "hidden");
	$("#timer").css("visibility", "hidden");
	$("#doings").css("visibility", "hidden");
	$(".donut").css("visibility", "hidden");
	$(".letterRounded").css("visibility", "hidden");
	$(".infoGame").css("visibility", "hidden");
	$("#pregunta").css("visibility", "hidden");
	$("#checkWord").css("visibility", "hidden");
	$("#passWord").css("visibility", "hidden");
	$("#endGame").css("visibility", "hidden");
	$("#correctIncorrect").css("visibility", "hidden");
	$("#infoAnswer").css("visibility", "hidden");
	$("#textIntro").css("visibility", "hidden");

}

function endGame() {
	clearInterval(x);
	hideGame();
	showResults();
	checkRanking();
	showRanking();
	showButtons();
	if ( doings === 27) {
		animation();
	}
}

function exitProgram() {

	clearInterval(x);
	document.body.innerHTML = "";
}
	
function checkRanking() {
	var added = false;
  	
  	for (var indexRanking = 0; indexRanking < ranking.length; indexRanking++) {
   
    	if (doings === ranking[indexRanking].aciertos && !added) {
			var addUser = { ranking: indexRanking+1, jugador: userName, aciertos: doings, fallos: errors};
      		added = true;
      		ranking.splice(indexRanking+1, 0, addUser);
    	}
    	else if (doings > ranking[indexRanking].aciertos && !added) {
     		addUser = { ranking: indexRanking+1, jugador: userName, aciertos: doings, fallos: errors};
     		ranking.splice(indexRanking, 0, addUser);
      		added = true;
      
      		for (indexChangeRanking = indexRanking+1; indexChangeRanking < ranking.length; indexChangeRanking++) {
          		ranking[indexChangeRanking].ranking = indexChangeRanking+1;
      		}
    	}
  	}

  	if (!added) { 
    	addUser = { ranking: indexRanking+1, jugador: userName, aciertos: doings, fallos: errors};
    	ranking.push(addUser); 
  	}
}


function reset() {

	indexWord = -1;
	doings = 0;
	errors = 0;
	displayDoings();
	
	for (var index = 0; index < 27; index++) {
		
		questions[index].status = 0;

		switch (index) {
			case 0: 
				$('#a').css('color','#666');
				$('#a').css('background-color','#d8d8d8');
			break;
			case 1: 
				$('#b').css('color','#666');
				$('#b').css('background-color','#d8d8d8');
			break;
			case 2: 
				$('#c').css('color','#666');
				$('#c').css('background-color','#d8d8d8');
			break;
			case 3: 
				$('#d').css('color','#666');
				$('#d').css('background-color','#d8d8d8');
			break;
			case 4: 
				$('#e').css('color','#666');
				$('#e').css('background-color','#d8d8d8');
			break;
			case 5: 
				$('#f').css('color','#666');
				$('#f').css('background-color','#d8d8d8');
			break;
			case 6:
				$('#g').css('color','#666');
				$('#g').css('background-color','#d8d8d8');
			break;
			case 7: 
				$('#h').css('color','#666');
				$('#h').css('background-color','#d8d8d8');
			break;
			case 8:
				$('#i').css('color','#666');
				$('#i').css('background-color','#d8d8d8');
			break;
			case 9:
				$('#j').css('color','#666');
				$('#j').css('background-color','#d8d8d8');
			break;
			case 10:
				$('#k').css('color','#666');
				$('#k').css('background-color','#d8d8d8');
			break;
			case 11:
				$('#l').css('color','#666');
				$('#l').css('background-color','#d8d8d8');
			break;
			case 12:
				$('#m').css('color','#666');
				$('#m').css('background-color','#d8d8d8');
			break;
			case 13:
				$('#n').css('color','#666');
				$('#n').css('background-color','#d8d8d8');
			break;
			case 14:
				$('#ñ').css('color','#666');
				$('#ñ').css('background-color','#d8d8d8');
			break;
			case 15:
				$('#o').css('color','#666');
				$('#o').css('background-color','#d8d8d8');
			break;
			case 16:
				$('#p').css('color','#666');
				$('#p').css('background-color','#d8d8d8');
			break;
			case 17:
				$('#q').css('color','#666');
				$('#q').css('background-color','#d8d8d8');
			break;
			case 18:
				$('#r').css('color','#666');
				$('#r').css('background-color','#d8d8d8');
			break;
			case 19:
				$('#s').css('color','#666');
				$('#s').css('background-color','#d8d8d8');
			break;
			case 20:
				$('#t').css('color','#666');
				$('#t').css('background-color','#d8d8d8');
			break;
			case 21:
				$('#u').css('color','#666');
				$('#u').css('background-color','#d8d8d8');
			break;
			case 22:
				$('#v').css('color','#666');
				$('#v').css('background-color','#d8d8d8');
			break;
			case 23:
				$('#w').css('color','#666');
				$('#w').css('background-color','#d8d8d8');
			break;
			case 24:
				$('#x').css('color','#666');
				$('#x').css('background-color','#d8d8d8');
			break;
			case 25:
				$('#y').css('color','#666');
				$('#y').css('background-color','#d8d8d8');
			break;
			case 26:
				$('#z').css('color','#666');
				$('#z').css('background-color','#d8d8d8');
			break;
		}
	}
	hideResultsRanking();
	displayGame();
	timer();
	newLetter();
}

function highlightLetter() {
	
	switch (indexWord) {
		case 0: 
			$('#a').css('color','#d8d8d8');
			$('#a').css('background-color','#666');
		break;
		case 1: 
			$('#b').css('color','#d8d8d8');
			$('#b').css('background-color','#666');
		break;
		case 2: 
			$('#c').css('color','#d8d8d8');
			$('#c').css('background-color','#666');
		break;
		case 3: 
			$('#d').css('color','#d8d8d8');
			$('#d').css('background-color','#666');
		break;
		case 4: 
			$('#e').css('color','#d8d8d8');
			$('#e').css('background-color','#666');
		break;
		case 5: 
			$('#f').css('color','#d8d8d8');
			$('#f').css('background-color','#666');
		break;
		case 6:
			$('#g').css('color','#d8d8d8');
			$('#g').css('background-color','#666');
		break;
		case 7: 
			$('#h').css('color','#d8d8d8');
			$('#h').css('background-color','#666');
		break;
		case 8:
			$('#i').css('color','#d8d8d8');
			$('#i').css('background-color','#666');
		break;
		case 9:
			$('#j').css('color','#d8d8d8');
			$('#j').css('background-color','#666');
		break;
		case 10:
			$('#k').css('color','#d8d8d8');
			$('#k').css('background-color','#666');
		break;
		case 11:
			$('#l').css('color','#d8d8d8');
			$('#l').css('background-color','#666');
		break;
		case 12:
			$('#m').css('color','#d8d8d8');
			$('#m').css('background-color','#666');
		break;
		case 13:
			$('#n').css('color','#d8d8d8');
			$('#n').css('background-color','#666');
		break;
		case 14:
			$('#ñ').css('color','#d8d8d8');
			$('#ñ').css('background-color','#666');
		break;
		case 15:
			$('#o').css('color','#d8d8d8');
			$('#o').css('background-color','#666');
		break;
		case 16:
			$('#p').css('color','#d8d8d8');
			$('#p').css('background-color','#666');
		break;
		case 17:
			$('#q').css('color','#d8d8d8');
			$('#q').css('background-color','#666');
		break;
		case 18:
			$('#r').css('color','#d8d8d8');
			$('#r').css('background-color','#666');
		break;
		case 19:
			$('#s').css('color','#d8d8d8');
			$('#s').css('background-color','#666');
		break;
		case 20:
			$('#t').css('color','#d8d8d8');
			$('#t').css('background-color','#666');
		break;
		case 21:
			$('#u').css('color','#d8d8d8');
			$('#u').css('background-color','#666');
		break;
		case 22:
			$('#v').css('color','#d8d8d8');
			$('#v').css('background-color','#666');
		break;
		case 23:
			$('#w').css('color','#d8d8d8');
			$('#w').css('background-color','#666');
		break;
		case 24:
			$('#x').css('color','#d8d8d8');
			$('#x').css('background-color','#666');
		break;
		case 25:
			$('#y').css('color','#d8d8d8');
			$('#y').css('background-color','#666');
		break;
		case 26:
			$('#z').css('color','#d8d8d8');
			$('#z').css('background-color','#666');
		break;
	}
}

function removeHighlightLetter() {
	
	switch (indexWord) {
		case 0: 
			$('#a').css('color','#666');
			$('#a').css('background-color','#d8d8d8');
		break;
		case 1: 
			$('#b').css('color','#666');
			$('#b').css('background-color','#d8d8d8');
		break;
		case 2: 
			$('#c').css('color','#666');
			$('#c').css('background-color','#d8d8d8');
		break;
		case 3: 
			$('#d').css('color','#666');
			$('#d').css('background-color','#d8d8d8');
		break;
		case 4: 
			$('#e').css('color','#666');
			$('#e').css('background-color','#d8d8d8');
		break;
		case 5: 
			$('#f').css('color','#666');
			$('#f').css('background-color','#d8d8d8');
		break;
		case 6:
			$('#g').css('color','#666');
			$('#g').css('background-color','#d8d8d8');
		break;
		case 7: 
			$('#h').css('color','#666');
			$('#h').css('background-color','#d8d8d8');
		break;
		case 8:
			$('#i').css('color','#666');
			$('#i').css('background-color','#d8d8d8');
		break;
		case 9:
			$('#j').css('color','#666');
			$('#j').css('background-color','#d8d8d8');
		break;
		case 10:
			$('#k').css('color','#666');
			$('#k').css('background-color','#d8d8d8');
		break;
		case 11:
			$('#l').css('color','#666');
			$('#l').css('background-color','#d8d8d8');
		break;
		case 12:
			$('#m').css('color','#666');
			$('#m').css('background-color','#d8d8d8');
		break;
		case 13:
			$('#n').css('color','#666');
			$('#n').css('background-color','#d8d8d8');
		break;
		case 14:
			$('#ñ').css('color','#666');
			$('#ñ').css('background-color','#d8d8d8');
		break;
		case 15:
			$('#o').css('color','#666');
			$('#o').css('background-color','#d8d8d8');
		break;
		case 16:
			$('#p').css('color','#666');
			$('#p').css('background-color','#d8d8d8');
		break;
		case 17:
			$('#q').css('color','#666');
			$('#q').css('background-color','#d8d8d8');
		break;
		case 18:
			$('#r').css('color','#666');
			$('#r').css('background-color','#d8d8d8');
		break;
		case 19:
			$('#s').css('color','#666');
			$('#s').css('background-color','#d8d8d8');
		break;
		case 20:
			$('#t').css('color','#666');
			$('#t').css('background-color','#d8d8d8');
		break;
		case 21:
			$('#u').css('color','#666');
			$('#u').css('background-color','#d8d8d8');
		break;
		case 22:
			$('#v').css('color','#666');
			$('#v').css('background-color','#d8d8d8');
		break;
		case 23:
			$('#w').css('color','#666');
			$('#w').css('background-color','#d8d8d8');
		break;
		case 24:
			$('#x').css('color','#666');
			$('#x').css('background-color','#d8d8d8');
		break;
		case 25:
			$('#y').css('color','#666');
			$('#y').css('background-color','#d8d8d8');
		break;
		case 26:
			$('#z').css('color','#666');
			$('#z').css('background-color','#d8d8d8');
		break;
	}
}

function checkWord() {
	
	answer = document.getElementById('answer').value;
	answer = answer.toLowerCase();
	removeHighlightLetter();	
	
	if (answer === questions[indexWord].answer) {
		document.getElementById('correctIncorrect').innerHTML = '¡Correcto!';
		setTimeout(function(){ 
			document.getElementById('correctIncorrect').innerHTML = '';
		}, 2000);
		questions[indexWord].status = 1;
		doings++;
		displayDoings();
		
		switch (indexWord) {
		case 0: 
			$('#a').css('color','white');
			$('#a').css('background-color','green');
		break;
		case 1: 
			$('#b').css('color','white');
			$('#b').css('background-color','green');
		break;
		case 2: 
			$('#c').css('color','white');
			$('#c').css('background-color','green');
		break;
		case 3: 
			$('#d').css('color','white');
			$('#d').css('background-color','green');
		break;
		case 4: 
			$('#e').css('color','white');
			$('#e').css('background-color','green');
		break;
		case 5: 
			$('#f').css('color','white');
			$('#f').css('background-color','green');
		break;
		case 6:
			$('#g').css('color','white');
			$('#g').css('background-color','green');
		break;
		case 7: 
			$('#h').css('color','white');
			$('#h').css('background-color','green');
		break;
		case 8:
			$('#i').css('color','white');
			$('#i').css('background-color','green');
		break;
		case 9:
			$('#j').css('color','white');
			$('#j').css('background-color','green');
		break;
		case 10:
			$('#k').css('color','white');
			$('#k').css('background-color','green');
		break;
		case 11:
			$('#l').css('color','white');
			$('#l').css('background-color','green');
		break;
		case 12:
			$('#m').css('color','white');
			$('#m').css('background-color','green');
		break;
		case 13:
			$('#n').css('color','white');
			$('#n').css('background-color','green');
		break;
		case 14:
			$('#ñ').css('color','white');
			$('#ñ').css('background-color','green');
		break;
		case 15:
			$('#o').css('color','white');
			$('#o').css('background-color','green');
		break;
		case 16:
			$('#p').css('color','white');
			$('#p').css('background-color','green');
		break;
		case 17:
			$('#q').css('color','white');
			$('#q').css('background-color','green');
		break;
		case 18:
			$('#r').css('color','white');
			$('#r').css('background-color','green');
		break;
		case 19:
			$('#s').css('color','white');
			$('#s').css('background-color','green');
		break;
		case 20:
			$('#t').css('color','white');
			$('#t').css('background-color','green');
		break;
		case 21:
			$('#u').css('color','white');
			$('#u').css('background-color','green');
		break;
		case 22:
			$('#v').css('color','white');
			$('#v').css('background-color','green');
		break;
		case 23:
			$('#w').css('color','white');
			$('#w').css('background-color','green');
		break;
		case 24:
			$('#x').css('color','white');
			$('#x').css('background-color','green');
		break;
		case 25:
			$('#y').css('color','white');
			$('#y').css('background-color','green');
		break;
		case 26:
			$('#z').css('color','white');
			$('#z').css('background-color','green');
		break;
		}	

	}
	else {
		document.getElementById('correctIncorrect').innerHTML = '¡Incorrecto!';
		document.getElementById('infoAnswer').innerHTML = `La respuesta correcta es: ${questions[indexWord].answer}`;
		setTimeout(function(){ 
			document.getElementById('correctIncorrect').innerHTML = '';
			document.getElementById('infoAnswer').innerHTML = '';
		}, 2000);
		questions[indexWord].status = -1;
		errors++;
		
		switch (indexWord) {
		case 0: 
			$('#a').css('color','white');
			$('#a').css('background-color','red');
		break;
		case 1: 
			$('#b').css('color','white');
			$('#b').css('background-color','red');
		break;
		case 2: 
			$('#c').css('color','white');
			$('#c').css('background-color','red');
		break;
		case 3: 
			$('#d').css('color','white');
			$('#d').css('background-color','red');
		break;
		case 4: 
			$('#e').css('color','white');
			$('#e').css('background-color','red');
		break;
		case 5: 
			$('#f').css('color','white');
			$('#f').css('background-color','red');
		break;
		case 6:
			$('#g').css('color','white');
			$('#g').css('background-color','red');
		break;
		case 7: 
			$('#h').css('color','white');
			$('#h').css('background-color','red');
		break;
		case 8:
			$('#i').css('color','white');
			$('#i').css('background-color','red');
		break;
		case 9:
			$('#j').css('color','white');
			$('#j').css('background-color','red');
		break;
		case 10:
			$('#k').css('color','white');
			$('#k').css('background-color','red');
		break;
		case 11:
			$('#l').css('color','white');
			$('#l').css('background-color','red');
		break;
		case 12:
			$('#m').css('color','white');
			$('#m').css('background-color','red');
		break;
		case 13:
			$('#n').css('color','white');
			$('#n').css('background-color','red');
		break;
		case 14:
			$('#ñ').css('color','white');
			$('#ñ').css('background-color','red');
		break;
		case 15:
			$('#o').css('color','white');
			$('#o').css('background-color','red');
		break;
		case 16:
			$('#p').css('color','white');
			$('#p').css('background-color','red');
		break;
		case 17:
			$('#q').css('color','white');
			$('#q').css('background-color','red');
		break;
		case 18:
			$('#r').css('color','white');
			$('#r').css('background-color','red');
		break;
		case 19:
			$('#s').css('color','white');
			$('#s').css('background-color','red');
		break;
		case 20:
			$('#t').css('color','white');
			$('#t').css('background-color','red');
		break;
		case 21:
			$('#u').css('color','white');
			$('#u').css('background-color','red');
		break;
		case 22:
			$('#v').css('color','white');
			$('#v').css('background-color','red');
		break;
		case 23:
			$('#w').css('color','white');
			$('#w').css('background-color','red');
		break;
		case 24:
			$('#x').css('color','white');
			$('#x').css('background-color','red');
		break;
		case 25:
			$('#y').css('color','white');
			$('#y').css('background-color','red');
		break;
		case 26:
			$('#z').css('color','white');
			$('#z').css('background-color','red');
		break;
		}

	}

	newLetter();
	
}

var answer = '';
var indexWord = -1;

var doings = 0;
var errors = 0;
var questions = [
    { letter: "a", answer: "attribute", status: 0, question: ("STARTS WITH A.  Content added to the opening tag of an element that can be used in several different ways, from providing information to changing styling") },
    { letter: "b", answer: "br", status: 0, question: ("STARTS WITH B. Tag that inserts a single line break") },
    { letter: "c", answer: "css", status: 0, question: ("STARTS WITH C. Acronym for Cascading Style Sheets") },
    { letter: "d", answer: "doctype", status: 0, question: ("STARTS WITH D. Declaration that provides the browser with information regarding the type of document and the HTML version to expect") },
    { letter: "e", answer: "em", status: 0, question: ("STARTS WITH E. Tag that will generally render as italic emphasis") },
    { letter: "f", answer: "float", status: 0, question: ("STARTS WITH F. Property used to move an element as far left or as far right as possible on the page") },
    { letter: "g", answer: "grid", status: 0, question: ("STARTS WITH G. CSS layout most useful for two-dimensional layouts, providing many tools for aligning and moving elements across both rows and columns") },
    { letter: "h", answer: "heading", status: 0, question: ("STARTS WITH H. Element used for a variety of purposes, like titling sections, articles, or other forms of content") },
    { letter: "i", answer: "important", status: 0, question: ("STARTS WITH I. Flag that will override any style no matter how specific") },
    { letter: "j", answer: "javascript", status: 0, question: ("STARTS WITH J. Object-oriented computer programming language commonly used to create interactive effects within web browsers") },
    { letter: "k", answer: "link", status: 0, question: ("CONTAINS 'K'. Element to connect HTML and CSS files together") },
    { letter: "l", answer: "left", status: 0, question: ("STARTS WITH L. Default text-align property") },
    { letter: "m", answer: "margin", status: 0, question: ("STARTS WITH M. Specifies the amount of space between the border and the outside edge of the element") },
    { letter: "n", answer: "nested", status: 0, question: ("STARTS WITH N. Term used to refer to elements within other HTML elements") },
    { letter: "ñ", answer: "eñe", status: 0, question: ("CONTAINS 'Ñ'. The only letter never used in coding") },
    { letter: "o", answer: "overflow", status: 0, question: ("STARTS WITH O. Property that will dictates how HTML will render content that spill over its parent's content area") },
    { letter: "p", answer: "padding", status: 0, question: ("STARTS WITH P. Property used to expand the background color and make content look less cramped") },
    { letter: "q", answer: "jquery", status: 0, question: ("CONTAINS 'Q'. Concise and fast JavaScript library that can be used to simplify event handling, HTML document traversing, animatin and others") },
    { letter: "r", answer: "radius", status: 0, question: ("STARTS WITH R. Property used to modify the corners of an element's border box") },
    { letter: "s", answer: "span", status: 0, question: ("STARTS WITH S. Element used to target a specific piece of content that is inline, or on the same line as other text") },
    { letter: "t", answer: "tag", status: 0, question: ("STARTS WITH T. An HTML code that defines every structure on an HTML page, including the placement of text and images and hypertext links") },
    { letter: "u", answer: "ul", status: 0, question: ("STARTS WITH U. Tag used for unordered lists") },
    { letter: "v", answer: "div", status: 0, question: ("CONTAINS 'V'. Tag that defines a division or a section in an HTML document") },
    { letter: "w", answer: "browser", status: 0, question: ("CONTAINS 'W'. a computer program with a graphical user interface for displaying HTML files, used to navigate the World Wide Web") },
    { letter: "x", answer: "hypertext", status: 0, question: ("CONTAINS X. Text displayed on a computer or device that provides access to other text through links, also known as hyperlinks") },
    { letter: "y", answer: "body", status: 0, question: ("CONTAINS Y. Element that contains all the contents of an HTML document, such as text, hyperlinks, images, tables, lists, etc.") },
    { letter: "z", answer: "z-index", status: 0, question: ("STARTS WITH Z. Property that specifies how far back or how far forward an element appears on the page when it overlaps other elements") },
];

var ranking = [
	{ ranking: 1, jugador: "Ada", aciertos: 27, fallos: 0},
	{ ranking: 2, jugador: "Linus", aciertos: 25, fallos: 2},
	{ ranking: 3, jugador: "Richard", aciertos: 24, fallos: 3},
	{ ranking: 4, jugador: "Mark", aciertos: 23, fallos: 4},
	{ ranking: 5, jugador: "Bill", aciertos: 1, fallos: 26},
];
