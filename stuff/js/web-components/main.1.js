// document.body.style.margin = 0;

var car = document.createElement('img');

car.src = './red-car.png';
car.style.position = 'absolute';
// car.style.left = '100px';
// car.style.top = '100px';
// car.style.transform = 'rotate(10deg)';

document.body.appendChild(car);

var step = 10;
var rotation = 0;

document.addEventListener('keydown', function (event) {
    switch (event.keyCode) {
        case 39: // right
            //car.style.left = car.offsetLeft + step + 'px';

            rotation += 10;
            car.style.transform = 'rotate(' + rotation + 'deg)';

            break;
        case 37: // left
            //car.style.left = car.offsetLeft - step + 'px';

            rotation -= 10;
            car.style.transform = 'rotate(' + rotation + 'deg)';

            break;
        case 38: // up (go forward "palante")
            // car.style.top = car.offsetTop - step + 'px';

            var x = Math.sin(rotation * Math.PI / 180) * step;
            var y = Math.cos(rotation * Math.PI / 180) * step;

            // console.log(x, y);

            car.style.top = car.offsetTop - y + 'px';
            car.style.left = car.offsetLeft + x + 'px';

            break;
        case 40: // down (go backwards "patras")
            // car.style.top = car.offsetTop + step + 'px';

            var x = Math.sin(rotation * Math.PI / 180) * step;
            var y = Math.cos(rotation * Math.PI / 180) * step;

            // console.log(x, y);

            car.style.top = car.offsetTop + y + 'px';
            car.style.left = car.offsetLeft - x + 'px';

            break;
    }
});