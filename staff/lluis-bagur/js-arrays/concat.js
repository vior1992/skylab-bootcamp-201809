function concat(arr, arr2) {
    var array=[];
    for (var i=0; i<arr.length; i++){
        array[i] = arr[i];
    }
    for (var i=0; i<arr2.length; i++){
        array[array.length] = arr2[i];
    }
    return array;
}