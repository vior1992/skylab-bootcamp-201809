function from(arr) {
    var array=[];
    var i=0;
    for (var p in arr){ //IMPORTANTE
        if(arguments[1] instanceof Function){
            array[i]= arguments[1](arr[p]);
            i++;
        } else{
            array[i]=arr[p];
            i++;
        }
        
    }
    return array;
}