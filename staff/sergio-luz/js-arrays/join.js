function join(arr, string){
    var temp="";
    for (var i=0; i<arr.length-1; i++){
        temp+=arr[i]+"-"
    }
    temp+=""+arr[arr.length-1];
    return temp;
}