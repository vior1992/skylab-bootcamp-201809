//BINGO

function askName () {
  var userName = prompt('Bienvenido al Bingo! Como te llamas?');
  return userName;
}

function generateTicket () {
  var ticket = new Array(numOfRows);
  for (var index = 0; index < numOfRows; index++) {
    ticket[index] = new Array(numOfColumns);
  }
  return ticket;
}

function generateMaxNumbers () {
  return numOfRows * numOfColumns * 3;  
}

function generateRandomNumber() {
   var randomNumber = Math.floor(Math.random () * maxNumber) + 1;
   return randomNumber;
}

function isRepeated (randomNumber) {
  var isRepeated = false;
  for (var indexRow = 0; indexRow < numOfRows; indexRow++)    {
      for (var indexColumn = 0; indexColumn < numOfColumns; indexColumn++) {
        if (ticket[indexRow][indexColumn] === randomNumber) {
          isRepeated = true;
        }    
      }
    }
  return isRepeated;
}

function fillTicket () {
  var randomNumber = 0;
  var repeated = false;
  for (var indexRow = 0; indexRow < numOfRows; indexRow++)     {
    for (var indexColumn = 0; indexColumn < numOfColumns; indexColumn++) {
      do {
        randomNumber = generateRandomNumber();
        repeated = isRepeated(randomNumber);
      }
      while (repeated);
      ticket[indexRow][indexColumn] = randomNumber;
     }
  }
  return ticket;  
}


function showTicket () {
  console.log('-------------------------------------------');
  for (var indexColumn = 0; indexColumn < numOfColumns; indexColumn++)    {
    console.log(ticket[0][indexColumn] + '\t|\t' + ticket[1][indexColumn] + '\t|\t' + ticket[2][indexColumn] + '\t|');  
    }
  console.log('-------------------------------------------');
}

function isNumberOfTheTurnRepeated () {
  var isRepeated = false;
  for (var indexBingo = 0; indexBingo < numbersBingo.length; indexBingo++)    {
    if (numbersBingo[indexBingo] === numberOfTheTurn) {
          isRepeated = true;
        }    
    }
  return isRepeated; 
}

function checkNumberOnTicket () {
  for (var indexRow = 0; indexRow < numOfRows; indexRow++) {
    for (var indexColumn = 0; indexColumn < numOfColumns; indexColumn++) {
      if (ticket[indexRow][indexColumn] === numberOfTheTurn) { 
        ticket[indexRow][indexColumn] = 'X';
        console.log('Se ha encontrado el numero: ' + numberOfTheTurn);
      } 
    }
  }
}

function checkLine () {
  var arrayLine = [];
  var line = false;

  for (var indexColumn = 0; indexColumn < numOfColumns; indexColumn++) {
    for (var indexRow = 0; indexRow < numOfRows; indexRow++) {
      arrayLine[indexRow] = ticket[indexRow][indexColumn];  
    }
    line = arrayLine.every(isLine);
    if (line) {
      console.log('-------------------------------------------------');
      console.log('|                LINE!!!!!                     |');
      console.log('-------------------------------------------------');
      indexColumn = numOfColumns - 1;
    }
  } 
  return line;
}

function isLine (arrayElement) {
  return arrayElement === 'X';
}

function checkBingo() {
  var checkBingoVar = false;
  var checkTicket = [];
  
  for (var indexRow = 0; indexRow < numOfRows; indexRow++)    {
      for (var indexColumn = 0; indexColumn < numOfColumns; indexColumn++) {
      checkTicket.unshift(ticket[indexRow][indexColumn]);
      }
  }
  checkBingoVar = checkTicket.every(isBingo);
  if (checkBingoVar) {
    console.log('-------------------------------------------------');
    console.log('|                BINGO!!!!!                     |');
    console.log('-------------------------------------------------');
  }
  return checkBingoVar;
}

function isBingo (arrayElement) {
  return arrayElement === 'X';
}

function askContinue() {
  do {
   var askContinue = prompt('Deseas continuar?(Y/N)');
   if (askContinue==='Y' || askContinue==='y') {
      keepOn = true;
   }
   else if (askContinue==='N' || askContinue==='n') {
     keepOn = false;
   }     
   else { 
    console.log('Invalid option');
   } 
  }
  while (askContinue!=='Y' && askContinue!=='y' && askContinue!=='N' && askContinue!=='n');
  return keepOn;
}

function askNewGame () {
  do {
   var askContinue = prompt('Deseas jugar una nueva partida?(Y/N)');
   if (askContinue==='Y' || askContinue==='y') {
      newGame = true;
   }
   else if (askContinue==='N' || askContinue==='n') {
     newGame = false;
   }     
   else { 
    console.log('Invalid option');
   } 
  }
  while (askContinue!=='Y' && askContinue!=='y' && askContinue!=='N' && askContinue!=='n');
  return newGame;
}


function bingo () {
  var line = false;
  var isBingo = false;
  while (newGame) {
    ticket = generateTicket();
    fillTicket();
    console.log('Este es tu carton:');
    showTicket();
    confirm("Press a button to continue!");   
    var turnCounter = 1;

    while (!isBingo && keepOn) {
    do {
      numberOfTheTurn = generateRandomNumber();
      numberTurnRepeated = isNumberOfTheTurnRepeated();
      }
      while (numberTurnRepeated && turnCounter <= maxNumber);
    numbersBingo.unshift(numberOfTheTurn);
    checkNumberOnTicket();
    console.log('Turn ' + turnCounter + '. Number: ' + numberOfTheTurn);
    showTicket();
  
      if (line === false) {
        line = checkLine();
      }
      else {
        isBingo = checkBingo();
      }
    turnCounter++;  
    keepOn = askContinue();
    }
    if (isBingo) {
      console.log('El juego se ha completado en ' + turnCounter + ' turnos.'); 
    }
    newGame = askNewGame();
    if (newGame)
    {
      isBingo = false;
      keepOn = true;
    }
  }
}

const numOfRows = 3;
const numOfColumns = 5;
var maxNumber = generateMaxNumbers(numOfRows,numOfColumns);
var ticket = [];
var numbersBingo = [];
var numberOfTheTurn = 0;
var numberTurnRepeated = false;
var keepOn = true; 
var newGame = true;
var userName = askName();

bingo();
