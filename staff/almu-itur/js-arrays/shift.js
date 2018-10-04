function shift(arr) {
    
    var element;
    var index;
    var length;

    if (!(arr instanceof Array)) throw Error ('input is not array');
    if (typeof arr == 'undefined') throw Error ('no parameter has been introduced');
    if (!arr.length) throw Error ('array is empty');
    if (!arr[0].trim()) throw Error ('first element of array is empty');

    element = arr[0];
    length = arr.length;

    for (index = 0; index < arr.length; index ++) {

        arr[index] = arr[index+1];
    }
    arr.length = length - 1;
    return element;

    if (arr.length != length) throw Error ('result length is not one unit smaller than nums length');
}