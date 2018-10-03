function every(arr, callback) {
    if (!(arr instanceof Array) && !(callback instanceof Function)) throw Error ('the array is not an array and callback is not a function');
    if (!(arr instanceof Array)) throw Error('the arr is not an array');
    
    if (!arr.length) return true;

    var result = []; counter= 0;
    for(var i = 0; i < arr.length; i++) {
        if(callback(arr[i], i, arr)){
            result[counter] = callback(arr[i], i , arr);
            counter++;
        }
    }
    return (result.length === arr.length)? true: false;

}




