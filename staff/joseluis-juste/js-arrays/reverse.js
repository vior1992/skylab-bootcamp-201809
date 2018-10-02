function reverse(arr){

    var aux;
    var j = 0;
    for(var i = arr.length-1;i >= 0;i--){

        aux = arr[j];
        arr[j] = arr[i];
        arr[i] = aux;
        j++;
        if ((arr.length % 2) == 0)
        {
            if(j == arr.length/2) 
                break;
        }
        else 
        {
            if(j == (arr.length % 2) + 1) 
                break;
        }
    }
    return arr;
}