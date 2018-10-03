function join(arr, separator) {
    var array = []
    for (var i=0; i<arr.length-1; i++){
        array = array + arr[i] + '-';
    }
    array = array + arr[arr.length-1];
    return array;
    }