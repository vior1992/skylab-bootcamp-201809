function slice(arr, begin, end) {
    var result = [], counter= 0;
    for (var i = (begin? begin: 0); i < (end? end: arr.length) ; i++){
        result[counter++] = arr[i];
    }
    return result;
}