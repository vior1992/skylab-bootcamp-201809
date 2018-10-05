function findIndex(arr, callback) {
    if( !(arr instanceof Array)) throw Error('entered invalid array');
    if(!arr.length)    throw Error('entered empty array');


    var x;
    for (var i = 0; i < arr.length; i++) {
        x = callback(arr[i], i, arr);
        if (x == true) {
            return i;
        }
    }
    return -1;
}