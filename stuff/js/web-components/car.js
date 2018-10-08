function Car() {
    var car = document.createElement('img');

    car.src = './red-car.png';
    car.style.position = 'absolute';

    document.body.appendChild(car);

    this.car = car;
    this.step = 10;
    this.rotation = 0;
}

Car.prototype.calcX = function () {
    return Math.sin(this.rotation * Math.PI / 180) * this.step;
};

Car.prototype.calcY = function () {
    return Math.cos(this.rotation * Math.PI / 180) * this.step;
};

Car.prototype.move = function (x, y) {
    this.car.style.top = this.car.offsetTop + y + 'px';
    this.car.style.left = this.car.offsetLeft + x + 'px';
};

Car.prototype.turn = function () {
    this.car.style.transform = 'rotate(' + this.rotation + 'deg)';
};

Car.prototype.turnRight = function () {
    this.rotation += 10;

    this.turn();
};

Car.prototype.turnLeft = function () {
    this.rotation -= 10;

    this.turn();
};

Car.prototype.goForward = function () {
    var x = this.calcX();
    var y = this.calcY();

    this.move(x, -y);
};

Car.prototype.goBackwards = function () {
    var x = this.calcX();
    var y = this.calcY();

    this.move(-x, y);
};