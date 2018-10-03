function some(arr, callback){
    var e = false;
    var array=[];
    for(i=0; i<arr.length; i++){
        if(callback(arr[i])){
            e=true;
            break;
        }
    }
    return e;
}