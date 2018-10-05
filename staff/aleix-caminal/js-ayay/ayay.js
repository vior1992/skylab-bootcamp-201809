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
    var result = this[this.length - 1];
    this.length--;
    return result;
};

Ayay.prototype.forEach = function(callback) {
    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function');

    for (var i = 0; i < this.length; i++) callback(this[i], i, this);
};

Ayay.prototype.map = function(callback) {
    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function');

    var result = [];
    for (var i = 0; i < this.length; i++) {
        result[i] = callback(this[i], i, this);
    }
    return result;
};

Ayay.prototype.sort = function() {
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
};

Ayay.prototype.filter = function(callback) {
    if (typeof callback !== 'function') throw Error('callback is not a function');

    var result = [];
    for (var i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            result[result.length] = this[i];
        }
    }
    return result;
};

Ayay.prototype.find = function(callback) {
    if (typeof callback !== "function") throw Error ("Callback isn't a function");

    for (var i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            return this[i];
        }
    }
};
