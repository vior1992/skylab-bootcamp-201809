function findIndex(arr, elem) {
    var index = 0;
    for (var i=0; i<arr.length; i++) {
        if (elem(arr[i])) {
        index = i;
        return index;
        }
    }
    return -1;
    
}