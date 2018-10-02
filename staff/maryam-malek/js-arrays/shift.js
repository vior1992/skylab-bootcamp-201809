function shift(arr) {
    var newArr = arr;
    var first = arr[0];
    for(i=0; i<arr.length; i++){
        newArr[i] = arr[i+1];
    }
    return first;
}
