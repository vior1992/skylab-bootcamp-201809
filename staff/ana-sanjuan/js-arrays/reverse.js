function reverse(arr) {
    var original = [], counter = 0;
    for (var i = 0; i <arr.length; i++) original[i] = arr[i];
    for (var i = arr.length-1; i >= 0; i--){
        arr[counter] = original[i];
        counter++;
    }
    return arr;
}
