//a) Primero, creamos una función que nos cree un saludo, pasa tu nombre como parámetro y devuélvelo por la consola.

function f(myName) {

	console.log("Hello " + myName);
}

f("Jose Luis");

//b) Intenta retornar los valores en lugar de usar console.log

function f1(myName) {

	return "Hello " + myName;
}

console.log(f1("Jose Luis"));


//c) Ahora, añade tu edad y concaténala al return

function f2(myName, age) {

	return "Hello " + myName + ", you are " + age + " years old";
}

console.log(f2("Jose Luis", 36));

//d) Iguala tu función a una variable y ejecútala

var f3 = function (myName, age) {

	return "Hello " + myName + ", you are " + age + " years old";
}

console.log(f3("Jose Luis", 36));


//e) Ahora declara otra funcion que devuelva tu edad y asigna su resultado a otra variable, intenta imprimir sus dos resultados concatenados.

function getName() {
	return "Jose Luis";
}


function getAge() {
	return 36;
}

var nombre = getName();
var edad = getAge();

console.log(nombre + " " + edad);

//e1) Intenta sumarle al resultado de tu segunda funcion, un numero random del 0-10 y conviertelo todo a un solo string.

console.log(nombre + " " + (edad + (Math.round(Math.random() * (10 - 0)) + 0)).toString());

//f) Ahora, todas las variables deberían ser pasadas como parámetro a las funciones.

nombre = "Tony Stark";
edad = 36;

function name(name) {
	return name;
}


function age(age) {
	return age;
}

console.log(name(nombre) + " " + age(edad));

//g) Intenta englobar todas las funciones en una sola funcion padre, el return de dicha función padre deberá ser la llamada a las funciones hijas

function father() {
	return name(nombre) + " " + age(edad);
}

console.log(father());

//h) Haz otra función hija que solo devuelva un número random, ese número random será el argumento que se pasará como parámetro a la función age()

function getRandomNumber(min, max) {
	return Math.round(Math.random() * (max - min)) + min;
}

function father1() {
	return name(nombre) + " " + age(getRandomNumber(0, 10));
}

console.log(father1());

//i) Ahora, limita el random de 0 a 50, Muestra un mensaje si el output age es < 20 y otro si es de 21 - 50

function father2() {
	var edad = age(getRandomNumber(0, 50));

	if (edad < 20)

		return name(nombre) + " " + edad + " Sure you're Tony Stark?";

	else if ((21 <= edad) && (edad <= 50))

		return name(nombre) + " " + edad + " hi, you are Tony Stark";

	else
		return name(nombre) + " anyone know what you are ;)";
}

console.log(father2());

//j) Al return de la función name(), concaténale otro mensaje

function name1(name) {
	return name + " aka IRONMAN";
}

console.log(name1(nombre));

//k) Ahora, modifica el return de la función padre para que devuelva sus datos en un mensaje amigable

function father3() {
	var edad = age(getRandomNumber(0, 50));

	if (edad < 20)

		return "The first function returns: " + name1(nombre) + " The second function returns: " + edad + " Sure you're Tony Stark?";

	else if ((21 <= edad) && (edad <= 50))

		return "The first function returns: " + name1(nombre) + " The second function returns: " + edad + " hi, you are Tony Stark";
}

console.log(father3());

//l) Modifica la primera función y la función padre para, si el parámetro introducido no es tu nombre, no siga con la segunda llamada

function father4(nombre) {
	var edad = "";

	if (name(nombre) === "IRONMAN")

		var edad = age(getRandomNumber(0, 50));
	else {
		return "The first function returns: " + name(nombre) + "... You are not IRONMAN";
	}

	if (edad < 20)

		return "The first function returns: " + name(nombre) + " The second function returns: " + edad + " Sure you're Tony Stark?";

	else if ((21 <= edad) && (edad <= 50))

		return "The first function returns: " + name(nombre) + " The second function returns: " + edad + " hi, you are Tony Stark";
}

console.log(father4("IRONMAN"));

//m) Vamos a complicarlo un poco... El número random debería generarse en otra función separada del padre. Retorna a la funcion padre y concaténalo en el return padre.

//ya está hecho
function father5(nombre) {
	var edad = "";

	if (name(nombre) === "IRONMAN")

		var edad = age(getRandomNumber(0, 50));
	else {
		return "The first function returns: " + name(nombre) + "... You are not IRONMAN";
	}

	if (edad < 20)

		return "The first function returns: " + name(nombre) + " The second function returns: " + edad + " Sure you're Tony Stark?";

	else if ((21 <= edad) && (edad <= 50))

		return "The first function returns: " + name(nombre) + " The second function returns: " + edad + " hi, you are Tony Stark";
}

console.log(father5("IRONMAN"));

//n) Refactorizemos nuestro código dejando todas las funciones separadas del padre, éste último se encargará de llamarlas todas y mostrar sus resultados.


function mostrarMensajes(nombre, edad) {
	if (nombre !== "IRONMAN")

		return "The first function returns: " + nombre + "... You are not IRONMAN";

	if (edad < 20)

		return "The first function returns: " + nombre + " The second function returns: " + edad + " Sure you're Tony Stark?";

	else if ((21 <= edad) && (edad <= 50))

		return "The first function returns: " + nombre + " The second function returns: " + edad + " hi, you are Tony Stark";
}

function father6(nombre) {
	var edad = age(getRandomNumber(0, 50));
	var nombre = name(nombre);
	return mostrarMensajes(nombre, edad);

}

console.log(father6("IRONMAN"));

//ñ) Intenta hacer push de todos los resultados de las funciones a una array declarada en el padre, muestra los resultados de esta array como siempre.

function father7(nombre) {
	var edad = age(getRandomNumber(0, 50));
	var nombre = name(nombre);
	var result = [];
	result.push(nombre);
	result.push(edad);
	result.push(mostrarMensajes(nombre, edad));
	return result;
}

console.log(father7("IRONMAN"));

//o) Crea una funcion que llame a nuestra funcion father(), ésta, a parte de llamarla, deberá hacer otro push "hello from the dark side..." a la array que crea father(). Muestra toda la array completa.

function superFather(name) {
	var result = [];
	result = father7(name);
	result.push("Hello from the dar side");
	return result;
}

console.log(superFather("IRONMAN"));

//p) Llama a ésta nueva función dos veces, muestra sus resultados por pantalla y compara sus randomNums, mostrando un mensaje indicando cual es mayor. El nombre pasado por parámetro también deberá ser random entre una array de nombres, con lo cual, también deberás refactorizar las funciones hijas.

function mostrarMensajes1(nombre, edad) {
	if (edad < 20)

		return "The first function returns: " + nombre + " The second function returns: " + edad + " Sure you're " + nombre + "?";

	else if ((21 <= edad) && (edad <= 50))

		return "The first function returns: " + nombre + " The second function returns: " + edad + " hi, you are " + nombre;
}

function father8(nombre) {
	var edad = age(getRandomNumber(0, 50));
	var nombre = name(nombre);
	var result = [];
	result.push(nombre);
	result.push(edad);
	result.push(mostrarMensajes1(nombre, edad));
	return result;
}

function superFather(name) {
	var result = [];
	result = father8(name);
	result.push("Hello from the dar side");
	return result;
}

function superSuperFather() {
	var names = ["IRONMAN", "HULK", "SUPERMAN", "CAPITAN AMERICA"];
	var result1 = superFather(names[getRandomNumber(0, 3)]);
	var result2 = superFather(names[getRandomNumber(0, 3)]);
	console.log(result1);
	console.log(result2);
	console.log("");
	if (result1[1] < result2[1])

		console.log("El mayor es: " + result2[0]);

	else

		console.log("El mayor es: " + result1[0]);

}

superSuperFather();


//p1) En lugar de retornar los valores como una array, prepara tus funciones para que devuelvan los resultados como OBJECTS. Muestra por pantalla los objetos sin estilizar el output.

function superFather1(name) {
	var result = [];
	result = father8(name);
	var object = {

		name: result[0],
		age: result[1],
		message: result[2]
	};
	return object;
}


function superSuperFather1() {
	var names = ["IRONMAN", "HULK", "SUPERMAN", "CAPITAN AMERICA"];
	var result1 = {};
	var result2 = {};
	result1 = superFather1(names[getRandomNumber(0, 3)]);
	result2 = superFather1(names[getRandomNumber(0, 3)]);
	console.log(result1);
	console.log(result2);
	console.log("");
	if (result1.age < result2.age)

		console.log("El mayor es: " + result2.name);

	else

		console.log("El mayor es: " + result1.name);

}

superSuperFather1();

//p2) Muestra los resultados de los OBJECTS recorriendolos y mostrando los valores de una forma amigable.

function superSuperFather2() {
	var names = ["IRONMAN", "HULK", "SUPERMAN", "CAPITAN AMERICA"];
	var result1 = {};
	var result2 = {};
	result1 = superFather1(names[getRandomNumber(0, 3)]);
	result2 = superFather1(names[getRandomNumber(0, 3)]);
	for (var p in result1) {
		console.log(p + " => " + result1[p]);
	}
	console.log("");
	console.log("");
	for (var p in result2) {
		console.log(p + " => " + result2[p]);
	}
	console.log("");
	if (result1.age < result2.age)

		console.log("El mayor es: " + result2.name);

	else

		console.log("El mayor es: " + result1.name);

}

superSuperFather2();