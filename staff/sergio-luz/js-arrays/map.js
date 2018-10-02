function map (arr,f) {
    var temp=[];
    for (var i=0; i<arr.length; i++){
        temp[i]=f(arr[i]);
    }
    return temp;
}