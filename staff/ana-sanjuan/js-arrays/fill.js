function fill(arr, value, start = 0, end = arr.length) {
    for (var i = start; i < end; i++){
        arr[i] = value;
    }
    return arr
}