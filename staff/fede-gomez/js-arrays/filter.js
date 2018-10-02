function filter (array, callback) {
    var index = 0;
    var result = [];
    for(let i=0; i<array.length; i++){
        if(callback(array[i])){
            result[index++] = array[i];
        }
    }
    return result;
}