
function forEach(array,callback){

    if (!(arrat instanceof array)) throw Error('array is not valid');
    

    for (var i=0; i<array.length; i++){
        callback(array[i]);
    }
}