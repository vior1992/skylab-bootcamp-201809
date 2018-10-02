function find(arr, elem) {
    var index = 0;
    for (var i=0; i<arr.length; i++) {
        if (elem(arr[i]) != 0) {
        return arr[i];
        }
    }
    
}