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
    delete this[this.length-1];
    this.length--

    return lastItem;
};

Ayay.prototype.forEach = function(callback) {
    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function');

    for (var i = 0; i < this.length; i++) callback(this[i], i, this);
};

Ayay.prototype.map = function(callback) {
    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function');
    var arr = [];
    for (var i = 0; i < this.length; i++) {
         arr[i] = callback(this[i],i,this);
    }
    return arr;  
}; 

/* Ayay.prototype.sort = function() {
    var arr =[];
    var 
    for(var i=0; i<this.length; i++) {

    }
}; */

Ayay.prototype.filter = function(callback) {
    
    var result = [];

    for(var i = 0; i < this.length; i++) {

        if(callback(this[i]) === true) {
            result.push(this[i]);
        }
    }
    return result; 

    /* var index = 0;
    var indexResult = 0;
    var result = [];
    var flag = false;

    for(index = 0; index < this.length; index++) {

        flag = callback(this[index]);

        if(flag === true) {
            result.push(this[index]);
            indexResult++;
        }
    }
    return result; */


};
Ayay.prototype.find = function(callback) {
    
    for(var i=0; i < this.length; i++) {
        
        if (callback(this[i]) == true) {
            return this[i];
        }   
    }
}; 