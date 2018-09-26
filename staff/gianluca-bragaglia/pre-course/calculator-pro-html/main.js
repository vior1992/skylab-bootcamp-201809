/*
Podrías hacer que le calculadora relizara operaciones sean cuales sean el numero de argumentos pasados a la funcion? Hint => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments Hint => https://msdn.microsoft.com/es-es/library/he95z461
function sum(){
    var acc = 0;
    for (num in arguments){
    console.log(num)
    acc += arguments[num]   
    }
    return acc
}
sum(2,3,4) // acc=9
Después de hacer todas las operaciones, el programa deberá preguntar al usuario si desea volver a realizar otra operación, volviendo a almacenar más resultados y mostrándolos.
calculator(n1,n2)
//Output => sum, subs, mult, div...
prompt("New numbers? y/n")
    Case "y" => calculator(n1,n2)
                //Output => sum1, subs1, mult1, div1, sum2, subs2, mult2, div2...
    Case "n" => "Bye!" */





function calculatorPro() {

    var numArr = document.getElementById('nums').value;
    var arr;

    
    var screen;
    var screen2;
    var screen3;
    
    
    sumF = function() {

        return arr.reduce(function(a,b){return (a+b)});
    }

    restF = function() {

        return arr.reduce(function(a,b){return (a-b).toFixed(3)});

    }    
    
    multiF = function() {
        
        return arr.reduce(function(a,b){return (a*b).toFixed(3)});
    }
    
    divF = function() {
        
        return arr.reduce(function(a,b){return (a/b).toFixed(3)});
    }


    function startCalc() {
        arr = numArr.split(',').map(Number);
        for(var j=0; j<arr.length; j++) {
            if (isNaN(arr[j]) === true || arr[j] == undefined || arr[j] == 0) {
                screen = document.getElementById("tot").innerHTML = '<li>' + 'tienes que introducir un numero!!!'+ '</li>';
            }else if (arr.length == 1 && (isNaN(arr[j]) === false && arr[j] !== undefined && arr[j] !== 0)) {
                var rad = 'La raiz cuandrada del numero introducico es ' + Math.sqrt(arr[0]).toFixed(3);
                screen2 = document.getElementById("tot").innerHTML = '<li>' + rad + '</li>';
            } else {
                screen3 = document.getElementById("tot").innerHTML = ('<li>' + 'La suma de los numeros introducidos es ' + sumF() + ', la resta es ' + restF() + ' la multiplicación es ' + multiF() + ' la división es ' + divF() + '</li>');
            }
        }
    }
    
    startCalc();

    function resetCalc() {
        document.getElementById('tot').value='';

      }
      
  
}




