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
    
    
    var res;
    var res = this[this.length -1];
    delete this[this.length -1];
    this.length --;
    return res;
    
};

Ayay.prototype.forEach = function(callback) {
    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function');

    for (var i = 0; i < this.length; i++) callback(this[i], i, this);
};

Ayay.prototype.map = function(callback) {
    

    var result = new Ayay;
    for(var i = 0 ; i<this.length;i++){
        result[i] = callback(this[i],i,this);
    }

    return result;
   


};

Ayay.prototype.sort = function() {
   
    var temp;
    for(var i = 0; i<this.length;i++){
        this[i]=this[i].toString();
    }

    for(var j=0;j<this.length;j++){
        for(var i=0;i<this.length;i++){
            if(this[i] < this[i-1]){
                temp=this[i];
                this[i] = this[i-1];
                this[i-1] = temp;


            }
        }
    }
    
    return this;


};

Ayay.prototype.filter = function(callback) {
    

    index= -1;
    var result = new Ayay;
    //var resultIndex = 0;
    for(var i=0; i < this.length; i++){
        if(callback(this[i],i) ===true){
            result.push(this[i]);
            //result[resultIndex] = this[i]; 
            //resultIndex++;    
        }
    }
    
        return result;



};

Ayay.prototype.find = function(callback) {
        
    for(var i=0;i<this.length;i++){ 
    if(callback(this[i],i)){
        return this[i];
    } 
    };


    
};