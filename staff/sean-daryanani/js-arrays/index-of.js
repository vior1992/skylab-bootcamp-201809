function indexOf(arr, word) {
    var indexPosition = 0;
    for (var i=0; i<arr.length; i++) {
        if (arr[i]===word) {
            indexPosition = i;
            return indexPosition;
        }
    }
}