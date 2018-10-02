function shift(arr) {
    var shifted = arr[0];
    for (var i=0; i<arr.length; i++) {
        arr[i] = arr[i+1];
    }
    arr.length = arr.length - 1;
    return shifted;
}  