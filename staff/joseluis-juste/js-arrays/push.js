function push(){
    
    var arr = arguments[0];
    var aux = arr.length;
    for(var i = 1; i < arguments.length;i++){
        arr[aux] = arguments[i];
        aux++;
    }
    return arr;
}