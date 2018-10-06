/**
 * ?
 * 
 */
function Ayay() {
    this.length = 0;
}

// TODO

Ayay.prototype.push = function (element) {
    this[this.length] = element;

    this.length++;
};



Ayay.prototype.pop = function () {
    var element = this[this.length - 1];
    delete this[this.length - 1];
    this.length--;

    return element;
};

Ayay.prototype.forEach = function (callback) {
    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function');

    for (var i = 0; i < this.length; i++) callback(this[i], i, this);
};

Ayay.prototype.map = function (callback) {
    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function');

    var result = new Ayay;
    //var result = [];

    for (var i = 0; i < this.length; i++)
        //result[i] = callback(this[i], i, this);
        //result.length++;
        result.push(callback(this[i], i, this));

    return result;
};


Ayay.prototype.sort = function () {

    if (!(this instanceof Ayay)) throw Error('array is not valid');
    if (this.length <= 0) throw Error('array is empty');

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

    /*
    var indexMain = 0;
    var indexSecondary = 0;
    var indexTemp = 0;
    var tempItem = [];
    var arraySorted = [];
    var arrString = [];
    var swap = false;
    
        
        for (var i = 0; i < this.length; i++) {
            arrString[i] = this[i].toString();
        }
        
        console.log(this);

        for(indexMain = 0; indexMain < arrString.length; indexMain++) {
            
            tempItem = arrString[indexMain];
    
            for(indexSecondary = indexMain + 1; indexSecondary < arrString.length; indexSecondary++) {
                
                if(arrString[indexSecondary] < tempItem) {
                    tempItem = arrString[indexSecondary];
                    indexTemp = indexSecondary;
                    swap = true;
                }
            }
            if (swap) { 
                arraySorted[indexMain] = tempItem;
                arrString[indexTemp] = arrString[indexMain];
                swap = false;
            }
            else { arraySorted[indexMain] = arrString[indexMain]; }
        }
        this = arraySorted;
        return this;
    */
};


Ayay.prototype.filter = function (callback) {

    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function');

    var index = 0;
    var indexResult = 0;
    //var result = [];
    var result = new Ayay;
    var flag = false;

    for (index = 0; index < this.length; index++) {

        flag = callback(this[index]);

        if (flag === true) {
            result.push(this[index]);
            indexResult++;
        }
    }

    return result;
};

Ayay.prototype.find = function (element) {

    var flag = false;

    for (index = 0; index < this.length; index++) {

        if (element === this[index]) { return this[index]; }
    }

    return undefined;
};