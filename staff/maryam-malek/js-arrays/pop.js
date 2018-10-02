function pop(arr) {
    var newArr = arr;
    var extra = arr[arr.length-1];
    for(i=0; i< arr.length-2; i++){
        newArr[i] = arr[i];
    }
    newArr.length = (arr.length -1)
    return extra;
}