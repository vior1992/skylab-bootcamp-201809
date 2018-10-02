function find(arr, callback) {
    var found = undefined;
    for(i=arr.length; i>0; i--){
        if(callback(arr[i])){
            found = arr[i];
        }
    }
    return found;
}