// find-index.js

function findIndex(arr, callback) {
    if (!(arr instanceof Array)) throw Error(arr + ' is not an array');

    if (typeof callback !== 'function') throw Error(callback + ' is not a function');

    // var index = -1;

    // for (var i = 0; i < arr.length; i++) {
    //     if (callback(arr[i], i, arr)) {
    //         index = i;

    //         return index;
    //     }
    // }

    // return index;

    for (var i = 0; i < arr.length; i++)
        if (callback(arr[i], i, arr)) return i;

    return -1;
}