function reverse (arr){
    var arraytemp = arr;
    //debugger
    for(var i = 0; i<arr.length ; i++){
        arr[i]=arraytemp[arr.length-1-i];
    }
}