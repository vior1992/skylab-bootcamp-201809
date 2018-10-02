
function findIndex(arr, elem) {
    for(i=0; i<arr.length; i++) {
        if(elem(arr[i]) == true) {
            return i
        }
    }
}