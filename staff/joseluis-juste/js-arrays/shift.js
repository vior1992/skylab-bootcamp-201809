function shift(arr) {

    var aux = arr[0];
    var arr_aux = [];
    var j = 0;
    for (var i = 1; i < arr.length; i++) {
        arr_aux[j] = arr[i];
        j++;
    }
    arr.length = 0;
    j = 0;
    for (var i = 0; i < arr_aux.length; i++) {
        arr[j] = arr_aux[i];
        j++;
    }
    return aux;
}