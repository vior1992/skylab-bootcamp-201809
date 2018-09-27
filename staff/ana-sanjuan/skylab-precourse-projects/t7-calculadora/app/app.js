function calculate(){
    sum();
    subs();
    mult();
    divi();
}

function getNumbers() {
    var n1 = parseInt(document.getElementById('n1').value);
    var n2 = parseInt(document.getElementById('n2').value);
    
    if (isNaN(n1) || isNaN(n2)){
        document.getElementById('inputP').innerHTML = 'Invalid input. Try again!';
        return;
    };
    return [n1, n2]
    
}
function sum(){
    [n1, n2] = getNumbers();
    var sum = n1 + n2;
    document.getElementById('resultSum').innerHTML =  sum ;
}

function subs(){
    [n1, n2] = getNumbers();
    var subs = n1 - n2;
    document.getElementById('resultSubs').innerHTML =  subs ;
}

function mult(){
    [n1, n2] = getNumbers();
    var mult = n1 * n2;
    document.getElementById('resultMult').innerHTML =  mult ;
}

function divi(){
    [n1, n2] = getNumbers();
    var divi = (n1 / n2).toFixed(3);
    document.getElementById('resultDivi').innerHTML =  divi ;
}

function newText (){
    document.getElementById("calculate").innerHTML= "Psst! fastest way! 🦄";
}

function oldText (){
    document.getElementById("calculate").innerHTML= "Calculate all!";
}
