function pop(arr) {
    var lastItem = arr[arr.length - 1];
    arr.length = arr.length - 1;
    return lastItem;
}