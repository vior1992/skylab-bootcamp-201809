
function map(array,callback){
    var arr=[];
    for (var i=0; i<array.length; i++){
        arr[i] = callback(array[i]);
    }
    return arr;
    }