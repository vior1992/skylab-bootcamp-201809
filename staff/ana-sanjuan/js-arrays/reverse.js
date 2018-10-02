function reverse(arr) {
    var result = [];
    result = arr;
    counter = 0;
    for (var i = arr.length-1; i >= 0; i--){
        result[counter] = arr[i];
        counter++;
    }
    return result;
}
