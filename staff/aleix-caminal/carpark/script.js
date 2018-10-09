boot();
function boot() {
    var car, speed, rotation, x, y;
    start();

    var lastUpdate = Date.now();
    var myInterval = setInterval(function() {
        var now = Date.now();
        var dt = now - lastUpdate;
        lastUpdate = now;

        update(dt);
    }, 0);
}

function start() {
    document.body.style.backgroundImage = 'url(https://s3.envato.com/files/224891780/s3.jpg)';
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundRepeat = 'no-repeat';

    speed = 0;
    max_speed = 6;
    min_speed = -2;
    rotation = 180;
    car = document.createElement("img");
    car.src = 'car.png';
    car.style.position = 'absolute';
    car.style.top = '240px';
    car.style.left = '40px';
    car.style.width = '200px';
    car.style.transform = 'rotate('+ rotation + 'deg)';
    document.body.appendChild(car);
    x = car.offsetLeft;
    y = car.offsetTop;

    document.addEventListener('keydown', function(e) {
        switch (e.keyCode) {
            case 37:
                if (Math.abs(speed) > .4) rotation -= 9;
                car.style.transform = 'rotate(' + rotation + 'deg)';
                break;
            case 38:
                if (max_speed > speed) speed++;
                break;
            case 39:
                if (Math.abs(speed) > .4) rotation += 9;
                car.style.transform = 'rotate(' + rotation + 'deg)';
                break;
            case 40:
                if (min_speed < speed) speed--;
                break;
        }
    });
}

function update(dt) {
    if (speed > 0) {
        speed -= 0.001 * dt;
    } else if (speed < 0) {
        speed += 0.001 * dt;
    }

    x += (speed * dt / 10) * Math.sin(Math.PI / 180 * (rotation - 90));
    y -= (speed * dt / 10) * Math.cos(Math.PI / 180 * (rotation - 90));
    car.style.left = x + 'px';
    car.style.top = y + 'px';
}
