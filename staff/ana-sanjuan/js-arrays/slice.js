function slice(arr, begin = 0, end = arr.length) {
    var result = [], counter= 0;
    for (var i = begin; i < end; i++){
        result[counter++] = arr[i];
    }
    return result
}