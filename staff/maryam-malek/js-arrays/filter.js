function filter(arr, callback) {
    var newArr = [];
    var index = 0;
    for(i=0; i<arr.length; i++){
        if(callback(arr[i])){
            newArr[index] = arr[i];
            index++;
        }
    }
    return newArr;
}