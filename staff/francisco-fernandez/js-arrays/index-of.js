function indexOf(arr,search){
    for(var i = 0; i < arr.length; i++){
        if(arr[i]===search){
            return i;
        }
    }
    return -1;

}