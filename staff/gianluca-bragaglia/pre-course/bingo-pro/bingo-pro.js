// BINGO PRO

var playerName;
var playerPoints;
var arrPlayers = [];

function bingo() {
    playerName = prompt('Escribe tu nombre');
    playerPoints = 100;
    var card = [];
    var arrRandomNum = [];
    var countA;
    var countB;
    var countC;
    addNumerCard();
    var card15 = card.slice(0,5);
    var card510 = card.slice(5,10);
    var card1015 = card.slice(10);
    console.log(playerName + ' Hai ' + playerPoints + ' punti');
    console.log(card15); 
    console.log(card510);
    console.log(card1015);




    function addNumerCard() {
            
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

        return card;  // Will contain 15 unique, random numbers between 1 and 90.
        
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

        return arrRandomNum  // Will contain 15 unique, random numbers between 1 and 90.


    }
    generateArrRandom();



    function generateRandom() {
        
        var numRandom = arrRandomNum[arrRandomNum.length - 1];
        var r = arrRandomNum.length;
        return numRandom;

    }

    


    function newTurn() {

        var rand = generateRandom();
        var line = ['X','X','X','X','X'];
	    playerPoints--;
        console.log(rand);


	function newNumber() {
	
        rand = generateRandom();
        playerPoints--;
	
	}
	


	function askNewNumber() {

        var n = confirm("Cambiar numero?");
        if (n == true) {
	    arrRandomNum.pop();
            newNumber();
           }
        }
   
        askNewNumber();
	
        
        
        for(var i=0; i<5; i++) {
                
            if(card15[i] === rand) {
                
                card15.splice(i,1,'X');
                console.log('Se ha encontrado el numero ' + rand);
                
                
            }
        }

        for(var i=0; i<5; i++) {
                
            if(card510[i] === rand) {
                
                card510.splice(i,1,'X');
                console.log('Se ha encontrado el numero ' + rand);
                
                
            }
        }
       
        for(var i=0; i<5; i++) {
                
            if(card1015[i] === rand) {
                
                card1015.splice(i,1,'X');
                console.log('Se ha encontrado el numero ' + rand);
                
                
                
            }
        }


	
        console.log(rand);
        arrRandomNum.pop();
        
            


        function areArrsMatch(arr1, arr2){
            return arr1.sort().toString() === arr2.sort().toString()
        }
        
        
        
        console.log(card15); 
        console.log(card510);
        console.log(card1015);
        
        if(areArrsMatch(line,card15) && countA !== 0) {
            countA = 0;
            if(countB == 0 && countC == 0) {
                console.log('Has ganado ' + playerName + '!!!');
                console.log(playerName + ' Hai ' + playerPoints + ' punti');
                results();
            }else{
                console.log('LINEA!!!');
                askTurn();
            }
            
    
	    }else if(areArrsMatch(line,card510) && countB !== 0) {
            countB = 0;
            if(countA == 0 && countC == 0) {
                console.log('Has ganado ' + playerName + '!!!');
                console.log(playerName + ' Hai ' + playerPoints + ' punti');
                results();
            }else{
                console.log('LINEA!!!');
                askTurn();
            }

        }else if(areArrsMatch(line,card1015) && countC !== 0) {

            countC = 0;
            if(countB == 0 && countA == 0) {
                console.log('Has ganado ' + playerName + '!!!');
                console.log(playerName + ' Hai ' + playerPoints + ' punti');
                results();
            }else{
                console.log('LINEA!!!');
                askTurn();
            }
        
        }else{
           askTurn();
        }
    }

    function askTurn() {

        var r = confirm("Nuevo turno?");
        if (r == true) {
            newTurn();
        }else{
            console.log('Adios ' + playerName + '!!!');
            results();
            
        }
    }
   
    askTurn();
    
    

    
    
}
bingo();




function askNewPlayer() {
    var askNewP = confirm('Nuevo bingo?');
    if(askNewP) {
        bingo();
    }else{
        console.log('Adios');
        results();
        
    }
}


askNewPlayer()


function sort_by(field, reverse, primer){     //sort array object by

    var key = primer ? 
        function(x) {return primer(x[field])} : 
        function(x) {return x[field]};
 
    reverse = !reverse ? 1 : -1;
 
    return function (a, b) {
        return a = key(a), b = key(b), reverse * ((a < b) - (b < a));
      } 
}




function results() {
  
    arrPlayers.push({name: playerName, puntos: playerPoints } );
    var arrPlayersSort = arrPlayers.sort(sort_by('puntos', true, parseInt));  // Sort by price high to low
    var revArrPlayersSort = arrPlayersSort.reverse();
    console.log('Clasificacion: ');
    revArrPlayersSort.forEach(function(obj) {
    console.log(obj.name + ' => ' + obj.puntos + ' puntos');
        
    })
}






