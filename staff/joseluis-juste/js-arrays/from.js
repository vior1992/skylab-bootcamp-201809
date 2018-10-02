function from(arr, callback){
    var output = [];
    var i = 0;
    for(var p in arr){

        output[i] = callback(arr[p]);
        i++;
    }
    return output;
}