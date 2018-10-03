function findIndex(arr, func) {
    var pos = -1
    for (var i = 0; i < arr.length; i++) {
        if (func(arr[i])) {
            pos = i;
            break;
        }
    }
    return pos;
}