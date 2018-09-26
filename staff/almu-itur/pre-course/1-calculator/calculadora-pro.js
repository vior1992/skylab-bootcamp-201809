function sum() {
	var total = 0;
  var prop = 0;
  for (prop in arguments[0]) {
		//arguments[0][prop] = parseFloat(arguments[0][prop]);
    total+= arguments[0][prop];
	}
  return total;
}

function deduct() {
  var total = arguments[0][0]+arguments[0][0];
  var prop = 0;
	for (prop in arguments[0]) {
		total-=arguments[0][prop];
	}
	return total;
}

function multiply() {
	var total = 1;
  var prop = 0;
	for (prop in arguments[0]) {
		total*=arguments[0][prop];
	}
	return total;
}

function divide() {
	var total = arguments[0][0]*arguments[0][0];
  var prop = 0;
	for (prop in arguments[0]) {
		total/=arguments[0][prop];
	}
	return total;
}

function squareRoot(number) {
  let squareRoot = Math.sqrt(number);
  if (!Number.isInteger(squareRoot)) {
        squareRoot = squareRoot.toFixed(3);
      }
  console.log(`////////////////////////////////////////\n\tTu numero es: \n\t ${number}`);  
  console.log(`////////////////////////////////////////\nLa raiz cuadrada de ${number} es: ${squareRoot}\n////////////////////////////////////////`);
}

function showResults (sumTotal, deductTotal, multiplyTotal, divideTotal) {
  var index = 0;
  for (index in arguments) {
    
    if (!Number.isInteger(arguments[index])) {
      var numberDecimals = arguments[index];
      numberDecimals = numberDecimals.toString();
      var indexDecimals = numberDecimals.indexOf(".");
          
      if (numberDecimals.length - indexDecimals > 3) {
          arguments[index] = arguments[index].toFixed(3);
      }
    }
  }
  console.log(`////////////////////////////////////////\n\tTus numeros son: \n\t ${arrayNumbers}`);
  console.log(`////////////////////////////////////////\n La suma da como resultado: ${arguments[0]}\n La resta da como resultado: ${arguments[1]}\n La multiplicacion da como resultado: ${arguments[2]}\n La division da como como resultado: ${arguments[3]}\n////////////////////////////////////////`);
}

function getNumbers () {
  var exit = false;
  var numberVar = 0;
  var noNumber = true;
  var newNumber = '';
  
  while (exit===false)
  {
     do {
        noNumber = true;
        numberVar = prompt('Introduce numero');
       	numberVar = parseFloat(numberVar);
        if (typeof numberVar==='number') {
				arrayNumbers.push(numberVar);
        noNumber = false;
    		}
    }
    while (noNumber);

    do {
      exit = false;
      newNumber = prompt('Quieres introducir otro numero? (Y/N)');
      if (newNumber==='Y' || newNumber==='y') {
        exit = false;
      }
      else if (newNumber==='N' || newNumber==='n') {
        exit = true;
      }
      else {
        console.log('Invalid option');
      }
    }
    while (newNumber!=='Y' && newNumber!=='y' && newNumber!=='N' && newNumber!=='n');
  }
  return arrayNumbers.length;
}

function askIfNewOperation() {
  var exit = false;
  do {
   var askContinue = prompt('Deseas volver a realizar operaciones?(Y/N)');
   if (askContinue==='Y' || askContinue==='y') {
      exit = false;
   }
   else if (askContinue==='N' || askContinue==='n') {
     exit = true;
   }     
   else { 
    console.log('Invalid option');
   } 
  }
  while (askContinue!=='Y' && askContinue!=='y' && askContinue!=='N' && askContinue!=='n');
  return exit;
}

let arrayNumbers = [];

function calculator () {

	var exit = false;
	var sumTotal, deductTotal, multiplyTotal,divideTotal = 0;
  var variables = 0;
  
	while (exit===false) {
		arrayNumbers = [];
    variables = getNumbers();
  	
    if (variables === 1) {
      squareRoot(arrayNumbers[0]);
    }
  	else {
      sumTotal = sum(arrayNumbers);
			deductTotal = deduct(arrayNumbers);
			multiplyTotal = multiply(arrayNumbers);
			divideTotal = divide(arrayNumbers);
  		showResults(sumTotal,deductTotal,multiplyTotal,divideTotal);
    }
		exit = askIfNewOperation();
	}
  console.log("Bye!");
}

calculator();
