function reverse (arr) {
    var reversedArray = array;
    var arrLength = arr.length;
    var index = 0;

    for(let i=arr.length-1; i>=0; i--){
        reversedArray[index++] = arr[i];
    }

    return reversedArray;
}