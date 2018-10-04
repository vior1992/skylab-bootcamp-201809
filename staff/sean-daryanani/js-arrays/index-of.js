function indexOf(arr, word) {
    if (arr===undefined) {
        throw Error ('array is not valid');
    }
    var indexPosition = 0;
    for (var i=0; i<arr.length; i++) {
        if (arr[i]===word) {
            indexPosition = i;
            return indexPosition;
        }
    }
}