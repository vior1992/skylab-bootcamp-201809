function fill(arr, value, start, end) {
    for (var i=0; i<arr.length; i++) {
        if (start===undefined && end === undefined) {
            arr[i] = value;
        }
        else if(start != undefined & end === undefined) {
            if (i>=start) {
                arr[i] = value;
            }
        }
        else {
            if (i>=start && i<=end) {
                arr[i]=value;
            }
        }
    }
    return arr;
}