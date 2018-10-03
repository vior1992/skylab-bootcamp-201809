function find(arr, callback){
    for(i=0; i<arr.length; i++){
        if(callback(arr[i])){
            break;
        }
    }
    return arr[i];
}