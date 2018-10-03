function slice (arr, num, num2){
    if(num2==undefined){
        num2=arr.length
    }
    var e= 0;
    var array=[]
    for (i=num;i<num2;i++){
        array[e]=arr[i];
        e++;
    }
     
    return array;
}