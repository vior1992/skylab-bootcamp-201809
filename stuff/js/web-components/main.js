var car = new Car;

document.addEventListener('keydown', function (event) {
    switch (event.keyCode) {
        case 39: // right
            car.turnRight();

            break;
        case 37: // left
            car.turnLeft();

            break;
        case 38: // 38: // up (go forward "palante")
            car.goForward();

            break;
        case 40: // down (go backwards "patras")
            car.goBackwards();

            break;
    }
});

var car2 = new Car;

document.addEventListener('keydown', function (event) {
    switch (event.keyCode) {
        case 68: // right (D)
            car2.turnRight();

            break;
        case 65: // left (A)
            car2.turnLeft();

            break;
        case 87: // forward (W)
            car2.goForward();

            break;
        case 83: // backwards (S)
            car2.goBackwards();

            break;
    }
});