/**
 * ?
 * 
 */
function Ayay() {
    this.length = 0;
}

// TODO

Ayay.prototype.push = function(element) {
    this[this.length] = element;

    this.length++;
};

Ayay.prototype.pop = function() {
    var arr;
    
};

Ayay.prototype.forEach = function(callback) {
    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function');

    for (var i = 0; i < this.length; i++) callback(this[i], i, this);
};

Ayay.prototype.map = function(callback) {
    //var arr;
    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function');

    for (var x = 0; x < this.length; x++) arr[x] = callback[x];
};

Ayay.prototype.sort = function() {
    
};

Ayay.prototype.filter = function(callback) {
    // TODO
};

Ayay.prototype.find = function(callback) {
    // TODO
};