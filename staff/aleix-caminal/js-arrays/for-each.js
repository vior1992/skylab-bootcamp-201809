document.querySelector('#for-each').addEventListener('click', function() {
    var arr = [1, 2, 3];
    forEach(arr, function(num) {
        console.log(num * 2);
    });
});

function forEach(arr, callback) {
    let result = [];
    for (var i = 0; i < arr.length; i++) {
        result[i] = callback(arr[i]);
    }
    return result;
}
