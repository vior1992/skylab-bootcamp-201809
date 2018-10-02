function findIndex(arr, callback) {
    var index = -1;
    for(i=arr.length; i>0; i--){
        if(callback(arr[i])){
            index = i;
        }
    }
    return index;
}