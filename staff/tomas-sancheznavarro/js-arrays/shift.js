function shift(arr) {
    var new_arr = [];
    var firstItem = arr[0];

    // recorro el array original y meto sus elementos en new_arr
    for (var i = 0; i < arr.length; i++) {
        new_arr[i] = arr[i];
    }
    // vacío el array original
    arr.length = 0;

    // recorro el nuevo array y meto sus elementos excepto aquel en el índice 0
    for (var i = 1; i < new_arr.length; i++)
        arr[i - 1] = new_arr[i];

    // devuelvo el primer elemento
    return firstItem;
}