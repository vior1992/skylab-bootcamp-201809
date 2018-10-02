function includes(arr, elem) {
    for (x=0;x<arr.length;x++){
        if(elem === arr[x]){
            return true;
        }
    }return false;
}