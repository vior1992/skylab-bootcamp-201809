function concat(arr1, arr2) {
    var new_arr = []
    for (var i = 0; i < arr1.length + arr2.length; i++) {
        if (i < arr1.length) {
            new_arr[i] = arr1[i];
        } else {
            new_arr[i] = arr2[i - arr1.length];
        }
    }
    return new_arr;
}

/////////////////////////////////

// function concat_args() {
//     var new_arr = [];
//     for (var i = 0; i < arguments.length; i++) {
//         new_arr = concat(new_arr, arguments[i]);
//     }

//     return new_arr;
// }