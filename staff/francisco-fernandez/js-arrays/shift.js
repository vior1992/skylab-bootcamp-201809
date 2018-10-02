function shift(arr){
    var temp=arr[0];
    for(var i = 0; i < arr.length; i++){
        arr[i]=arr[i+1];
    }
    if(arr.length>0){arr.length=arr.length-1;}    
    return temp;
}