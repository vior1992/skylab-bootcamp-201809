
function bingo(){

    var accountTurns = 0;
    
    
    function getRandomNumber(){
        return Math.floor(Math.random() * 10 +1);
    }
    
    
    function createCarton(){
        
        return [
            { line: 1, id: 1 , number: getRandomNumber() },
            { line: 1, id: 2 , number: getRandomNumber() },
            { line: 1, id: 3 , number: getRandomNumber() },
            { line: 1, id: 4 , number: getRandomNumber() },
            { line: 1, id: 5 , number: getRandomNumber() },
            { line: 1, id: 6 , number: getRandomNumber() },
            { line: 1, id: 7 , number: getRandomNumber() },
            { line: 1, id: 8 , number: getRandomNumber() },
            { line: 1, id: 9 , number: getRandomNumber() },
            { line: 1, id: 10, number: getRandomNumber() },
            { line: 2, id: 11, number: getRandomNumber() },
            { line: 2, id: 12, number: getRandomNumber() },
            { line: 2, id: 13, number: getRandomNumber() },
            { line: 2, id: 14, number: getRandomNumber() },
            { line: 2, id: 15, number: getRandomNumber() },
            { line: 2, id: 16, number: getRandomNumber() },
            { line: 2, id: 17, number: getRandomNumber() },
            { line: 2, id: 18, number: getRandomNumber() },
            { line: 2, id: 19, number: getRandomNumber() },
            { line: 2, id: 20, number: getRandomNumber() }
        ]
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