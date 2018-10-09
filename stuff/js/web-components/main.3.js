var car = document.createElement('img');

car.src = './red-car.png';
car.style.position = 'absolute';

document.body.appendChild(car);

var step = 10;
var rotation = 0;

function calcX() {
    return Math.sin(rotation * Math.PI / 180) * step;
}

function calcY() {
    return Math.cos(rotation * Math.PI / 180) * step;
}

function move(x, y) {
    car.style.top = car.offsetTop + y + 'px';
    car.style.left = car.offsetLeft + x + 'px';
}

function turn() {
    car.style.transform = 'rotate(' + rotation + 'deg)';
}

document.addEventListener('keydown', function (event) {
    switch (event.keyCode) {
        case 39: // right
            rotation += 10;

            turn();

            break;
        case 37: // left
            rotation -= 10;

            turn();

            break;
        case 38: // 38: // up (go forward "palante")
            var x = calcX();
            var y = calcY();

            move(x, -y);
            break;
        case 40: // down (go backwards "patras")
            var x = calcX();
            var y = calcY();

            move(-x, y);

            break;
    }
});