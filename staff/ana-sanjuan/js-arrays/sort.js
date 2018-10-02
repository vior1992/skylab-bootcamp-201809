
function sort(arr) {
    var result = [];
    for (var i = 0; i < arr.length; i++){
        for (var j = 0; j < arr.length; j++){
            result[i] = (arr[i][0] < arr[j][0])? arr[i] : arr[j];
        }
    }
}