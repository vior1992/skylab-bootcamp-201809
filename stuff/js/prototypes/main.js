function Vehicle(brand, model) {
    this.brand = brand;
    this.model = model;
    this.acceleration = 0;
}

Vehicle.prototype.accelerate = function (acceleration) { this.acceleration = acceleration; };
Vehicle.prototype.break = function () { this.acceleration = 0; };

var falcon = new Vehicle('Ford', 'Falcon');

// console.log(falcon);

falcon.accelerate(50);

// console.log(falcon);

function Car(brand, model) {
    Vehicle.call(this, brand, model);

    this.trunk = 'closed';
}

// next two are essential for inheritance in js
Car.prototype = Object.create(Vehicle.prototype); // new Vehicle();
Car.prototype.constructor = Car;

Car.prototype.openTrunk = function () { this.trunk = 'open'; };
Car.prototype.closeTrunk = function () { this.trunk = 'closed'; };

var charger = new Car('Chevrolet', 'Charger');

// console.log(charger);

charger.openTrunk();
charger.accelerate(100);

// console.log(charger);

function Suv(brand, model) {
    Car.call(this, brand, model);

    this._4x4 = false;
}

Suv.prototype = Object.create(Car.prototype);
Suv.prototype.constructor = Suv;

Suv.prototype.activate4x4 = function () { this._4x4 = true; };
Suv.prototype.deactivate4x4 = function () { this._4x4 = false; };

var cayenne = new Suv('Porsche', 'Cayenne');

// console.log(cayenne);

cayenne.openTrunk();
cayenne.activate4x4();
cayenne.accelerate(100);

// console.log(cayenne);

function FlyingVehicle(brand, model) {
    Vehicle.call(this, brand, model);

    this.flying = false;
}

FlyingVehicle.prototype = Object.create(Vehicle.prototype);
FlyingVehicle.prototype.constructor = FlyingVehicle;

FlyingVehicle.prototype.takeOff = function () { this.flying = true; };
FlyingVehicle.prototype.land = function () { this.flying = false; };

function Helicopter(brand, model) {
    FlyingVehicle.call(this, brand, model);

    this.helix = 'off';
}

Helicopter.prototype = Object.create(FlyingVehicle.prototype);
Helicopter.prototype.constructor = Helicopter;

Helicopter.prototype.turnHelixOn = function () { this.helix = 'on'; };
Helicopter.prototype.turnHelixOff = function () { this.helix = 'off'; };

var apache = new Helicopter('Boeing', 'Apache');

apache.turnHelixOn();
apache.accelerate(100);
apache.takeOff();

// console.log(apache);

function Plane(brand, model) {
    FlyingVehicle.call(this, brand, model);

    this.turbines = 'off';
}

Plane.prototype = Object.create(FlyingVehicle.prototype);
Plane.prototype.constructor = Plane;

Plane.prototype.turnTurbinesOn = function () { this.turbines = 'on'; };
Plane.prototype.turnTurbinesOff = function () { this.turbines = 'off'; };

var f18 = new Plane('McDonnell Douglas', 'F-18');

f18.turnTurbinesOn();
f18.accelerate(100);
f18.takeOff();

// console.log(f18);


var vehicles = [falcon, charger, cayenne, apache, f18];

console.log(vehicles);

vehicles.forEach(function (vehicle) {
    if (vehicle instanceof FlyingVehicle) {
        vehicle.land();
        vehicle.break();

        if (vehicle instanceof Helicopter) vehicle.turnHelixOff();
        if (vehicle instanceof Plane) vehicle.turnTurbinesOff();
    } else {
        vehicle.break();

        if (vehicle instanceof Car) {
            vehicle.closeTrunk()

            if (vehicle instanceof Suv) vehicle.deactivate4x4();
        };
    }
});

console.log(vehicles);