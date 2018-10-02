// from.js

function from(arr, callback) {
    var result = [];
    if(callback) {
        for (var i = 0; i < arr.length; i++) result[i] = callback(arr[i]);
    } else {    
        for (var i = 0; i < arr.length; i++) result[i] = arr[i];
    }
    return result;
}



// var result = [];
//     if(callback) {
//         for (var i = 0; i < arr.length; i++){
//             result[i] = callback(arr[i]);
//         }
//     } else {    
//         for (var i = 0; i < arr.length; i++){
//             result[i] = arr[i];
//         }
//     }
//     return result;
// }