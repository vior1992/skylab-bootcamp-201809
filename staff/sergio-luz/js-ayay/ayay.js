/**
 * ?
 * 
 */
function Ayay() {
    this.length = 0;
}

// TODO 10xfunction

Ayay.prototype.push = function(element) {
    this[this.length] = element;

    this.length++;
};

Ayay.prototype.pop = function() {
    this.length--;
    delete this[this.length-1];
    return this[this.length-1];
};

Ayay.prototype.forEach = function(callback) {
    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function');

    for (var i = 0; i < this.length; i++) callback(this[i], i, this);
};

Ayay.prototype.map = function(callback) {
    var temp=[];
    for (var i=0; i<this.length; i++){
        temp[i]=callback(this[i],i);
    }
    return temp;
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