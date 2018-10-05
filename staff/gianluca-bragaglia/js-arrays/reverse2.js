function reverse (arr){

    /*if (typeof arr == 'symbol') throw Error ('the argument passed is a symbol should be an array');
        
    if (typeof arr == 'boolean') throw Error ('the argument passed is a boolean should be an array');

    if (typeof arr == 'function') throw Error ('the argument passed is a function should be array');

    if (typeof arr == 'string') throw Error ('the argument passed is a string should be array');*/
    
    if (!(arr instanceof Array)) throw Error ('the argument is not an array');

    if (!arr.length) throw Error ('the array is empty');

    
    var arraytemp=[];
    for(var i = 0; i<arr.length; i++){
        arraytemp[i]=arr[i];
    }
    for(var i = 0; i<arr.length ; i++){
        arr[i]=arraytemp[arr.length-1-i];
    }
}