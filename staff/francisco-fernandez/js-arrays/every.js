function every (arr,f) {
    var counter=0;
    for(var i = 0; i < arr.length ; i++){
        if (f(arr[i])===true){
            counter++;
        }
    }
    if(counter===arr.length){
        return true;
    }
    return false;
}