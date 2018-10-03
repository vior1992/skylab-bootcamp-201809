function reverse(arr) {
    var new_arr = [];
    for (var i = arr.length - 1, j = 0; i >= 0; i--, j++) {
        new_arr[j] = arr[i];
    }
    for (var k = 0; k < new_arr.length; k++) {
        arr[k] = new_arr[k];
    }
    return arr;
}