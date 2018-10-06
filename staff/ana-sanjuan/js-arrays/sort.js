
function sort(arr) {
    var temp;

    for (var j = 0; j < arr.length -1; j++){
        for (var i = 0; i < arr.length; i++){
            if (arr[i] > arr[i +1]){
                temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
            }
        }
    }
    return arr;
}
