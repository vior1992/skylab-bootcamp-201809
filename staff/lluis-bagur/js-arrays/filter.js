function filter(arr, callback) {

    var array = [];
    var cont = 0;
    for (var i=0; i<arr.length; i++){
        if(callback(arr[i])){
            array[cont] = arr[i];
            cont++;
        }   
    }

    return array;
}