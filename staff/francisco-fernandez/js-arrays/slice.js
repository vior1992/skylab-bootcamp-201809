function slice(arr,arg1,arg2){
    var newArray=[];
    var j=0;
    for(var i = arg1; i < arg2; i++){
        newArray[j]=arr[i];
        j++;
    }
    return newArray;
}