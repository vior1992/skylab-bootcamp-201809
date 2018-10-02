function every(arr, callback) {
    var result = []; counter= 0;
    for(var i = 0; i < arr.length; i++) {
        if(callback(arr[i])){
            result[counter] = callback(arr[i]);
            counter++;
        }
    }
    return (result.length === arr.length)? true: false;
}


