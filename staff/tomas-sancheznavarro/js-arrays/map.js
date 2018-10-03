function map(arr, func) {
    var new_arr = [];
    for (var i = 0; i < arr.length; i++) {
        new_arr[i] = func(arr[i]);
    }
    return new_arr;
}