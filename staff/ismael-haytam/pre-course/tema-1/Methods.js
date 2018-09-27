
/*
    -   Methods ---------------------------------------------------------
*/


// a) Puedes contar cuantas letras tiene tu nombre?

let countString = name => console.log(name.split(' ').join('').length);

countString('Ismael Haytam');




// b) Añade tu apellido e indica en que posición del string empieza.

let surnamePosition = fullName => fullName.split(' ').forEach( (s, i) => (s === 'Tanane') ? console.log(i + 1) : '');

surnamePosition('Ismael Haytam Tanane');





// c & d1 ) Ahora, con tu apellido y nombre en la misma variable, muestra solo el nombre:

function printName(fullName) {
    let arrayNames = fullName.split(' ');
    let name = arrayNames[0] + ' ' + arrayNames[1];
    return console.log(name);
}

printName('Ismael Haytam');





// d) Ahora, solo tu apellido.

let printSurname = fullName => console.log(fullName.split(' ')[2]);

printSurname('Ismael Haytam Tanane');





// e) Ahora, reemplaza tu nombre por "Mr/Ms" y vuelve a mostrar la variable con los cambios.

let salute = fullName => console.log(`Hello, ${fullName.replace('Ismael Haytam', 'Mr.')}`);

salute('Ismael Haytam Tanane');





// f) Selecciona tu apellido y transfórmalo a MAYÚSCULAS.

let surnameToUppercase = (fullName) => console.log(fullName.split(' ')[2].toUpperCase());

surnameToUppercase('Ismael Haytam Tanane');





// g) Ahora declara una variable nueva e igualala a la anterior variable sumándole, además, un mensaje

function awesome(fullName) {
    let arrayames = fullName.split(' ');
    arrayames[2] = 'is awesome';
    return console.log(arrayames.join(' '));
}

awesome('Ismael Haytam Tanane');





// h) Ahora, puedes seleccionar la inicial de tu nombre y apellido y mostrarlas por pantalla?

function initialOfTheFullName (fullName) {
    let initials = [];
    fullName.split(' ').forEach( s => initials.push(s.substr(0, 1).toUpperCase()));
    return console.log(initials.join('.'));
}

initialOfTheFullName('Ismael Haytam Tanane');





/*
    -   Arrays ---------------------------------------------------------
*/

// a) Declara tu nombre completo en una array y muéstralo por pantalla separando cada letra por "/"

let separateLettersBySlash = fullName  => console.log(fullName.split(' ').join('').toUpperCase().split('').join('/'));

separateLettersBySlash('Ismael Haytam Tanane');





// b) Ahora solo selecciona tu apellido y muestra cada letra separada por "|"

let separateSurnameBySlash = fullName =>  console.log(fullName.split(' ')[2].toUpperCase().split('').join('/'));

separateSurnameBySlash('Ismael Haytam Tanane');





// c) Ahora muestra cada letra de tu nombre con su posición

function positionOfEachLetterOfTheName (fullName) {
    let result = [];
    let name = fullName.replace('Tanane', '');
    name.split(' ').join('').toUpperCase().split('').forEach((l, i) => result.push(`${i + 1}º ${l}`));
    return console.log(result.join(', '));
}

positionOfEachLetterOfTheName('Ismael Haytam Tanane');






// d) Como en el ejercicio anterior, pero seleccionando tu apellido

function positionOfEachLetterOfTheSurname (fullName) {
    let result = [];
    fullName = fullName.replace('Ismael Haytam', '');
    fullName.trim().toUpperCase().split('').forEach((l, i) => result.push(`${i + 1}º ${l}`));
    return console.log(result.join(', '));
}

positionOfEachLetterOfTheSurname('Ismael Haytam Tanane');





// f) Ahora, reformula la array, introduciendo tu nombre en primera posición, tu apellido en segunda, y además añade en otra posicion tu edad...

let anotherSalute = info => console.log(`My name is ${info[0].toUpperCase()} and i'm ${info[2]} years old`);

anotherSalute(['Ismael Haytam', 'Tanane', 22]);





// g) Prepara una función para añadir tu City a la array, muestra un mensaje mostrando el contenido de toda la array...

function pushElementToArray(infos, city) {
    infos.push(city);
    return console.log(`City added to array! => ${infos.join(', ')}`);
}

pushElementToArray(['Ismael Haytam', 'Tanane', 22], 'Girona');





// h) Crea ahora, una funcion para eliminar la variable City y asegura los cambios.

function deleteElementFromArray(infos) {
    infos.forEach((info, i) => (info === 'Girona') ? infos.splice(i, 1) : '');
    return console.log(`City deleted! => ${infos.join(', ')}`);
}

deleteElementFromArray(['Ismael Haytam', 'Tanane', 22, 'Girona']);





// j) Ahora, elimina el nombre y asegura los cambios

function deleteNameFromArray(infos) {
    infos.forEach((info, i) => (info === 'Ismael Haytam') ? infos.splice(i, 1) : '');
    return console.log(`Name deleted! => ${infos.join(', ')}`);
}

deleteNameFromArray(['Ismael Haytam', 'Tanane', 22, 'Girona']);





// k) Quiero volver a introducir mi nombre, como podria hacer para introducirlo en la primera posición?

function unshiftName(infos, name) {
    infos.unshift(name);
    return console.log(`Name added in the first position! => ${infos.join(' ')}`);
}

unshiftName(['Tanane', 22, 'Girona'], 'Ismael Haytam');





// l) Ahora, declara una array con los números del 0 a 10 y muestra cada número multiplicado por dos.

let multiplyNumber = numbers => console.log(numbers.map(number => (number * 2)).join(' '));

multiplyNumber([0,1,2,3,4,5,6,7,8,9,10]);





// var num = 3; // cada número se multiplicará por 3

let multiplyWithSpecificNumber = (numbers, mul) => console.log(numbers.map(number => (number * mul)).join(' '));

multiplyWithSpecificNumber([0,1,2,3,4,5,6,7,8,9,10], 3);





// m) Podrías mostrarlos en el orden inverso?

let reverseArray = numbers => console.log(numbers.reverse().join(' '));

reverseArray([0,1,2,3,4,5,6,7,8,9,10]);





// n1) Puedes indicarme que letras se repiten de tu nombre y cuantas veces?

function countRepetitions(name) {
    let result = [];
    name.toUpperCase().split(' ').map(word => {
        word.split('').forEach(letter => {
            result.push(`'${letter}' => ${name.match(new RegExp(letter, 'gi')).length} times`);
            result = [...new Set(result)];
        });
    });
    return console.log(result.join(' '));
}

countRepetitions('Ismael Haytam Tanane');





// n1) Ahora muestra por consola que letras NO se repiten y muestra tu nombre sin esas letras

function showUnreperited(name) {
    let result = [];
    name.toUpperCase().split(' ').map(word => word.split('').forEach(letter => {
        name.match(new RegExp(letter, 'gi')).length === 1 ? result.push(letter) : '';
    }));
    return console.log(`The letters => ${result.join(', ')}  - the name is => ${result.join('')}`);
}

showUnreperited('Ismael Haytam Tanane');




/*
    -   Numbers ---------------------------------------------------------
*/

// a) Que hora es? Declara la hora como número y devuelvela como String

let currentTime = time => console.log(`I'ts ${time.toString()} of morning`);

currentTime(10.45);





// b) Nono, que hora exactamente? Dime la hora sin minutos!

let justHour = time => console.log(`I'ts ${parseInt(time)} of morning`);

justHour(10.45);





// c) Ahora, declara tu hora y muéstrala redondeada.

let currentHour = date => console.log(Math.round(Number(`${date.getHours()}.${date.getMinutes()}`)));

currentHour(new Date());





// d, d1, d2, d3) La suma, resta, multiplicación y división.

let calculate = (n1, n2) => console.log(`sum, rest, mult and div of ${n1} and ${n2} is ${n1 + n2}, ${n1 - n2}, ${n1 * n2} and ${n1 / n2}`);

calculate(5, 20);





// d4) Ahora, intenta multiplicar un número por una string, que devuelve?

console.log(50 * '20p'); // devuelve : Not a Number (NaN)





// e) Podemos controlar este error con un condicional if?

let possibleSolution = (n1, n2)  => console.log((Number(n1) && Number(n2)) ? n1 * n2 : 'You can\'t do this operation!');

possibleSolution(10, 'hour');