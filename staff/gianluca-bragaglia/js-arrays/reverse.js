// reverse.js


function reverse(arr) {
    var k=0;
    for(var i=arr.length-1; i>=0; i--) {
        arr2[k] = arr[i];
        k++;    
    }

    for(var j=0; j<arr2.length; j++) {
        arr[j] = arr2[j];
    }
    
    return arr
}