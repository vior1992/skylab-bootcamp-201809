document.querySelector('#reverse').addEventListener('click', function() {
    var arr = ['one', 'two', 'three'];
    console.log(reverse(arr));
});

function reverse(arr) {
    var result = [];
    for (var i = 0; i < arr.length; i++) {
        result[i] = arr[arr.length - (i + 1)];
    }
    return result;
}
