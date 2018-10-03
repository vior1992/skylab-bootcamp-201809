function forEach(arr, callback){
    
    if(typeof arr !== 'array') throw Error ('input is not an array');
    for( var i=0; i<arr.length; i++){
        callback(arr[i], i , arr);
    }
}
