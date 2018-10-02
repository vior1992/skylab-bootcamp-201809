document.querySelector('#every').addEventListener('click', function() {
    var values = [1, 30, 39, 29, 10, 13];
    var res = every(values, function(elem) {
        return elem < 40;
    });

    console.log(res);
});

function every(arr, callback) {
    for (var i = 0; i < arr.length; i++) {
        if (!callback(arr[i])) {
            return false;
        }
    }
    return true;
}
