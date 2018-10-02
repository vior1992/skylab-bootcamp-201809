function every(arr, callback) {
    var result = true;
    for(i=0; i<arr.length; i++){
        if(!callback(arr[i])){
            result = false;
        }
    }
    return result;
}