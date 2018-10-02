function from(arr, callback = null) {
    var result = [];

    if (typeof(arr) == 'string') return arr.split('');   

    for (var i = 0; i < arr.length; i++) result[i] = (callback) ? callback(arr[i]) : arr[i];

    return result;
}