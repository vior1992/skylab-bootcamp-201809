/**
 * ?
 * 
 */

function Ayay() {
    this.length = 0;
}


Ayay.prototype.push = function(element) {
    for (var i = 0; i < arguments.length; i++){
        this[this.length] = arguments[i];
        this.length++;
    }
    return this.length;
};

Ayay.prototype.pop = function() {
    var result = this[this.length-1];
    delete this[this.length -1];
    this.length--;
    return result;
};

Ayay.prototype.forEach = function(callback) {
    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function');

    for (var i = 0; i < this.length; i++) callback(this[i], i, this);
};

Ayay.prototype.map = function(callback) {
    var result = new Ayay;
    for (var i = 0; i < this.length; i++){
        result.push(callback(this[i], i,this));
    }
    return result;
};

Ayay.prototype.sort = function() {
    var temp;

    for (var j = 0; j < this.length -1; j++){
        for (var i = 0; i < this.length; i++){
            if (this[i] > this[i+1]){
                temp = this[i];
                this[i] = this[i+1];
                this[i+1] = temp;
            }
        }
    }
    return this;

};

Ayay.prototype.filter = function(callback) {
    var result = new Ayay;
    for (var i = 0; i < this.length; i++){
       if(callback(this[i])) result.push((this[i])); 
    }
    return result[0];
};

Ayay.prototype.find = function(callback) {
    var result = new Ayay;
    for (var i = 0; i < this.length; i++){
       if(callback(this[i])) return (this[i]); 
    }
};