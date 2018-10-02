function reverse (arr) {
    var index = 0;
    var iteratorArr=[];
    for (var i=0; i<arr.length; i++) {
        iteratorArr[i] = arr[i];
    }
    for (var i=arr.length-1; i>=-0; i--) {
        arr[index] = iteratorArr[i];
        index++        
    }
    return arr;
}