function from(arr, f) {
    var temp = [];
    for (var i = 0; i < arr.length; i++) {
        if (f !== undefined) {
            temp[i] = f(arr[i]);
        } else {
            temp[i] = arr[i];
        }
    }
    return temp;
}
