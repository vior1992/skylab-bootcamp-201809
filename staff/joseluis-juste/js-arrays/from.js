function from(arr){
    var output = [];
    var i = 0;
    for(var p in arr){

        if (arguments[1] instanceof Function){
            output[i] = arguments[1](arr[p]);
        }else{
            output[i] = arr[p];
        }
        i++;
    }
    return output;
}