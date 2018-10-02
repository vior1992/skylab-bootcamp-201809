function indexOf(arr, elem) {
    var index = -1;
    for(i=arr.length; i>0; i--){
        if(arr[i] === elem){
            index = i;
        }
    }
    return index;
}