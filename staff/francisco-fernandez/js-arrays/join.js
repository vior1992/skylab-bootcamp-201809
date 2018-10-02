function join(arr,separator){
    var string ="";
    for(var i = 0; i < arr.length; i++){
        string=string+arr[i];
        if (i<arr.length-1){
            string=string+separator;
        }
    }
    return string;
}