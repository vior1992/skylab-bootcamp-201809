function filter (arr,f){
    var newArray = [];
    var j = 0;
    for(var i = 0; i<arr.length; i++){
        if(f(arr[i])===true){
            newArray[j]=arr[i];
            j++;
        }
    }
    return newArray;
}