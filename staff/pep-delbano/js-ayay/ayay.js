/**
 * ?
 * 
 */
function Ayay() {
    this.length = 0;
}

// TODO

Ayay.prototype.push = function(element) {
    if (!element) throw Error('element not defined');
    
    this[this.length] = element;

    this.length++;
};

Ayay.prototype.pop = function() {
    
    this[this.length-1] = this[!this.length]
    
    this.length--;
};

Ayay.prototype.forEach = function(callback) {
    
    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function');

    for (var i = 0; i < this.length; i++) callback(this[i], i, this);
};

Ayay.prototype.map = function(num) {

    if (!(num)) throw new TypeError('no number defined');
    if (!(this.length)) throw new TypeError('ayay is empty');
    if (typeof num !== Number) throw new TypeError(num + ' is not a number');
    // if (!(Ayay instanceof Array)) throw new TypeError('ayay is not an array') //it doesn't work...
        
        var result = [];

        for(var i= 0; i<this.length; i++) {
               result[result.length] = this[i]*num;
        }

        return result;
};

Ayay.prototype.sort = function sort(arr) {
        if (Array.isArray(arr) && !arr.length) throw new TypeError('array is empty');
        if  (!arr) throw new TypeError('array is not defined yet')
        if (!Array.isArray(arr)) throw new TypeError('array is not valid');
    
        for (var i = 0; i < arr.length - 1; i++) {
            var min = i;
            for (var j = i; j < arr.length; j++) {
                if ('' + arr[j] < '' + arr[min]) {
                    min = j;
                }
            }
    
            var sorted = arr[i];
            arr[i] = arr[min];
            arr[min] = sorted;
        }
        return arr;
    }

Ayay.prototype.filter = function(array, callback) {
    
        if (!(array instanceof Array))  throw new TypeError('first argument is not an array');
        if (!(callback instanceof Function))  throw new TypeError('second argument is not a function');
        if (array.every(function(elem){return elem === undefined}))  throw new TypeError ('the array is empty');
        
        var index = 0;
        var result = [];

        for(var i=0; i<array.length; i++){
            if(callback(array[i])){
                result[index++] = array[i];
            }
        }
        return result;

};

Ayay.prototype.find = function(arr, callback) {

        if (!(arr instanceof Array)) throw new TypeError ("first argument is not an array");
        if (!arr.length) throw new TypeError ("array is empty");
        if (typeof callback !== "function") throw new TypeError ("second argument is not a function")
        
        for (var i = 0; i < arr.length; i++) if (callback(arr[i])) return arr[i]

    
};