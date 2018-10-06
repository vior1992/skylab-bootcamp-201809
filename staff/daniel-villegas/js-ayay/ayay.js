/**
 * ?
 * 
 */
function Ayay() {
    this.length = 0;
}


Ayay.prototype.push = function(element) {
    this[this.length] = element;

    this.length++;
};

Ayay.prototype.pop = function() {
    var word = this[this.length -1];
    this.length--;
    return word;
};

Ayay.prototype.forEach = function(callback) {
    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function');

    for (var i = 0; i < this.length; i++) callback(this[i], i, this);
};

Ayay.prototype.map = function(callback) {
    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function');

    var newAyay = [];

    for (var i = 0; i < this.length; i++) {
        newAyay[i] = callback(this[i], i, this);}

    return newAyay;
};

Ayay.prototype.sort = function() {
    // TODO
};

Ayay.prototype.filter = function(callback) {
    var result = [];

    if (!(this instanceof Object)) throw Error ("first element is not an Object");

    if (!this.length) throw Error ("the array passed as argument is empty");

    if (!(callback instanceof Function)) throw Error ('second element is not an function');

    for (var i = 0; i < this.length; i++) {
        if (callback(this[i])) {
        result.push(this[i]) 
        }
    }
    return result;
};

Ayay.prototype.find = function(callback) {
    if (!(this instanceof Object)) throw Error ("Arr is not a Object");

    if (!this.length) throw Error ("Arr is empty");

    if (typeof callback !== "function") throw Error ("Callback is not a function")
    
    for (var i = 0; i < this.length; i++) if (callback(this[i])) return this[i]; 
};