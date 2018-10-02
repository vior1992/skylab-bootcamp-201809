function slice(arr, begin, end) {
    var newArr = [];
    var iterator = 0;
    if (begin === undefined && end === undefined) {
        newArr = arr;
        return newArr;
    } 
    else if (begin != undefined && end===undefined) {
        for (var i = 0; i < arr.length - begin; i++) {
            newArr[i] = arr[begin + i];
        }
    }
    else {
        for (var i = begin; i < end; i++) {
            newArr[iterator] = arr[i];
            iterator++
        }
    }
    return newArr;
}