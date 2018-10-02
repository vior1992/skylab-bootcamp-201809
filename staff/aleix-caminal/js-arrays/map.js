var btn = document.querySelector('#map');
var arr = [1, 2, 3];

btn.addEventListener('click', function() {
    let res = map(arr, function(num) {
        return num * 2;
    });

    console.log(res);
});

function map(arr, callback) {
    let result = [];
    for (var i = 0; i < arr.length; i++) {
        result[i] = callback(arr[i]);
    }
    return result;
}
