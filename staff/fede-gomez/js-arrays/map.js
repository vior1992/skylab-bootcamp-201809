function map (array, callback){
    var newArray = [];
    for(i=0; i<array.length; i++){
        newArray[i] = callback(array[i]);
    }
    return newArray;
}