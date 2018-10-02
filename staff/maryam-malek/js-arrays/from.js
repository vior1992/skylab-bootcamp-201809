function from(arr, callback) {
    var newArr =[];
    if(callback){
        for(var i=0; i<arr.length; i++){
            newArr[i] = callback(arr[i]);
        } 
    }else{
        for(var i=0; i<arr.length; i++){
            newArr[i] = arr[i];
        }
    }
    return newArr;
}