// slice.js

function slice(arr, begin, end) {
    if (end === undefined) end = arr.length;
    var output = [];
    var j = 0;
    for(var i = begin; i < end;i++){
        output[j] = arr[i];
        j++;
    }
    return output;
}