function join(arr,item){
    var res=arr[0]+item;
    for(i=1; i<arr.length-1; i++){
        res+=arr[i]+item;
    }
    res+=arr[arr.length-1]
    return res;
}