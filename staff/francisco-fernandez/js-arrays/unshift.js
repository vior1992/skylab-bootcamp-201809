function unshift (arr){
    var newArray = [];
    debugger
    for(var i = 0;i<arr.length;i++){
        newArray[i]=arr[i];
    }
    if(arguments.length>1){
    for(var i=1;i<arguments.length;i++){
        newArray[arr.length+i]=arguments[i];
    }
}
    for(var j=0; j<newArray.length; j++){
        arr[j]=newArray[j];
    }
    return newArray.length;
}