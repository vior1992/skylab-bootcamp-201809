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
    var lastItem = this[this.length-1];
    if(this.length > 0) this.length--

    return lastItem;
};

Ayay.prototype.forEach = function(callback) {
    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function');

    for (var i = 0; i < this.length; i++) callback(this[i], i, this);
};

Ayay.prototype.map = function(callback) {
    var arr = [];
    for (var i = 0; i < this.length; i++) {
         arr[i] = callback(this[i],i);
    }
    return arr;  
}; 

Ayay.prototype.sort = function() {
    // TODO
};

Ayay.prototype.filter = function(callback) {
    // TODO
};

Ayay.prototype.find = function(callback) {
    
    for(var i=0; i < this.length; i++) {
        
        if (callback(this[i]) == true) {
            return this[i];
        }   
    }
};