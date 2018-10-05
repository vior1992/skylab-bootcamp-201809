/**
 * ?
 * 
 */
function Ayay() {
    this.length = 0;
}

// TODO

Ayay.prototype.push = function() {
    var pointer = this;
    Array.prototype.forEach.call(arguments, function(el) {
        pointer[pointer.length] = el;
        pointer.length++;
    })
};

Ayay.prototype.pop = function() {
    var popped = this[this.length-1];
    delete this[this.length-1];
    this.length = this.length-1;
    return popped;
};

Ayay.prototype.forEach = function(callback) {
    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function');

    for (var i = 0; i < this.length; i++) callback(this[i], i, this);
};

Ayay.prototype.map = function(callback) {
    var newArr = [];
    for (var i=0; i<this.length; i++) {
        newArr[i] = callback(this[i]);
    }
    return newArr;
};

Ayay.prototype.sort = function() {
    // TODO
};

Ayay.prototype.filter = function(callback) {
    // TODO
};

Ayay.prototype.find = function(callback) {
    // TODO
};