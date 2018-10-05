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
    return length;
};

Ayay.prototype.pop = function() {
    var extra = this[this.length-1];
    delete this[this.length-1];
    this.length--;
    return extra;
};

Ayay.prototype.forEach = function(callback) {
    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function');

    for (var i = 0; i < this.length; i++) callback(this[i], i, this);
};

Ayay.prototype.map = function(callback) {
    
    var newAy = new Ayay;
    for(var i = 0; i<this.length; i++){
        newAy.push(callback(this[i], i));
    }
    return newAy;
};

Ayay.prototype.sort = function() {
    var index;
    for(var i = 0; i<this.length; i++){
        index = i;
        for(var x = i; x<this.length; x++){
            if(''+this[x] < ''+this[index]){
                index = x;
            }
        }
        var moment = this[i];
        this[i]=this[index];
        this[index]=moment;
    }
    return this;
};

Ayay.prototype.filter = function(callback) {
    var newAy = new Ayay;
    for(var i = 0; i<this.length; i++){
       if(callback(this[i], i)){
        newAy.push(this[i]);
       }
        
    }
    return newAy;
};

Ayay.prototype.find = function(callback) {
    for(var i = 0; i<this.length; i++){
        if(callback(this[i], i)){
            return this[i];
        }
    }
};