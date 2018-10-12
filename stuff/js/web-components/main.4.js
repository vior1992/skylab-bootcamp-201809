var red = new Car('./red-car.png');

document.addEventListener('keydown', function (event) {
    switch (event.keyCode) {
        case 39: // right
            red.turnRight();

            break;
        case 37: // left
            red.turnLeft();

            break;
        case 38: // 38: // up (go forward "palante")
            red.goForward();

            break;
        case 40: // down (go backwards "patras")
            red.goBackwards();

            break;
    }
});

var blue = new Car('./blue-car.png');

document.addEventListener('keydown', function (event) {
    switch (event.keyCode) {
        case 68: // right (D)
            blue.turnRight();

            break;
        case 65: // left (A)
            blue.turnLeft();

            break;
        case 87: // forward (W)
            blue.goForward();

            break;
        case 83: // backwards (S)
            blue.goBackwards();

            break;
    }
});