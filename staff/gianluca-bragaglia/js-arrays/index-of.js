
function indexOf(arr, elem) {
    for(var i=0; i<arr.length; i++) {
        if(elem === arr[i]) {
            return i
        }
    }
}