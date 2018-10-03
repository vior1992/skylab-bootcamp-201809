function forEach(arr, callback) {
    if (!(arr instanceof Array)) throw Error('array is not valid'); 
    for (var i = 0; !!(arr[i]); i++) callback(arr[i], i, arr);  
}
