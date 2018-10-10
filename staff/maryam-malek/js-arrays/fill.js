function fill(arr, value, start, end) {
    var newArr = [];

    if(end && start){
        for(i=0;i<start; i++){
            newArr[i] = arr[i];
        }
        for(var x=start; x<end; x++){
            newArr[x] = value;
        }
    }else if(!end && start){
        for(i=0;i<start; i++){
            newArr[i] = arr[i];
        }
        for(var x=start; x<arr.length; x++){
            newArr[x] = value;
        } 
    }else{
        for(i=0;i<arr.length; i++){
            newArr[i] = value;
        }
    }
    return newArr;
}