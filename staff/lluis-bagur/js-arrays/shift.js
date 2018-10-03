function shift(arr) {
    var first = arr[0];
    var array = [];

    

        for (var i=0; i<arr.length; i++){
            array[i]=arr[i+1];
        }
        arr.length--;

        for (var e=0; e<arr.length; e++){
            arr[e]=array[e];
        }

        return first;
}