/**
 * ?
 * 
 */
function Ayay() {
    this.length = 0;
}

// TODO

Ayay.prototype.push = function(element) {
    // debugger
    // this[this.length] = element;

    // this.length++;

    // var length = this.length 
    // debugger
    // for (var i = 0; i < length; i++) {
    //     this[this.length+i] = element[i];
    // } 

    // this.length++;

};

Ayay.prototype.pop = function() {
    var self = this;
    this.length--;
    return self[this.length];

};

Ayay.prototype.forEach = function(callback) {
    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function');

    for (var i = 0; i < this.length; i++) callback(this[i], i, this);
};

Ayay.prototype.map = function(callback) {
    // TODO
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