function findIndex(arr, func) {

    for (var i = 0; i < arr.length; i++) {
        if (func(arr[i], i, arr)) {
            return i;
        }
    }
    return -1;
}