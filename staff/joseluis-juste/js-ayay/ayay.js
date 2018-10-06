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
    
    var returned;
    if (this.length > 0)
    {
        returned = this[this.length-1];
        delete this[this.length - 1];
        this.length--;
        return returned;
    }
    return undefined;    
};

Ayay.prototype.forEach = function(callback) {
    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function');

    for (var i = 0; i < this.length; i++) callback(this[i], i, this);
};

Ayay.prototype.map = function(callback) {

    var output = [];
    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function');
    for (var i = 0; i < this.length; i++) output[i] = callback(this[i], i, this);
    return output;
};

Ayay.prototype.sort = function() {
   
    for (var i = 0; i < this.length - 1; i++) {
        for (var j = 1; j < this.length; j++) {
            if (this[j] < this[j - 1]) {   
                var aux_elem = this[j];
                this[j] = this[j - 1];
                this[j - 1] = aux_elem;

            }
        }
    }
    return this;
};

Ayay.prototype.filter = function(callback) {
    var output = [];
    
};

Ayay.prototype.find = function(callback) {
    // TODO
};