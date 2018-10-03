function shift (array) {
    var removed = array[0];
    for(let i=1; i<array.length; i++){
        array[i-1] = array[i];
    }
    array.length--;
    return removed;
}