function map(array, callback) {
    var array=[];
    for(i=0; i<arr.length; i++){
            array[i]= callback(arr[i]);
    }
    return array;
}