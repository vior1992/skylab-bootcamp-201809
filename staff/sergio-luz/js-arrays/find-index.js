function findeIndex(arr, f) {
    var x;
    for (var i = 0; i < arr.length; i++) {
        x = f(arr[i]);
        if (x == true) {
            return i;
        }
    }
}