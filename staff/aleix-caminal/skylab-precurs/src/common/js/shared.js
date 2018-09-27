function addEvent(object, type, callback) {
    if (object == null || typeof(object) == 'undefined') return;
    if (object.addEventListener) {
        object.addEventListener(type, callback, false);
    } else if (object.attachEvent) {
        object.attachEvent("on" + type, callback);
    } else {
        object["on"+type] = callback;
    }
}

function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

function round(num, dec = 3) {
    dec = Math.pow(10, dec);
    return Math.round(num * dec) / dec;
}

function sleep(ms) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > ms){
            break;
        }
    }
}

function rng(min = 1, max = 100, exceptions = []) {
    do {
        var num = Math.floor(Math.random() * (max - min + 1)) + min;
    } while (exceptions.includes(num));
    return num;
}

function findById(array, id) {
    return array.find(function (obj) {
        return obj.id === id;
    });
}

function validate(form, inputs) {
    var result = 1;
    for (var i in inputs) {
        var input = form.querySelector('input[name="'+inputs[i]+'"]');
        if (input.value == "") {
            input.classList.add('is-invalid');
            result = 0;
        } else {
            input.classList.remove('is-invalid');
        }
    }

    return result;
}

function changeTab(current, target, callback = null) {
    document.querySelector('#step' + current).classList.remove('show', 'active');
    document.querySelector('#step' + target).classList.add('show', 'active');
    if (typeof callback == "function") callback();
}

function arrangeCircle(container) {
    var elements = container.getElementsByTagName('*');
    var w = container.offsetWidth / 2,
        h = container.offsetHeight / 2,
        r = Math.min(w, h) * 0.8,
        a = 0,
        s = (2 * Math.PI) / elements.length;

    for (var i = 0; i < elements.length; i++) {
        elements[i].style.left = Math.round(w + r * Math.cos(a) - elements[i].offsetWidth / 2) + 'px';
        elements[i].style.top = Math.round(h + r * Math.sin(a) - elements[i].offsetHeight / 2) + 'px';
        a += s;
    }
}
