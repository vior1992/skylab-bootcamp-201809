function sort(input) {
    var arr = [];

    for(var i = 0;i < input.length;i++){
        arr[i] = input[i];
    }

    for (var i = 0; i < arr.length - 1; i++) {
        for (var j = 1; j < arr.length; j++) {
            if (arr[j] < arr[j - 1]) {   
                var aux_elem = arr[j];
                arr[j] = arr[j - 1];
                arr[j - 1] = aux_elem;

            }
        }
    }
    return arr;
   
}


