function includes(arr, toSearch){

    for(var i = 0; i < arr.length; i++){

        if (arr[i] === toSearch ){
            return true;
        }
    }
    return false;
 }