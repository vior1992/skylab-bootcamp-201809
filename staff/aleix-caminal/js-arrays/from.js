document.querySelector('#from').addEventListener('click', function() {
    console.log(from('foo'));
    console.log(from([1, 2, 3], function(x) { return x + x; }));

    var a = [1, 2, 3];
    var b = from(a);
    console.log(a);
    console.log(b);
    console.log(a === b);
});

function from(arr, callback) {
    let result = [];
    for (var i = 0; i < arr.length; i++) {
        if (typeof callback == "function") {
            result[i] = callback(arr[i]);
        } else {
            result[i] = arr[i];
        }
    }
    return result;
}
