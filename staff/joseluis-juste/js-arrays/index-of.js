function indexOf(arr, search, fromIndex = 0){

    var output = -1;
    if (fromIndex >= arr.length) return output;
    for(var i = fromIndex; i < arr.length; i++){

        if (arr[i] === search ){
            output = i;
            break;
        }
    }
    return output;
}