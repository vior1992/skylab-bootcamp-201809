function join(arr, separator){
    var output = "";

    for(var i = 0; i < arr.length; i++){

        output += arr[i] +  (i+1 == arr.length ? "" : separator);
    }
    return output;
}