function from(arr, callback) {
    if (!(arr instanceof Array)) throw Error ('object is not iterable');

    var newArr =[];
    if(callback){
        for(var i=0; i<arr.length; i++){
            newArr[i] = callback(arr[i], i);
        } 
    }else{
        for(var i=0; i<arr.length; i++){
            newArr[i] = arr[i];
        }
    }
    return newArr;
}