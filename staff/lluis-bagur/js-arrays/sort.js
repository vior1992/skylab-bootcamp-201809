function sort(arr) {
    var aux;
    var array=[];


    for(var e=0;e<arr.length; e++){
        array[e]=arr[e];
    
    }

    for(var i=0; i<array.length -1; i++){
        for (var j=0; j<array.length -i -1; j++){
            if(array[j+1] < array[j]){
                aux = array[j+1];
                array[j+1] = array[j];
                array[j]= aux;
            }
        }
    }
    return array;
}