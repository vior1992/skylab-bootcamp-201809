
/*
    -   Objects ---------------------------------------------------------
*/

// a) Escribe una función que liste los nombres de propiedad del objeto.

let listKeysObject = obj => console.log(Object.keys(obj).join(', '));

listKeysObject({name: 'Ismael', class: 'VII', id: 1});




// b) Ahora, crea una función que liste solo los valores de las propiedades.

let listValueObject = obj => console.log(Object.values(obj).join(', '));

listValueObject({name: 'Ismael', class: 'VII', id: 1});




// c) Cambia el valor de la propiedad class por "XI" y asegurate de que los cambios.

function changeValueObject(obj) {
    obj.class = 'XI';
    return console.log(Object.values(obj).join(', '));
}

changeValueObject({name: 'Ismael', class: 'VII', id: 1});




// d) Ahora, elimina la propiedad ID y asegura los cambios.

function deleteKeyObject(obj) {
    delete obj.id;
    return console.log(Object.values(obj).join(', '));
}

deleteKeyObject({name: 'Ismael', class: 'VII', id: 1});




// e) Añade una nueva propiedad, por ejemplo city y dale un valor.

function addKeyObject(obj, city) {
    obj.city = city;
    return console.log(Object.values(obj).join(', '));
}

addKeyObject({name: 'Ismael', class: 'VII', id: 1}, 'Girona');




// f) Lista el numero de propiedades que contiene el objeto.

let numberKeyObject = obj => console.log(Object.keys(obj).length);

numberKeyObject({name: 'Ismael', class: 'VII', id: 1, city: 'Girona'});




// g) Cambia la propiedad name por fullName.

function renameKeyObject(obj) {
    obj['fullName'] = obj.name;
    delete obj.name;
    return console.log(obj.fullName);
}

renameKeyObject({name: 'Ismael Haytam Tanane', class: 'VII', id: 1});




// h + h1 + h2) Lista todas las propiedades del objeto a través de un console.log()

function listObject(obj) {
    obj.country = 'spain';
    obj.job = 'FullStack';
    obj.location = 'Girona';
    return console.log(obj.location);
}

listObject({name: 'Ismael', class: 'VII', id: 1});




// i) Crea un constructor de objetos llamado "Avenger" ... parametros ... instancia.

function Avenger(fullName, classRoom, city, job, studies, markAv) {
    this.fullName = fullName;
    this.classRoom = classRoom;
    this.city = city;
    this.job = job;
    this.studies = studies;
    this.markAv = markAv;
}

let tonyStark = new Avenger ("Tony Stark", "XI", "NYC", "Ingeneer", "MIT", 10);
console.log(tonyStark);




// j) Crea otro objeto y imprime sus propiedades por pantalla.

let otherAvenger = new Avenger ("ECS", "TEST", "NYC", "Ingeneer", "MAT", 80);

console.log(otherAvenger);




// k) Crea una propiedad del objeto que liste automáticamente los valores de la instancia.

function User(fullName, city) {
    this.fullName = fullName;
    this.city = city;
    this.information = () => console.log(`${this.fullName} lives in ${this.city}`);
}

let admin = new User('Ismael Haytam', 'Girona');
admin.information();




// l) Ahora, crea una función que solo liste los nombres de los objetos instanciados.

function listNames(objects) {
    let results = [];
    objects.forEach( obj => results.push(obj['fullName']));
    return console.log(results.join(', '))
}

let guest = new User('Victor Lopez', 'Madrid');

listNames([guest, admin]);





// m) crea una función que liste los nombres de la misma ciudad y cuantos hay.

function filterByCity(objects) {
    let duplicated = [];
    objects.forEach( obj => {
        if (duplicated.includes(obj.city)) return;
            duplicated.push(obj.city);
            let a = objects.filter(obj1 => obj1.city === obj.city);
            let names = [];
            a.forEach(user => names.push(user.fullName));
            console.log(`Are ${a.length} users living in ${obj.city}: ${names.join(', ')}`);
    });
}

let director = new User('Berto romero', 'Girona');
let student = new User('Marta Ortega', 'Madrid');
let secretary = new User('Jordi sanchez', 'Barcelona');

filterByCity([admin, guest, director, student, secretary]);





// n) Créate a ti mismo y crea una función que recoja todas las markAv y muestre la media.

function Average(fullName, markAv) {
    this.fullName = fullName;
    this.markAv = markAv;
}

a1 = new Average('Jordi', 55);
a2 = new Average('Arnau', 7);
a3 = new Average('Marta', 25);
a4 = new Average('Laura', 18);
a5 = new Average('Berto', 9);
a6 = new Average('Mapi', 20);
a7 = new Average('Anna', 16);

function calculateAverage(objects) {
    let total = 0;
    objects.forEach(obj => total += obj.markAv);
    console.log(total / objects.length);
}

calculateAverage([a1, a2, a3, a4]);





// ñ) Ahora, crea una funcion que recoja los avengers en parejas.

function showInPairs(objs) {
    let pairs = objs.reduce((r, obj, i) => (i % 2 === 0 ? r.push([obj]) : r[r.length - 1].push(obj)) && r, []);
    pairs.forEach(obj => {
        let result = '';
        if (obj.length === 2) {
            result = (obj[0].markAv > obj[1].markAv)
                ?
                `${obj[0].fullName} vs ${obj[1].fullName} => ${obj[0].fullName} is better!`
                :
                `${obj[1].fullName} vs ${obj[0].fullName} => ${obj[1].fullName} is better!`;
        } else {
            result = `${obj[0].fullName} is alone`;
        }
        console.log(result);
    });
}

showInPairs([a1, a2, a3, a4, a5, a6, a7]);





// ñ1) Intenta crear las parejas de forma aleatoria.

function showInRandomPairs(objs) {
    objs.sort(() => Math.random() - 0.3);
    let pairs = objs.reduce((r, obj, i) => (i % 2 === 0 ? r.push([obj]) : r[r.length - 1].push(obj)) && r, []);
    pairs.forEach(obj => {
        let result = '';
        if (obj.length === 2) {
            result = (obj[0].markAv > obj[1].markAv)
                ?
                `${obj[0].fullName} vs ${obj[1].fullName} => ${obj[0].fullName} is better!`
                :
                `${obj[1].fullName} vs ${obj[0].fullName} => ${obj[1].fullName} is better!`;
        } else {
            result = `${obj[0].fullName} is alone`;
        }
        console.log(result);
    });
}

showInRandomPairs([a1, a2, a3, a4, a5, a6, a7]);

