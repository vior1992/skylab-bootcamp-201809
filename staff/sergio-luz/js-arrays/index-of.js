function indexOf(arr, tag){
    for (var i = 0; i < arr.length; i++) {
        if(arr[i]===tag){
            return i;
        }
    }
}