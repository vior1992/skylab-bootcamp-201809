function indexOf(arr, elem) {
    var index = 0;
    for (var i=0; i<arr.length; i++){
        if (arr[i] == elem){
            index ++;
        }
    }
        if (index == 0){
            index = -1;
        }
        return index;
    }