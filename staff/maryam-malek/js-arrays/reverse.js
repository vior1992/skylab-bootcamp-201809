function reverse(arr) {
    var newArr = arr;
    arrLength = arr.length-1;
    for(i=0; i<arr.length; i++){
        newArr[i] = arr[arrLength--];
    }    
}