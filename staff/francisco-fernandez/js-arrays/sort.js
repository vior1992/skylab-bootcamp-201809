function sort(arr){
    var newArray = [];
    for(var i = 0; i < arr.length; i++){
        newArray[i]=arr[i];
    }
    var temp;
    //debugger
    for(var j=0; j<newArray.length-1; j++){
        for(var i=0; i<newArray.length-1; i++){
            if(newArray[i]>newArray[i+1]){
                temp=newArray[i];
                newArray[i]=newArray[i+1];
                newArray[i+1]=temp;
            }
        }
        }
    return newArray;  
}
