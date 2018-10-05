function shift(arr) {
    
    var element;
    var index;
    var length;

    // El siguiente if absorbe este error: if (typeof arr == 'undefined') throw Error ('no parameter has been introduced');
    if (!(arr instanceof Array)) throw Error ('input is not array');
    if (!arr.length) throw Error ('array is empty');

    element = arr[0];
    length = arr.length;

    for (index = 0; index < arr.length; index ++) {

        arr[index] = arr[index+1];
    }
    arr.length = length - 1;
    return element;

}