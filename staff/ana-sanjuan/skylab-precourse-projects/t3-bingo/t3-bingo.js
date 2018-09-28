

function bingo(users){

	function generateRan(size, max){
		var randomNumbers = [];
		for(var i = 0;i < size ; i++){
		    var temp = Math.ceil(Math.random()*max);
		    if(randomNumbers.indexOf(temp) === -1){
		        randomNumbers.push(temp);
		    } else { 
		    	i--;
			}
		};
		return randomNumbers;
	};

	function matchFinder (randomNumber){
		
		var match = bingoCard.some(function(nums){
			return randomNumber === nums;
		});
		if (match){
			var index = bingoCard.indexOf(randomNumber);
			bingoCard[index] = 'X';
			alert('The new number is '+ randomNumber + '. You have a match! \n' + bingoCard);
		} else {
			alert('The new number is '+ randomNumber + '. No match this time \n' + bingoCard);
		};
		return bingoCard;
	};

	function newTurn (){
		var askplay = confirm('Would you like to play another number?');
		return askplay;
	};

	function playGame (){
	    var askTurn = confirm('Would you like to start to play?');
	    var counter = 0;
		
		while (askTurn === true){
			
			bingoCard = matchFinder(randomNumbers[counter]);
			counter ++;
			var line1 = bingoCard.slice(0, 5)
			var line2 = bingoCard.slice(6, 10)
			var line3 = bingoCard.slice(11, 15)


			var fullLine1 = line1.every(function(nums){
					return nums === 'X';
			});
			var fullLine2 = line2.every(function(nums){
					return nums === 'X';
			});
			var fullLine3 = line3.every(function(nums){
					return nums === 'X';
			});

			if(fullLine1) {
				alert('LINE!!! Yuhuu!');
				for (var i = 0; i < 5; i++){
					bingoCard[i] = 0;
				}
			};

			if (fullLine2) {
				alert('LINE!!! Yuhuu!');
				for (var i = 5; i < 10; i++){
					bingoCard[i] = 0;
				};
			};

			if (fullLine3) {
				alert('LINE!!! Yuhuu!');
				for (var i = 10; i < 15; i++){
					bingoCard[i] = 0;
				};
			};	


			var fullCard = bingoCard.every(function(nums){
					return nums === 0;
			});

			if (fullCard === true){	
				alert('BINGO!!! You won, congratulations!!')
				var remainingPoints = 100 + counter;
				alert('You have ' + remainingPoints + ' points. Thanks for playing! See you soon!');
				return remainingPoints;
		    }

			askTurn = newTurn();
		};
	
		var remainingPoints = 100 + counter;
		alert('You have ' + remainingPoints + ' points. Thanks for playing! See you soon!');
		return remainingPoints;
	};


	function generateCard(){
		bingoCard = generateRan(15, 90);
		var likeCard = prompt('Those are the numbers of your bingo card: ' 
			+ bingoCard + '. \n Do you like them? (Please, respond with yes or no)');
		return likeCard;
	};

	function chooseCard() {
		var decision = generateCard();
		decision = decision.toLowerCase();
		if (decision === 'yes'){
			alert('You start with 100 points.\n'+
			' Each new number you play will add one point.\n You can change your points for money or new games');
		} else if (decision === 'no'){
			chooseCard();
		} else {
			alert('Please, respond with yes or no');
			chooseCard();
		};
	};

	function orderUsers(myArray){
		myArray.sort(function(a,b) {
			var userA = a.points;
			var userB = b.points;
			return (userA < userB) ? -1 : (userB < userA) ? 1 : 0;
		});
		return myArray;
	};

	var bingoCard;
	var randomNumbers = generateRan(90, 90);
	var counter = 0;
	var name = prompt('Please, enter your name');
	alert('Welcome ' + name + '!');
	chooseCard();
	var remainingPoints = playGame();
	users.push({points: remainingPoints, userName: name});
	console.log(users[0].points);
	var users = orderUsers(users);

	var presentUsers = '';
	for (var i = 0; i < users.length; i++){
		presentUsers += users[i].userName + ' has ' + users[i].points + ' points. \n';
	};
	alert(presentUsers);
	return users;

};

