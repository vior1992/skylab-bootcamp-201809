function every(arr, callback){
    var e = true;
    var array=[];
    for(i=0; i<arr.length; i++){
        if(callback(arr[i])==false){
            e=false;
            break;
        }
    }
    return e;
}