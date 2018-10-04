function find(arr, callback) {
    
    if(typeof callback !== 'function') throw Error (callback + ' is not a function')
    
    var found = undefined;
    for(i=arr.length; i>0; i--){
        if(callback(arr[i])){
            found = arr[i];
        }
    }
    return found;
}