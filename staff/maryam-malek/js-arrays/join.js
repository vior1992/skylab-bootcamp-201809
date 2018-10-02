function join(arr, separator) {
    var str = '';
    if(separator){
        for(i=0; i<arr.length-1; i++){
            str += arr[i] + separator;
        }
        str += arr[arr.length-1]
    }else{
        for(i=0; i<arr.length-1; i++){
            str += arr[i] + ',';
        }
        str += arr[arr.length-1]
    }
return str;
}