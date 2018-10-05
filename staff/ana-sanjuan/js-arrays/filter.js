
function filter(arr, callback) {
    var result = [], counter = 0;
    for (var i = 0; i < arr.length; i++){
        if(callback(arr[i])){
            result[counter] = arr[i];
            counter++;
        } 
    }
    return result
}


// var result = [];
//     for (var i = 0; i < arr.length; i++){
//         if(callback(arr[i])){
//             result[result.length] = arr[i];
//         } 
//     }
//     return result
