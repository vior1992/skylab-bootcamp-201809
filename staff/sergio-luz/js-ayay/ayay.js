/**
 * ?
 * 
 */
function Ayay() {
    this.length = 0;
}

// TODO 10xfunction

Ayay.prototype.push = function () {

    for (var i = 0; i < arguments.length; i++) {
        this[this.length] = arguments[i];
        this.length++;
    }
    return this.length;

};

Ayay.prototype.pop = function () {
    if(!this.length) return undefined;
 
    var temp = this[this.length - 1];
    delete this[this.length - 1];
    this.length--;
    return temp;
};

Ayay.prototype.forEach = function (callback) {
    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function');

    for (var i = 0; i < this.length; i++)
        callback(this[i], i, this);
};

Ayay.prototype.map = function (callback) {
    if(!this.length) throw Error('array is not valid');
    if(!(callback instanceof Function)) throw Error('callback is not a function');

    var temp = [];
    for (var i = 0; i < this.length; i++) {
        temp[i] = callback(this[i], i, this);
    }
    // temp.forEach(elem, i){
    //     if(elem===undefined) throw Error('function callback is empty');
    // }
    return temp;
};

Ayay.prototype.sort = function () {
    if (!this.length) throw Error('array is empty');

    temp = [];
    for (var i = 0; i < this.length; i++) {
        this[i] = this[i];
    }
    for (var i = 0; i < this.length; i++) {
        temp[i] = this[i].toString();
        this[i] = temp[i];
    }
    for (var j = 1; j < this.length; j++) {
        for (var i = 1; i < this.length; i++) {
            if (this[i] < this[i - 1]) {
                var temp = this[i - 1];
                this[i - 1] = this[i];
                this[i] = temp;
            }
        }
    }
    return this;
};

Ayay.prototype.filter = function (callback) {
    if (!(this instanceof Ayay)) throw Error('first element is not an ayay');

    var x, temp = [],
        count = 0;
    for (var i = 0; i < this.length; i++) {
        x = callback(this[i]);
        if (x == true) {
            temp[count] = this[i];
            count++;
        }
    }
    return temp;
};

Ayay.prototype.find = function (callback) {
    // TODO
};