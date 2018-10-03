function join(arr, separator) {
    var new_str = "";
    for (var i = 0; i < arr.length; i++) {
        new_str += arr[i];
        if (i < arr.length - 1) {
            new_str += separator;
        }
    }
    return new_str;
}