function reverse(arr){
    var array=[];
    var e = 0;
    for(i=arr.length-1; i>=0; i--){
        array[e]=arr[i];
        e++;
    }
    for (i=0;i<arr.length;i++){
        arr[i]=array[i];
    }
}