//BINGO GAME!
//Realiza un programa que simule un Bingo. Cuando se ejecute, pedirá el nombre del jugador y deberá guardarse. Durante el primer turno se mostrará un cartón con 15 números (excluyendo el 0 siempre), para pasar al siguiente turno el usuario deberá confirmar mediante confirm() visualizándose otro número, si coincide con alguno de los existentes en el cartón, cambiará por una "X" o un 0. El cartón se mostrará, al final de cada turno, con los cambios efectuados, indicándole al usuario qué número se ha encontrado. El programa deberá preguntar al usuario al inicio de cada turno si desea continuar, en caso de que se continúe, seguirá el mismo patrón que hasta el momento.

//Por supuesto, cuando todos los números de una misma linea estén en "X", mostrará un mensaje "LINEA!", pero la ejecución seguirá, el juego solo acabará cuando todos los números estén a "X".

//Cuando el juego concluya, deberá decirle al usuario en cuantos turnos se ha completado el cartón. Por último, deberá preguntar si desea volver a jugar.

//Empieza por la versión más básica!
//Why?:
//Comenzar por una versión muy pequeña y básica nos hará tener un programa de principio a fin, es decir, que empieza, que acaba y haga lo que queramos a muy pequeña escala, una vez lo tengamos todo bien dividido podremos empezar a extenderlo tanto como queramos.

//Si funciona con 5 números deberá funcionar con 15, no? 😁

//Requisitos de la versión mínima:
//Cartón con solo 5 números, sin necesidad de ser generados random. Solo necesitamos un número random cuando recorramos el cartón y veamos si hay alguna coincidencia. No necesitamos asegurarnos que el número random de cada turno no haya salido en turnos anteriores, recuerda que estamos en la mínima versión posible, eso ya lo solucionaremos. Si hay coincidencia, remplazaremos el número por una 'x' y mostramos el cartón modificado

//Sepáralo todo en funciones, englobado en una funcion global llamada bingo(), tal que:

//-Function! => Generar Numero Random Bombo

//-Function! => Nuevo turno (Match carton[i] === randomNum)

//-Function! => Preguntar Nuevo Turno

function bingoGame(){
	var playerName = window.prompt('Hi, could you tell me your name?', 'Ms. Malek')

	var bingoCard = [
    { number: 12, matched: false },
    { number: 3, matched: false },
    { number: 7, matched: false },
    { number: 13, matched: false },
    { number: 5, matched: false },
    //next line
    { number: 6, matched: false },
    { number: 2, matched: false },
    { number: 8, matched: false },
    { number: 11, matched: false },
    { number: 4, matched: false }
    ];

	console.log('Hi ' + playerName + '! This is your scorecard' + '\n' + bingoCard[0].number + '  ' + bingoCard[1].number+ '  ' + bingoCard[2].number +'  ' + bingoCard[3].number +'  ' +  bingoCard[4].number + '\n' + bingoCard[5].number + '  ' + bingoCard[6].number + '  ' + bingoCard[7].number + '  ' + bingoCard[8].number +'  ' +  bingoCard[9].number);
    askTurn();

	function generateNum(){
		var num = Math.floor((Math.random() * 15 ) + 1);
        return num;

	}

	function newTurn(){
        var numTurn = generateNum();
        //console.log('numTurn:'+numTurn)
        for(var y = 0; y< bingoCard.length; y++){
            if(bingoCard[y].number === numTurn){
                //console.log('bingoCard number'+bingoCard[y].number)
                bingoCard[y].number = 'X';
                bingoCard[y].matched = true;
                console.log(numTurn + '!!' + '\n' + "You have been lucky! You had this number in your scoreboard. Let's see how are you doing..." + '\n' + bingoCard[0].number + '  ' + bingoCard[1].number+ '  ' + bingoCard[2].number +'  ' + bingoCard[3].number +'  ' +  bingoCard[4].number + '\n' + bingoCard[5].number + '  ' + bingoCard[6].number + '  ' + bingoCard[7].number + '  ' + bingoCard[8].number +'  ' +  bingoCard[9].number)
                askTurn();
            }else{
                console.log(numTurn)
                //console.log('i: ' + y)
                //console.log('bingoCard num'+bingoCard[y].number)
                //console.log(numTurn + '!!' + '\n' + "In your scoreboard there wasn't this number.")
                
            }
        }

	}

	function askTurn(){
        var xCounter = 0;
        for(var i = 0; i< bingoCard.length; i++){
            if(!bingoCard[i].matched){
                var confirmation = confirm('Do you want to continue playing?')
                //var tx;
                if(confirmation){
                    newTurn();
                }else{
                    //tx = "Ok, so let's see you in another ocasion!"
                    window.close();
                    console.log("Ok, so let's see you in another ocasion!")
                    //return 
                    //sortir del programa
                }
            }else{
                xCounter ++;
            }
        }
            if(xCounter === bingoCard.length){
                var newGame = confirm("You've finished your scoreboard! YOU WIN!!" + '\n' + 'Do you want to play again?')
                //var txt;
                if(newGame){
                    bingoGame();
                }else{
                    //txt = "Ok, so let's see you in another ocasion!"
                    window.close();
                    console.log("Ok, so let's see you in another ocasion!")
                   // return
                    //sortir del programa
                }
            }else if(xCounter === (bingoCard.length)/2){
                if((bingoCard[0].matched && bingoCard[1].matched && bingoCard[2].matched && bingoCard[3].matched && bingoCard[4].matched) || (bingoCard[5].matched && bingoCard[6].matched && bingoCard[7].matched && bingoCard[8].matched && bingoCard[9].matched)){
                    var newLine = confirm("LINE!!! You are so lucky!" + '\n' + 'Do you want to continue playing?')
                    if(newGame){
                    askTurn();
                    }else{
                        window.close();
                        console.log("Ok, so let's see you in another ocasion!")
                        //return 
                        //sortir del programa
                    }
                }
            }
        
	}
}

bingoGame();

//!!!!!!!!!!!!!TÉ ERRORS!!! NO DIU LÍNIA QUAN ÉS. SINÓ DESPRÉS DE TORNAR A PREGUNTAR SI VOL SEGUIR JUGANT. ARRIBA UN PUNT QUE PARA DE COP I DIU UNDEFINED. NO FUNCIONA EL BOTÓ CANCELAR. SEMPRE TORNA A SORTIR EL MISSATGE A LA FINESTRA. 



