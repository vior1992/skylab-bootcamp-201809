/* --------------- ------- --------------- */
/* --------------- STRINGS --------------- */
/* --------------- ------- --------------- */
console.log("\n\n*********************************\n*********************************\n\n------------ STRINGS ------------\n\n*********************************\n*********************************\n\n\n");
var fede = {name : "Fede Gomez", age: 31};

//b) en qué posiscion empieza mi apellido?
console.log(`Resultado ejercicio a: \n`);
console.log(`Your last name starts in the position ${fede.name.indexOf(' ')+1}`);
console.log("\n--------------------------------\n");

//c) Ahora, con tu apellido y nombre en la misma variable, muestra solo el nombre (lo que haya antes del espacio):
console.log(`Resultado ejercicio c: \n`);
console.log(fede.name.slice(0, fede.name.indexOf(' ')));
console.log("\n--------------------------------\n");

//d) Ahora, solo tu apellido.
console.log(`Resultado ejercicio d: \n`);
console.log(fede.name.slice(fede.name.indexOf(' ')+1));
console.log("\n--------------------------------\n");

//e) Ahora, reemplaza tu nombre por "Mr/Ms" y vuelve a mostrar la variable con los cambios.
console.log(`Resultado ejercicio e: \n`);
let myNewString = 'Hello, ' + fede.name.replace("Fede", "Mr.");
console.log(myNewString);
console.log("\n--------------------------------\n");

//f) Selecciona tu apellido y transfórmalo a MAYÚSCULAS.
console.log(`Resultado ejercicio f: \n`);
let mySelection = (fede.name.slice(fede.name.indexOf(' ')+1).toUpperCase());
console.log(mySelection);
console.log("\n--------------------------------\n");

//g) Ahora declara una variable nueva e igualala a la anterior variable sumándole, además, un mensaje.
console.log(`Resultado ejercicio g: \n`);
let myNewLongerSelection = 'Mr. ' + mySelection + ' is learning to code :)';
console.log(myNewLongerSelection);
console.log("\n--------------------------------\n");

//h) Ahora, puedes seleccionar la inicial de tu nombre y apellido y mostrarlas por pantalla?
console.log(`Resultado ejercicio h: \n`);
let myFirstLastnameLetters = fede.name.match('F') + fede.name.match('G');
console.log(myFirstLastnameLetters) // FG



/* --------------- ------- --------------- */
/* ---------------- ARRAYS --------------- */
/* --------------- ------- --------------- */

console.log("\n\n********************************\n********************************\n\n------------ ARRAYS ------------\n\n********************************\n********************************\n\n\n");

var fede = {name : "Fede Gomez", age: 31};

/*-------------------------------------------------------------*/
//a) Declara tu nombre completo en una array y mustralo por pantalla separando cada letra por "/"
/*-------------------------------------------------------------*/

let myNameAsArray = fede.name.split('');

console.log(`Resultado ejercicio a: \n`);
console.log(myNameAsArray.join('/'));
console.log("\n--------------------------------\n");

/*-------------------------------------------------------------*/
//b Ahora solo selecciona tu apellido y muestra cada letra separada por "|"
/*-------------------------------------------------------------*/

let mySurnameAsString = fede.name.slice(fede.name.indexOf(' ')+1);
let mySurnameAsArray = mySurnameAsString.split('');


console.log(`Resultado ejercicio b: \n`);
console.log(mySurnameAsArray.join('|'));
console.log("\n--------------------------------\n");

/*-------------------------------------------------------------*/
//c Ahora muestra cada letra de tu nombre con su posicin (necesitaras un bucle for)
/*-------------------------------------------------------------*/
console.log(`Resultado ejercicio d: \n`);


let myFirstNameAsString = fede.name.slice(0, fede.name.indexOf(' '));
let myFirstNameAsArray = myFirstNameAsString.split('');

let string = '';

for (let position=0; position < myFirstNameAsArray.length; position++) {
  string += `${position +1}:${myFirstNameAsArray[position]} `;
};

console.log(string);
console.log("\n--------------------------------\n");

/*-------------------------------------------------------------*/
//d)Como en el ejercicio anterior, pero seleccionando tu apellido
/*-------------------------------------------------------------*/
console.log(`Resultado ejercicio d: \n`);

string = '';
for (let position=0; position < mySurnameAsArray.length; position++) {
  string += `${position +1}:${mySurnameAsArray[position]} `;
};

console.log(string);

console.log("\n--------------------------------\n");

/*-------------------------------------------------------------*/
//e) Puedes indicarme las iniciales de tu nombre y apellido? Como en el ejercicio h de la seccion de strings
/*-------------------------------------------------------------*/
console.log(`Resultado ejercicio e: \n`);

//Buscaremos las letras que estén en mayúsculas y evitamos los espacios...
let initials = '';
myNameAsArray.forEach(function(element){
  if(element === element.toUpperCase() && element !== ' '){initials+=element;}
});
console.log(initials);
console.log("\n--------------------------------\n");

/*-------------------------------------------------------------
f) Ahora, reformula la array, introduciendo tu nombre en primera posición, tu apellido en segunda,
y además añade en otra posicion tu edad. Muestra por pantalla solo tu nombre y tu edad en un solo mensaje.
-------------------------------------------------------------*/
console.log(`Resultado ejercicio f: \n`);

myNameAsArray = ['Fede', 'Gomez', 32];
console.log(`My name is ${myNameAsArray[0]} and I am ${myNameAsArray[2]} years old.`);

console.log("\n--------------------------------\n");

/*-------------------------------------------------------------
g) Prepara una función para añadir tu City a la array, muestra un mensaje mostrando el contenido de toda la array, así aseguraremos los cambios.
-------------------------------------------------------------*/
console.log(`Resultado ejercicio g: \n`);

function addCity(city){
  myNameAsArray.push(city);
}

addCity('Dortmund');
console.log(myNameAsArray);
console.log("\n--------------------------------\n");

/*-------------------------------------------------------------
h) Crea ahora, una funcion para eliminar la variable City y asegura los cambios.
-------------------------------------------------------------*/
console.log(`Resultado ejercicio h: \n`);

function deleteCity(){
  myNameAsArray.pop();
}

deleteCity();
console.log(myNameAsArray);
console.log("\n--------------------------------\n");

/*-------------------------------------------------------------
j) Ahora, elimina el nombre y asegura los cambios
-------------------------------------------------------------*/
console.log(`Resultado ejercicio j: \n`);

myNameAsArray.shift();
console.log(`Eliminamos el nombre:\n ${myNameAsArray}`);

console.log("\n--------------------------------\n");

/*-------------------------------------------------------------
k) Quiero volver a introducir mi nombre pero si lo introduzco utilizando push() estará en la última posición, como podria hacer para introducirlo en la primera posición?
-------------------------------------------------------------*/
console.log(`Resultado ejercicio k: \n`);

myNameAsArray.unshift('Fede');
console.log(myNameAsArray);

console.log("\n--------------------------------\n");

/*-------------------------------------------------------------
l) Ahora, declara una array con los números del 0 a 10 y muestra cada número multiplicado por dos.
-------------------------------------------------------------*/
console.log(`Resultado ejercicio l: \n`);

var numArray = [0,1,2,3,4,5,6,7,8,9,10];
numArray.forEach(function(num){
  console.log(num*2);
});

console.log("\n--------------------------------\n");

/*-------------------------------------------------------------
l1) Reformula la función para que puedas especificar por cual número debería multiplicar cada elemento de la array.
-------------------------------------------------------------*/
console.log(`Resultado ejercicio l1: \n`);

numArray = [0,1,2,3,4,5,6,7,8,9,10];
let multiplicador = 2;
numArray.forEach(function(num){
  console.log(num * multiplicador);
});

console.log("\n--------------------------------\n");

/*-------------------------------------------------------------
m) Podrías mostrarlos en el orden inverso?
-------------------------------------------------------------*/
console.log(`Resultado ejercicio m: \n`);
console.log(numArray.slice().reverse()); //esto no modifica la array
console.log("\n--------------------------------\n");

/*-------------------------------------------------------------
n) Puedes indicarme que letras se repiten de tu nombre y cuantas veces?
-------------------------------------------------------------*/
console.log(`Resultado ejercicio n: \n`);


console.log("\n--------------------------------\n");

/*-------------------------------------------------------------
n1) Ahora muestra por consola que letras NO se repiten y muestra tu nombre sin esas letras
-------------------------------------------------------------*/
console.log(`Resultado ejercicio n1: \n`);


console.log("\n--------------------------------\n");

/* --------------- ------- --------------- */
/* --------------- NUMBERS --------------- */
/* --------------- ------- --------------- */

console.log("\n\n*********************************\n*********************************\n\n------------ NUMBERS ------------\n\n*********************************\n*********************************\n\n\n");

/*-------------------------------------------------------------
a) Que hora es? Declara la hora como número y devuelvela como String
-------------------------------------------------------------*/
console.log(`Resultado ejercicio a: \n`);

var now = new Date();
console.log(now);
console.log("\n--------------------------------\n");

/*-------------------------------------------------------------
b) Nono, que hora exactamente? Dime la hora sin minutos!
-------------------------------------------------------------*/
console.log(`Resultado ejercicio b: \n`);


console.log("\n--------------------------------\n");
/*-------------------------------------------------------------
c) Ahora, declara tu hora y muéstrala redondeada.
-------------------------------------------------------------*/
console.log(`Resultado ejercicio c: \n`);


console.log("\n--------------------------------\n");

/*-------------------------------------------------------------
d) Hagamos una calculadora. Primero, la suma. Crea variables con valores distintos y súmalos.
-------------------------------------------------------------*/
console.log(`Resultado ejercicio d: \n`);


console.log("\n--------------------------------\n");
/*-------------------------------------------------------------
d1) Añade la resta...
-------------------------------------------------------------*/
console.log(`Resultado ejercicio d1: \n`);


console.log("\n--------------------------------\n");
/*-------------------------------------------------------------
d2) La multiplicación...
-------------------------------------------------------------*/
console.log(`Resultado ejercicio d2: \n`);


console.log("\n--------------------------------\n");
/*-------------------------------------------------------------
d3) Y, por ultimo, la división.
-------------------------------------------------------------*/
console.log(`Resultado ejercicio d3: \n`);


console.log("\n--------------------------------\n");
/*-------------------------------------------------------------
d4) Ahora, intenta multiplicar un número por una string, que devuelve?
-------------------------------------------------------------*/
console.log(`Resultado ejercicio d4: \n`);


console.log("\n--------------------------------\n");
/*-------------------------------------------------------------
e) Podemos controlar este error con un condicional if?
-------------------------------------------------------------*/
console.log(`Resultado ejercicio e: \n`);


console.log("\n--------------------------------\n");
