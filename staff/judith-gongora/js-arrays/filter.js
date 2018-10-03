function filter(arr, callback){
    var array=[];
    e=0;
    for(i=0; i<arr.length; i++){
        if(callback(arr[i])){
            array[e]=arr[i];
            e++;
        }
    }
    return array;
}