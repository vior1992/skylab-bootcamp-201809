// es5

function Animal(name) {
    this.name = name;
}

Animal.isAnimal = function(obj) {
    return obj instanceof Animal;
}

var lion = new Animal('symba');
var pig = { name: 'porky' };

console.log(Animal.isAnimal(lion));
console.log(Animal.isAnimal(pig));

// es6

class Animal {
    constructor(name) {
        this.name = name
    }

    static isAnimal(obj) {
        return obj instanceof Animal
    }
}

var lion = new Animal('symba')
var pig = { name: 'porky' }

console.log(Animal.isAnimal(lion))
console.log(Animal.isAnimal(pig))

