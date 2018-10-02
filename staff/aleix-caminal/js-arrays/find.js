document.querySelector('#find').addEventListener('click', function() {
    var arr = [5, 12, 8, 130, 44];
    let res = find(arr, function(elem) {
        return elem > 10;
    });

    console.log(res);
});

function find(arr, callback) {
    for (var i = 0; i < arr.length; i++) {
        if (callback(arr[i])) {
            return arr[i];
        }
    }
}
