function shift (arr){
    if (arr.length==0){
        first='undefined'
    }else{
        var array=[]
        for (i=0;i<arr.length-1;i++){
            array[i]=arr[i+1];
        }
        var first= arr[0]
        arr.length--;
        for (i=0;i<arr.length;i++){
            arr[i]=array[i];
        }
    }  
    return first;
}