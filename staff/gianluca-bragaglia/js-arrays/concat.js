
function concat(arr, arr2) {
    var a = [];
    for(var i=0; i<arr.length; i++) {
        a[i] = arr[i];
    }

    for(var j=0; j<arr2.length; j++) {
        a[a.length] = arr2[j];
    }   
    
    return a
}

