function indexOf(arr, search){
    for(i=0; i<arr.length; i++){
        if(arr[i]===search){
            break;
        }
    }
    return i;
}