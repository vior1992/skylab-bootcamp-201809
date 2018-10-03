function indexOf(arr, elem) {
    var index = -1;

    for (index=0; index<arr.length; index++) {
        if (arr[index]===elem) {
            return index;
        }
    }
}