
function bingo(){

    var accountTurns = 0;

    var numBingo = [];
    
    function getRandomNumber(carton){
        let number 

        do { 
            number = Math.floor(Math.random() * 10 +1);
            
        } while (search(number, carton))
         
    }

    function search(nameKey, myArray){
        for (var i=0; i < myArray.length; i++) {
            if (myArray[i].number === nameKey) {
                return true;
            }
        }
        return false;
     }
    
    function createCarton(){

        let carton = [];

        for (let i = 1; i < 3; i++) {
        
            for (let j = 1; j < 11; j++) {
                carton.push({
                    line: i, id: (10*i)+j , number: getRandomNumber(carton)
                });
                
            }
            
        }

        return carton;

    }//Final createCarton
    
    function askTurn(carton){
        var isCompleted = isCartonCompleted(carton);
        if (isCompleted){
            win();
        } else {
            accountTurns ++;
            confirmNewTurn(carton);
            
        }
    }//cierre askTurn
    
    function confirmNewTurn(carton){
        var askNewTurn = confirm("Nuevo turno?");
        //Si queremos un turno nuevo.
           if (askNewTurn) {
            console.log("Let's go!");
            newTurn(carton);
            //Si no queremos otro turno, acabamos.
        } else {
            gameFinish();
            }
    }//Cierre ConfirmNewTurn
    
    
    function rePlay(){
        alert("You played " + accountTurns + " turns!")
        var askNewGame = confirm("New game?");
        //Si queremos un turno nuevo.
           if (askNewGame) {
            console.log("Ready!");
            bingo();
            //Si no queremos otro turno, acabamos.
        }
    }//Cierre rePlay
    
    function gameFinish(){
        alert("Bye Bye")
        rePlay();
    }//Cierre gameFinish
    
    function win(){
        alert("is BINGO! YOU WIN!")
        rePlay();
    }//Cierre win

   
    
    function newTurn(carton){
        var randomBingoNumber = getRandomNumber();

         carton.forEach(function(cartonNumber){
            if (randomBingoNumber == cartonNumber.number){
                cartonNumber.number = 0;
                console.log("MATCH! ", randomBingoNumber, carton);
                validateLine(carton,cartonNumber.line);
                randomNumberList.number = randomBingoNumber;
            }
        })
            
        askTurn(carton)
        
        
    }//cierre de newTurn
    
    function validateLine(carton,line) {
        var sum = 0;
        carton.forEach(function(cartonNumber){
            
            if (cartonNumber.line == line) {
                sum += cartonNumber.number
            }
        })
        if (sum == 0){
        alert("LINE!");
        }
    }//cierre validateLine
    
    function isCartonCompleted(carton){
        var sum = 0;
    
        carton.forEach(function(cartonNumber){
            sum += cartonNumber.number;
        })
        
    
        if (sum == 0){
            return true;
        } else {
            return false;
        }
    }//Cierre isCartonCompleted
    
    
    
    
    
    
    
    var carton = createCarton();
    
    
    askTurn(carton);
    
    }
    
    bingo()