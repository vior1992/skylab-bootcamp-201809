
/*
    -   Functions ---------------------------------------------------------
*/

// a) Primero, creamos una función que nos cree un saludo...

let hello = (name) => console.log(`Hello ${name}`);

hello('Ismael Haytam');




// b) Intenta retornar los valores en lugar de usar console.log

let returnHello = (name) => `Hello ${name}`;

console.log(returnHello('Ismael Haytam'));




// c) Ahora, añade tu edad y concaténala al return

let concatenateAge = (name, age) => `Hello ${name}, you're ${age} years old.`;

console.log(concatenateAge('Ismael Haytam', 22));




// d) Iguala tu función a una variable y ejecútala

console.log('I did it in the previous exercises');




// e) Ahora declara otra funcion que devuelva tu...

let myName = (name) => name;
let myAge = (age) => age;

console.log(`${myName('Ismael Haytam')} ${myAge(22)}`);




// e1) Sumarle al resultado de tu segunda funcion, un numero random del 0-10...

console.log(`${myName('Ismael Haytam')} ${myAge(22) + Math.floor((Math.random() * 10) + 1)}`);




// f) Ahora, todas las variables deberían ser pasadas como parámetro a las funciones.

console.log('I did it in the previous exercises');




// g) Intenta englobar todas las funciones en una sola funcion padre

function global() {
    let name = myName('Ismael Haytam');
    let age = myAge(22);
    return console.log(`${name} ${age}`);
}

global();




// h) Haz otra función hija que solo devuelva un número random ==> age()...

function global2() {
    let name = myName('Ismael Haytam');
    let random = () => Math.floor(Math.random() * (75 - 18) + 18);
    let age = myAge(random());
    return console.log(`${name} ${age}`);
}

global2();



//i) Limita el random de 0 a 50, si el output age es < 20 y otro si es de 21 - 50

function limitRandom() {
    let random = () => Math.floor(Math.random() * 100);
    let number = random();
    if (number < 20) console.log(`El número ${number} es menor de 20`);
    if (number >= 21 && number <= 50) console.log(`El número ${number} es entre [21 - 50]`);
    if (number > 50) console.log(`El número ${number} es mayor de 50`);
}

limitRandom();




// j & k, l, m ...) ?????....