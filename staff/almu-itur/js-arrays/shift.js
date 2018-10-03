function shift(arr) {
    
    var element = [];
    var index = 0;

    element = arr[0];
    length = arr.length;

    for (index = 0; index < arr.length; index ++) {

        arr[index] = arr[index+1];
    }
    arr.length=length-1;
    return element;
}