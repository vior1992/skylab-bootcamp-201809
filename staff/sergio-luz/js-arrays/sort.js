function sort(arr) {
    var arr2=[], temp=[];
    for (var i = 0; i < arr.length; i++) {
        arr2[i]=arr[i];        
    }
    for (var i = 0; i < arr.length; i++) {
        temp[i]=arr[i].toString();
        arr[i]=temp[i];        
    }
    for (var j = 1; j < arr.length; j++) {
        for (var i = 1; i < arr.length; i++) {
            if (arr[i] < arr[i - 1]) {
                var temp = arr[i - 1];
                arr[i - 1] = arr[i];
                arr[i] = temp;
            }
        }
    }
    return arr2;
}