//ARRAYS

//a) Declara tu nombre completo en una array y muéstralo por pantalla separando cada letra por "/"

var nombre = ['jose', ' ', 'luis', ' ', 'juste'];

console.log(nombre.filter(x => x !== " ").join("").split("").join("/"));

//b) Ahora solo selecciona tu apellido y muestra cada letra separada por "|"

console.log(nombre.slice(4, nombre.length).join("").split("").join("|"));

//c) Ahora muestra cada letra de tu nombre con su posición (necesitarás un bucle for)

var output = "";

for (var i = 0; i < nombre.slice(0, 3).join("").split("").length; i++) {
	output += i + 1 + "º " + nombre.slice(0, 3).join("").split("")[i] + ", ";
}
console.log(output);

//d)Como en el ejercicio anterior, pero seleccionando tu apellido

output = "";
for (var i = nombre.join("").indexOf("juste"); i < nombre.join("").split("").length; i++) {
	output += i + 1 + "º " + nombre.join("").split("")[i] + ", ";
}
console.log(output);

//e) Puedes indicarme las iniciales de tu nombre y apellido? Como en el ejercicio h de la sección de strings

console.log(nombre[0].toUpperCase().charAt(0) + "." + nombre[4].toUpperCase().charAt(0));

//f) Ahora, reformula la array, introduciendo tu nombre en primera posición, tu apellido en segunda, y además añade en otra posicion tu edad. Muestra por pantalla solo tu nombre y tu edad en un solo mensaje.

var newName = new Array;

newName.push(nombre[0] + " " + nombre[2]);
newName.push(nombre[4]);
newName.push(36);

console.log("My name is " + newName[0] + " and iam " + newName[2] + " years old");

//g) Prepara una función para añadir tu City a la array, muestra un mensaje mostrando el contenido de toda la array, así aseguraremos los cambios.

function addCity(city) {
	newName.push(city);
	console.log("City added to array! => " + newName.join(","));
}

addCity("Tenerife");

//h) Crea ahora, una funcion para eliminar la variable City y asegura los cambios.

function deleteCity() {
	newName.pop();
	console.log("City deleted! => " + newName.join(","));
}

deleteCity("Tenerife");

//j) Ahora, elimina el nombre y asegura los cambios Resources:

newName.shift();
console.log("Name deleted! => " + newName.join(","));

//k) Quiero volver a introducir mi nombre pero si lo introduzco utilizando push() estará en la última posición, como podria hacer para introducirlo en la primera posición?

newName.splice(0, 0, "jose luis");
console.log("Name added! => " + newName.join(","));

//l) Ahora, declara una array con los números del 0 a 10 y muestra cada número multiplicado por dos.

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(numbers.map(x => x * 2).join(","));

//l1) Reformula la función para que puedas especificar por cual número debería multiplicar cada elemento de la array.

Array.prototype.MultiplyBySpecific = function (x) {
	console.log(this.map(n => n * x).join(","));
}

numbers.MultiplyBySpecific(3);

//m) Podrías mostrarlos en el orden inverso?

console.log(numbers.sort((a, b) => { return b - a }));

//n) Puedes indicarme que letras se repiten de tu nombre y cuantas veces?

var dictionary = {};

var filter = nombre.slice(0, 3).filter(x => x !== " ").join("").split("");

filter.map(x => { dictionary[x]; dictionary[x] = 0; });

filter.forEach(n => {

	dictionary[n]++;

});

for (p in dictionary) {
	if (dictionary[p] > 1) {
		console.log(nombre.slice(0, 3).join("") + ", the letter " + p + " => " + dictionary[p] + " times");
	}
}

//n1) Ahora muestra por consola que letras NO se repiten y muestra tu nombre sin esas letras

var joined = nombre.slice(0, 3).join("");
var notRepeated = [];

for (p in dictionary) {
	if (dictionary[p] === 1) {
		joined = joined.replace(p, "");
		notRepeated.push(p);
	}
}

console.log(nombre.slice(0, 3).join("") + ", the letters => " + notRepeated.join(",") + " are not repeated, the name is => " + joined);


//NUMBERS

//a) Que hora es? Declara la hora como número y devuelvela como String

var time = 13.49

console.log("It´s " + time.toString() + " of morning");

//b) Nono, que hora exactamente? Dime la hora sin minutos!

console.log("It´s " + Math.trunc(time).toString() + " of morning");

//c) Ahora, declara tu hora y muéstrala redondeada.

console.log(Math.round(time).toString());

//d) Hagamos una calculadora. Primero, la suma. Crea variables con valores distintos y súmalos.

var num1 = 7;
var num2 = 10;

console.log("The sum is " + (num1 + num2));

//d1) Añade la resta...

console.log("The rest is " + (num1 - num2));

//d2) La multiplicación...

console.log("The multiplicación is " + (num1 * num2));

//d3) Y, por ultimo, la división.

console.log("The split is " + (num1 / num2));

//d4) Ahora, intenta multiplicar un número por una string, que devuelve?

console.log(10 * "hour");

//e) Podemos controlar este error con un condicional if?

if (isNaN(10 * "hour")) {
	console.log("You can't do this operation!");
}