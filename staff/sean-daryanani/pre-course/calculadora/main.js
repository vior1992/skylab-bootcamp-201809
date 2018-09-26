//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Declare DOM variables
var numbers = document.querySelectorAll(".num");
var operators = document.querySelectorAll(".operator");
var input = document.querySelector("input");
var clear = document.querySelector(".clear");
var plusMinus = document.querySelector(".plusminus");
var percent = document.querySelector(".percent");
var equals = document.querySelector(".equals");
var decimal = document.querySelector("#dec");
var squareRoot = document.querySelector(".sqrt")

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Declare global variables
var firstNumber=0;
var secondNumber=0;
var currentOperand;
var result = 0;
var currentNumber = 0;
var operandSelected;
var calcStatus= {
    first:true,
    second:false,
    result:false,
    notNumberClicked:false,
};

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Functions


function removeBackground() {
    for (var i=0; i<numbers.length; i++) {
        numbers[i].classList.remove("selected");
        if (operators[i]) {
            operators[i].classList.remove("selected");
        }
    }
}


function makeVisible() {
    for (var i=0 ; i<operators.length; i++) {
        operators[i].style.visibility="visible";
    }
    plusMinus.style.visibility = 'visible';
    percent.style.visibility = 'visible';

}

function hideOperators() {
    switch(currentOperand) {
        case '+':
        operators[0].style.visibility= 'hidden';
        operators[1].style.visibility= 'hidden';
        operators[2].style.visibility= 'hidden';
        break;

        case '-':
        operators[0].style.visibility= 'hidden';
        operators[1].style.visibility= 'hidden';
        operators[3].style.visibility= 'hidden';
        break;

        case '*':
        operators[0].style.visibility= 'hidden';
        operators[2].style.visibility= 'hidden';
        operators[3].style.visibility= 'hidden'; 
        break;

        case '/': 
        operators[1].style.visibility= 'hidden';
        operators[2].style.visibility= 'hidden';
        operators[3].style.visibility= 'hidden';
        break;
    }

}

function equalsLogic() {
    if (currentOperand === '+') {
        result = parseFloat(firstNumber)+ parseFloat(secondNumber)
        input.value = Math.round(result*100000)/100000;
    }

    else if (currentOperand === '-') {
        result = parseFloat(firstNumber)- parseFloat(secondNumber)
        input.value = Math.round(result*100000)/100000;
    }

    else if (currentOperand === '*') {
        result = parseFloat(firstNumber)* parseFloat(secondNumber)
        input.value = Math.round(result*100000)/100000;
    }

    else if (currentOperand === '/') {
        result = parseFloat(firstNumber)/ parseFloat(secondNumber)
        input.value = Math.round(result*100000)/100000;
        if (result === Infinity || result === -Infinity || result === NaN) {
            input.value = "Can't divide by 0!"
            document.body.classList.add("show");
    }


        
    };
}

function plusMinusLogic() {
    if (calcStatus.first===true) {
        firstNumber = firstNumber * -1;
        input.value = Math.round(firstNumber*100000)/100000;
    }

    else if (calcStatus.second===true) {
        secondNumber = secondNumber * -1;
        input.value = Math.round(secondNumber*100000)/100000;
    }

    else if (calcStatus.result===true) {
        currentNumber = currentNumber * -1;
        firstNumber = firstNumber * -1;
        input.value = Math.round(currentNumber*100000)/100000;
    };
}

function percentLogic() {
    if (calcStatus.first===true) {
        firstNumber = firstNumber /100;
        input.value = firstNumber;
    }

    else if (calcStatus.second===true) {
        secondNumber = secondNumber /100;
        input.value = secondNumber;
    }

    else if (calcStatus.result===true) {
        currentNumber = currentNumber /100;
        firstNumber = firstNumber /100;
        input.value = currentNumber;
    };
}

function sqrt() {
    if (calcStatus.first===true && firstNumber> 0) {
        firstNumber = Math.sqrt(firstNumber);
        input.value = Math.round(firstNumber*100000)/100000;
    }

    else if (calcStatus.second===true && secondNumber > 0) {
        secondNumber = Math.sqrt(secondNumber);
        input.value = Math.round(secondNumber*100000)/100000;
    }

    else if (calcStatus.result===true && currentNumber > 0) {
        currentNumber = Math.sqrt(currentNumber);
        firstNumber = Math.sqrt(firstNumber);
        input.value = Math.round(currentNumber*100000)/100000;
    }

    else if (input.value < 0) {
        input.value = "Can't do that!"

    }
        
    
}


function changeCalcStatus(input) {
    if (input==="equals") {
    calcStatus.first=false;
    calcStatus.second=false;
    calcStatus.result=true; 
    }

    else if (input === "first") {
    calcStatus.first=true;
    calcStatus.second=false;
    calcStatus.result=false; 
    }

    else if (input === "second") {
    calcStatus.first=false;
    calcStatus.second=true;
    calcStatus.result=false; 
        }
}

function clearVariables() {
    currentResult = 0;
    currentNumber = 0;
    firstNumber = 0;
    secondNumber = 0; 
    result = 0;   
    input.value="";
    currentOperand=false;
}



function resetObject() {
    calcStatus= {
        first:true,
        second:false,
        result:false,
    };
}

function clickNumberLogic(param) {
    if (operandSelected===true || calcStatus.result===true) {
        input.value=""; 
        operandSelected=false;
        
    }

    if (param.getAttribute("attr") === "decimal") {
        param.style.visibility= 'hidden';

    }

    if (currentOperand==='+' || currentOperand==='-' || currentOperand==='*' || currentOperand==='/'){
   
    input.value += param.innerHTML;
    secondNumber=input.value;   
    currentNumber = secondNumber; 
    changeCalcStatus("second");
  
    }
    else {
        input.value += param.innerHTML;
        firstNumber = input.value;
        currentNumber = firstNumber;
        changeCalcStatus("first");
    }
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Main function

function main() {
    //Numbers click event
    for (var i=0; i<numbers.length; i++) {
        numbers[i].addEventListener("click", function() {  
            removeBackground();
            this.classList.add("selected");
            console.log(this);
            clickNumberLogic(this);
        })
    }

    //Clear click event
    clear.addEventListener("click", function() {
        decimal.style.visibility="visible";
        document.body.classList.remove("show");
        document.body.classList.remove("show");
        makeVisible()
        removeBackground();
        resetObject();
        clearVariables();
    })

    //Operators click event
    for (var i=0; i<operators.length; i++) {    
        operators[i].addEventListener("click", function() {
            decimal.style.visibility="visible";
            removeBackground();
            this.classList.add("selected");
            currentOperand=this.getAttribute("symbol");
            operandSelected=true;    
            hideOperators();
        })
    }

    //Equals click event
    equals.addEventListener("click", function() {
        makeVisible()
        removeBackground();
        equalsLogic();
        changeCalcStatus("equals");
        decimal.style.visibility="visible";    
        currentOperand=false;
        currentNumber = result;
        firstNumber = result;    
    })

    //Plusminus click event
    plusMinus.addEventListener("click", function() {
        removeBackground();
        plusMinusLogic();
    })



    //Percent click event
    percent.addEventListener("click", function() {
        removeBackground();
        percentLogic();
    })

    //Square root click even
    squareRoot.addEventListener("click", function() {
        removeBackground();
        sqrt();
    })

}

main();