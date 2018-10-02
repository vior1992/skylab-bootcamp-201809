function slice(arr, begin, end) {
    var newArr = [];
    var beg = begin;
    if(end){
        for (i=0; i<(end-beg); i++){
            newArr[i] = arr[begin];
            begin++;
        }
    }else{
        for (i=0; i<(arr.length-beg); i++){
            newArr[i] = arr[begin];
            begin++;
        }
    }
    return newArr;
}