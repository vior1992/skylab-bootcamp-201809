function forEach(array, callback) {

    if (!(arr instanceof Array)) throw Error('array is not valid');

    for(i=0; i<arr.length; i++) callback(arr[i],i,arr);
}
