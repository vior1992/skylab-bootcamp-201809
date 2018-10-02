function filter(arr, callback){

    var output = [];
    var j = 0;
    for(var i = 0; i < arr.length;i++){

        if(callback(arr[i]))
        {
             output[j] = arr[i];
             j++;
        }
    }
    return output;
}