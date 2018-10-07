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
    if (element) this.length++;
    return this.length
};

Ayay.prototype.pop = function() {
    // TODO
};

Ayay.prototype.forEach = function(callback) {
    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function');
    for (var i = 0; i < this.length; i++) callback(this[i], i, this);
};

Ayay.prototype.map = function(callback) {
    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function');
    var result = [];
    for (var i = 0; !!(this[i]); i++)  result[i] = callback(this[i], i)
    return result;
};

Ayay.prototype.sort = function() {

    if (this.length <= 0) throw new TypeError('ayay is empty');

    for (var i = 0; i < this.length - 1; i++) {
        var min = i;
        for (var j = i; j < this.length; j++) {
            if ('' + this[j] < '' + this[min]) {
                min = j;
            }
        }

        var sorted = this[i];
        this[i] = this[min];
        this[min] = sorted;
    }
    return this;

};

Ayay.prototype.filter = function(callback) {
    // TODO
};

Ayay.prototype.find = function(callback) {
    // TODO
};