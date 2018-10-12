function Car(image) {
    Component.call(this, 'img');

    this.element.src = image;
    this.element.style.position = 'absolute'
    this.element.style.height = '200px';

    document.body.appendChild(this.element);

    this.step = 10;
    this.rotation = 0;
}

Car.prototype = Object.create(Component.prototype);
Car.prototype.constructor = Car;

Car.prototype.calcX = function () {
    return Math.sin(this.rotation * Math.PI / 180) * this.step;
};

Car.prototype.calcY = function () {
    return Math.cos(this.rotation * Math.PI / 180) * this.step;
};

Car.prototype.move = function (x, y) {
    this.element.style.top = this.element.offsetTop + y + 'px';
    this.element.style.left = this.element.offsetLeft + x + 'px';
};

Car.prototype.turn = function (rotation) {
    this.rotation += rotation;

    this.element.style.transform = 'rotate(' + this.rotation + 'deg)';
};

Car.prototype.turnRight = function () {
    this.turn(this.step);
};

Car.prototype.turnLeft = function () {
    this.turn(-this.step);
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