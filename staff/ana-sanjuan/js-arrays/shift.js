function shift(arr) {
    var original = [];
    for (var i = 0; i < arr.length; i++) 
        original[i] = arr[i];
    arr.length--;
    for (var i = 1; i < original.length; i++) 
        arr[i-1] = original[i];
    return original[0];
}
