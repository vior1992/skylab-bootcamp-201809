function map(arr, callback){

    var output = [];
    for(var i = 0;i < arr.length;i++){
        output[i] = callback(arr[i]);

    }
    return output;

}