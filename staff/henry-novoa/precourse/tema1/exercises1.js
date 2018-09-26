
//Strings
//a) Puedes contar cuantas letras tiene tu nombre?

var myName = "Henry Novoa";
var myAge = 28;
var myCity = "Barcelona";
function showLetters(name){
	var length = name.length - 1; 
	console.log("My name has " + length + " letters");
}
showLetters(myName);
//b) Añade tu apellido e indica en que posición del string empieza (prueba a buscar el espacio entre el nombre y el apellido):
function space(name) {
	var position = 0;

	/*for (var i = 0; i < name.length ; i++){
		if(name[i] === " "){
			position = i +1;
		}
	}*/
	position=name.indexOf(" ") + 1;

	console.log("The last name starts in the "+position+" character");

}

space(myName);



//c) Ahora, con tu apellido y nombre en la misma variable, muestra solo el nombre (lo que haya antes del espacio):

function firstName(name){
	var position = 0;
	position=name.indexOf(" ") + 1;
	console.log("My first name is "+name.slice(0,position));
}firstName(myName);
//d) Ahora, solo tu apellido.
function lastName(name){
	var position = 0;
	position=name.indexOf(" ") + 1;
	console.log("My last name is "+name.slice(position));
}lastName(myName);

//d1) Iguala el resultado a una variable nueva e imprímela por pantalla.
function longName(name){
	var position = 0;
	position=name.indexOf(" ") + 1;
	var newName = name.slice(position) + ", ";
	newName = newName.concat(name);
	console.log(newName);
}longName(myName);
//e) Ahora, reemplaza tu nombre por "Mr/Ms" y vuelve a mostrar la variable con los cambios.
function mrName(name){
	var newName = "";
	newName = name.replace("Henry","Mr.")
	console.log("Hello, " +newName );
}mrName(myName)

//f)Selecciona tu apellido y transfórmalo a MAYÚSCULAS.
function lastNameCapital(name){
	var position = 0;
	var newName = "";
	position=name.indexOf(" ") + 1;
	newName = name.slice(position).toUpperCase();
    console.log("My last name is "+newName);
}lastNameCapital(myName)

//g) Ahora declara una variable nueva e igualala a la anterior variable sumándole, además, un mensaje.
function newMessage(name){
	var message = " is awesome";
	console.log(name.concat(message));
}newMessage(myName)

//h) Ahora, puedes seleccionar la inicial de tu nombre y apellido y mostrarlas por pantalla?
function initials(name){
	var newName="";
	var position = 0;
	position=name.indexOf(" ") + 1;
	newName= name.charAt(0) + "." + name.charAt(position) + ".";
	console.log(newName);
}initials(myName)

//Arrays

//a) Declara tu nombre completo en una array y muéstralo por pantalla separando cada letra por "/"
function separateString(name){
	var result="";
	var newName = name.replace(/ /g,'');
	newName.split("");

	for(var i = 0; i< name.length - 1; i++){
		result= result + newName[i] + "/";
	}
	console.log(result);
}separateString(myName)

//b) Ahora solo selecciona tu apellido y muestra cada letra separada por "|"
function lastNameArray(name) {
	var position = 0;
	var newName = ""; 
	var result = "";
	position=name.indexOf(" ") + 1;
	newName = name.slice(position);
	newName.split("");
	for(var i = 0; i< newName.length; i++){
		result= result + newName[i] + "|";
	}
	console.log(result);
}lastNameArray(myName)
//c) Ahora muestra cada letra de tu nombre con su posición (necesitarás un bucle for)
function firstNamePosition (name){
	var position = 0;
	var newName ="";
	var result = [];
	
	position=name.indexOf(" ") + 1;
	var newName = name.slice(0,position);
	newName.split("");
	for(var i = 0; i< newName.length - 1; i++){
		var j = i +1
		result[i] = j+ "º " + newName[i];  
	}
	console.log(result);
}firstNamePosition(myName)
//d)Como en el ejercicio anterior, pero seleccionando tu apellido
function lastNamePosition(name){
	var position = 0;
	var newName ="";
	var result = [];
	
	position=name.indexOf(" ") + 1;
	newName = name.slice(position)
	newName.split("");
	var j = position;
	for(var i = 0; i< newName.length; i++){
		result[i] = j+ "º " + newName[i];  
		j++;
	}
	console.log(result);
}lastNamePosition(myName)

//e) Puedes indicarme las iniciales de tu nombre y apellido? Como en el ejercicio h de la sección de strings
function initialsArray(name){
	var position = 0;
	var newName ="";
	var result = [];
	position=name.indexOf(" ") + 1;
	newName= name.charAt(0) + "." + name.charAt(position) + ".";
	newName.split(".");
	console.log(newName);
}initialsArray(myName)
//f) Ahora, reformula la array, introduciendo tu nombre en primera posición, tu apellido en segunda, y además añade en otra posicion tu edad. Muestra por pantalla solo tu nombre y tu edad en un solo mensaje.
function ageArray(name,age){
	var position = 0;
	var firstName ="";
	var lastName=""; 
	var result = [];

	position=name.indexOf(" ") + 1;
	firstName = name.slice(0,position);
	lastName = name.slice(position);
	result[0] = firstName;
	result[1] = lastName;
	result[2] = age;

	return result;

}ageArray(myName, myAge)

//g) Prepara una función para añadir tu City a la array, muestra un mensaje mostrando el contenido de toda la array, así aseguraremos los cambios.

function myCityAdd(myArray,city){
       var result = myArray;
       result.push(city);
       console.log("City added to the Array! => "+ result);
      
}myCityAdd(ageArray(myName, myAge),myCity)

//h) Crea ahora, una funcion para eliminar la variable City y asegura los cambios.

function myCityDelete (myArray){
	var result = myArray;
	result.pop();
	console.log("City deleted! => " + result);
}myCityDelete(myCityAdd(ageArray(myName, myAge),myCity))
 
//j) Ahora, elimina el nombre y asegura los cambios Resources:
function deleteName(myArray){
	var result = myArray;
	console.log(myArray)
	result.shift()
	console.log("Name deleted! => " + result)

}deleteName(myCityAdd(ageArray(myName, myAge),myCity))
//k) Quiero volver a introducir mi nombre pero si lo introduzco utilizando push() estará en la última posición, como podria hacer para introducirlo en la primera posición?

function insertName(myArray/*, name*/){
	var result = myArray;
	console.log(myArray);
	console.log(result);
	//result.splice(0,0,name);
	//console.log("Name added! =>" + result);
}insertName(myCityAdd(ageArray(myName, myAge),myCity))