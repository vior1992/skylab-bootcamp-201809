

function push(arr, elem) {
    var myLength = arr.length;
    for (var i = 0; i < elem.length; i++)  arr[myLength +i] = elem[i];
    return arr
}


