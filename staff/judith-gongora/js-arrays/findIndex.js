function findIndex(arr, callback){
    for(i=0; i<arr.length; i++){
        if(callback(arr[i])){
            break;
        }
    }
    return i;
}