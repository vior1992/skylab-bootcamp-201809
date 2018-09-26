
/* ----------------------------------- */
/* ---------- Calculator Pro --------- */
/* ----------------------------------- */

//Comprobamos si el argumento pasado es del tipo 'number'
function isNumber (number) {
  	let isNumber = (typeof number === 'number' ? true : false);
  	return isNumber;
}

const errorMessage = () => {
  console.log('Please, introduce valid numbers.')
}

function calculator () {
  //creamos un Array a partir de los argumentos pasados a la funcion calculator
	let numbersArray = [].slice.call(arguments);
  //Comprobamos que todos los elementos son numeros
  if (numbersArray.length === 0) {
    errorMessage();
  }
  else if(numbersArray.every(isNumber) && numbersArray.length!==1){
    let addition = 0;
    let subtraction = numbersArray[0];
    let multiplication = 1;
    let division = numbersArray[0];

    //Sumamos
    numbersArray.forEach(function(num){
    	addition += num;
    });

    //Restamos
    numbersArray.forEach(function(num){
    	subtraction -= num;
    });
    //sumamos el valor del primer parametro que fue restado en la primera iteracion
    subtraction += numbersArray[0];

    //Multiplicamos
    numbersArray.forEach(function(num){
    	multiplication *= num;
    });

    //Dividimos
    numbersArray.forEach(function(num){
    	division /= num;
    });
    	//Multiplicamos por el primer elemento para compensar la primera iteracion que divide
    	division *= numbersArray[0];

    let additionResult = 'Addition equals: ' + addition.toFixed(3);
    let subtractionResult = 'Subtraction equals: ' + subtraction.toFixed(3);
    let multiplicationResult = 'Multiplication equals: ' + multiplication.toFixed(3);
    let divisionResult = 'Division equals: ' + division.toFixed(3);

    let result = [additionResult, subtractionResult, multiplicationResult, divisionResult];
    console.log(result);

    //Si se pasa solamente un argumento, efectuamos la raiz cuadrada
  } else if (numbersArray.every(isNumber) && numbersArray.length===1 && numbersArray[0] >=0 ){
    console.log('The square root of ' + numbersArray[0] + ' equals: ' + Math.sqrt(numbersArray[0]).toFixed(3));
  } else {
    //Si no todos los argumentos son numeros, mostramos mensaje de error
    errorMessage();
  }
}

/* -----INTRODUCE AQUI LOS VALORES------ */
//Aqui puedes pasarle argumentos a la funcion Calculator
calculator(1,2,3);

let byeBye = () => { alert("Pues adiós muy buenas!");}

let calculateAgain = false;
let enoughNumbers = false;

do {
  calculateAgain = confirm("Do you want to calculate again with new values?");
  calculateAgain ? reCalculate() : byeBye();
}
while(calculateAgain === true);
