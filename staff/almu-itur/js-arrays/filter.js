function filter(arr, callback) {
    var index = 0;
    var indexResult = 0;
    var result = [];
    var flag = false;

    for(index=0; index<arr.length; index++) {
        
        flag = callback(arr[index]);

        if(flag == true) {
            result[indexResult] = arr[index];
            indexResult++;
        }
    }
    return result;
}