function sort(arr) {

    if (!(arr instanceof Array)) throw Error('array is not valid');
    if(!arr.length)    throw Error('array is empty');

    var arr2=[], temp=[];
    for (var i = 0; i < arr.length; i++) {
        arr2[i]=arr[i];        
    }
    for (var i = 0; i < arr2.length; i++) {
        temp[i]=arr2[i].toString();
        arr2[i]=temp[i];        
    }
    for (var j = 1; j < arr2.length; j++) {
        for (var i = 1; i < arr2.length; i++) {
            if (arr2[i] < arr2[i - 1]) {
                var temp = arr2[i - 1];
                arr2[i - 1] = arr2[i];
                arr2[i] = temp;
            }
        }
    }
    return arr2;
}