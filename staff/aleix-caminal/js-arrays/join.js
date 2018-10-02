var btn = document.querySelector('#join');
var arr = [1, 2, 3];

btn.addEventListener('click', function() {
    console.log(join(arr, '-'));
});

function join(arr, separator) {
    let result = arr[0];
    for (var i = 1; i < arr.length; i++) {
        result += separator + arr[i];
    }
    return result;
}
