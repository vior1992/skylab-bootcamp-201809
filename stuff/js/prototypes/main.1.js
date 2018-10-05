function Car(brand, model) {
    this.brand = brand;
    this.model = model;
    // this.acceleration = 0;
}

Car.prototype.toString = function() { return this.brand + ' ' + this.model; };
Car.prototype.accelerate = function() { this.acceleration++; };
Car.prototype.acceleration = 0;

var mustang = new Car('ford', 'mustang');

console.log(mustang.toString());

mustang.accelerate();
mustang.accelerate();
mustang.accelerate();

console.log(mustang);

var chevy = new Car('chevrolet', 'charger');

console.log(chevy.toString());

chevy.accelerate();

console.log(chevy);