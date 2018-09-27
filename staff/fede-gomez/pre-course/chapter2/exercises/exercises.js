/* --------------- ------- --------------- */
/* --------------- OBJECTS --------------- */
/* --------------- ------- --------------- */
console.log("\n\n*********************************\n*********************************\n\n------------ OBJECTS ------------\n\n*********************************\n*********************************\n\n\n");

//declaramos el objeto en el que basaremos los ejercicios
var avenger = {
    name : "Tony",
    class : "VII",
    id : 1
};

/*----------------------------------------------*/
//a) Escribe una funcion que liste los nombres de propiedad del objeto (Puedes usar el objeto creado ms arriba)
/*----------------------------------------------*/

console.log(`Resultado ejercicio a: \n`);
var getProperties = (obj) => {
  var properties = [];
  for (let property in obj){
    properties.push(property);
  }
  return properties;
};
console.log(getProperties(avenger));
console.log("\n--------------------------------\n");

/*----------------------------------------------*/
//b) Ahora, crea una funcion que liste solo los valores de las propiedades.
/*----------------------------------------------*/
console.log(`Resultado ejercicio a: \n`);
var getPropertiesValues = (obj) => {
  var string = '';
  for (let property in obj){
    string += `${property}: ${obj[property]} `;
  }
  console.log(string);
};
getPropertiesValues(avenger);

console.log("\n--------------------------------\n");

/*----------------------------------------------*/
//c) Cambia el valor de la propiedad class por "XI" y asegurate de que los cambios se han efectuado.
/*----------------------------------------------*/
console.log(`Resultado ejercicio c: \n`);

avenger['class'] = "XI"
console.log(avenger);

console.log("\n--------------------------------\n");

/*----------------------------------------------*/
//d) Ahora, elimina la propiedad ID y asegura los cambios.
/*----------------------------------------------*/
console.log(`Resultado ejercicio d: \n`);

delete avenger['id'];
console.log(avenger);

console.log("\n--------------------------------\n");

/*----------------------------------------------*/
//e) Aade una nueva propiedad, por ejemplo city y dale un valor.
/*----------------------------------------------*/
console.log(`Resultado ejercicio e y e1: \n`);

avenger['city'] = 'New York';
console.log(avenger['city']);

console.log("\n--------------------------------\n");

/*----------------------------------------------*/
//f) Lista el numero de propiedades que contiene el objeto.
/*----------------------------------------------*/
console.log(`Resultado ejercicio f: \n`);

console.log(Object.keys(avenger).length);

console.log("\n--------------------------------\n");

/*----------------------------------------------*/
//g) Cambia la propiedad name por fullName.
/*----------------------------------------------*/
console.log(`Resultado ejercicio g: \n`);

avenger.fullName = avenger.name;
delete avenger.name;
console.log(avenger);

console.log("\n--------------------------------\n");

/*----------------------------------------------*/
//i-j) Crea un constructor de objetos llamado "Avenger", al cual le pasarás
//     ciertos parametros, creando una instancia del objeto con las propiedades
//     de nuestro objeto creado. (Échale un ojo a la referencia de abajo.)
/*----------------------------------------------*/
console.log(`Resultado ejercicios i/j: \n`);

let avengers = [];

function Avenger(fullName, classRoom, city, job, studies,markAv) {
    this.fullName = fullName;
    this.classRoom = classRoom;
    this.city = city;
    this.job= job;
    this.studies= studies;
    this.markAv = markAv;
  	avengers.push(this);
  	this.listProperties = function(){
        //console.log(this.fullName + ', ' + this.city + ', etc.');
      	for(let prop in this){
          console.log(this[prop]);
        }
    }
}

var tonyStark = new Avenger ("Tony Stark", "XI", "NYC", "Scientist", "MIT", 10)

var thor = new Avenger ("Thor", "XX", "Asgard", "Guardian", "none", 20);
console.log(thor);

console.log("\n--------------------------------\n");

//k) Crea una propiedad del objeto que liste automáticamente los valores de la instancia.
/*----------------------------------------------*/
console.log(`Resultado ejercicio k: \n`);

//anadimos this.listProperties: ... en el constructor anterior... (ver más arriba)
//la llamamos:
thor.listProperties();

console.log("\n--------------------------------\n");

/*----------------------------------------------*/
//l) Ahora, crea una función que solo liste los nombres de los objetos instanciados
/*----------------------------------------------*/
console.log(`Resultado ejercicio l: \n`);

//console.log(avengers);

function showAvengersNames() {
	avengers.forEach(function(hero){
    console.log(hero.fullName);
  });
}

showAvengersNames();

console.log("\n--------------------------------\n");

/*----------------------------------------------*/
//m) Crea varios objetos con las mismas propiedades,
//   como por ejemplo la ciudad, crea una función para que solo liste los
//   nombres de los Avengers que sean de la misma ciudad y cuantos hay.
/*----------------------------------------------*/
console.log(`Resultado ejercicio m: \n`);

//creamos varios heroes
var loki = new Avenger ("Loki", "XIX", "Asgard", "Fool", "none", 12);
var odin = new Avenger ("Odin", "XXI", "Asgard", "God", "none", 1000);

function showAvengersFromCity(avengers, city){
  let result;
  avengers.forEach(function(avenger){
    /*if (avenger.city === city) {
    	console.log(avenger.fullName);
    }*/
    result = avengers.filter(avenger => avenger.city === city);
  });
  result.forEach(function(avenger){
    console.log(avenger.fullName);
  });
  console.log('There are ' + result.length + ' Avengers from ' + city + '.');
}

showAvengersFromCity(avengers, "Asgard");

console.log("\n--------------------------------\n");
