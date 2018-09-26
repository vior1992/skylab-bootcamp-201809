//a) Declara tu nombre y muéstralo por consola:
var name = "Henry";
console.log(name);

// b) Declara tu edad y muéstralo por consola:
var age = 28;
console.log(age);

// c) Declara tu nombre, tu apellido y tu edad en un array en diferentes posiciones y muéstrala por consola:
var info = [ "Henry", "Novoa", 28];
console.log(info);

// d) Declara tu nombre y tu edad dentro de un objeto y muéstralo por consola:

var data = {
	name : "Henry Novoa",
    age  : 28

};
console.log("{Name: "+ data.name +", Age: " + data.age + "}");

// e) Ahora utiliza el array que has creado anteriormente para recorrerlo y mostrar una a una todas las posiciones del array.
	for(var i = 0; i < info.length ; i++){
		console.log(info[i]+"\n");
	}

//f) Crea una estructura condicional que imprima el número mayor entre dos números.
//f1) Crea otra condicion else if para contemplar la posibilidad de que los dos números sean iguales:
var num1 = Math.random();
var num2 = Math.random();

if (num1===num2){
  console.log("They are the same number");
}else if(num1<num2){
	console.log(num1);                                                                                                                         
}else{
	console.log(num2);
}	

//g) Crea una array de 5 numeros, y recorrela, mostrando además un mensaje cuando, esté a la mitad, muestre un mensaje 'We are in the middle of loop'.
var numbers= [1,1,2,3,5];
var middle = Math.floor((numbers.length - 1) / 2);
for(var i=0;i < numbers.length; i++){
    console.log(numbers[i]);
    if(i === middle){
    	console.log("We are in the middle of the loop");
       }

}

//g1) Declara tu nombre y tu edad dos variables y crea un condicional para, en caso de no coincidir con tus datos, mostrar un error
var myName = "Henry Novoa";
var myAge = 28;
if(myName != data.name || myAge != data.age ){
	console.log("This is not you!");
}else{
	console.log("Glad to see you again!");
}

//g2) Crea una array, introduce los datos anteriores y unos cuantos más de forma que al recorrer la array, muestre un mensaje cuando encuentre tus datos.
var NamesAndAges=["Carol Rodriguez",21,"Tati Novoa",23,"Henry Novoa", 28, "Merce Mallenco", 25];
for(var i=0;i<NamesAndAges.length; i++){
	if(NamesAndAges[i] != data.name || NamesAndAges[i+1] != data.age ){
		console.log("This is not you!");
	}else{
		console.log("Glad to see you again!");
	}
	i++;
}
