const btn = document.querySelector('#click');
var arr = [1, 2, 3];

btn.addEventListener('click', function() {
    let res = map(arr, function(num) {
        return num * 2;
    });

    console.log(res);
});

function map(arr, callback) {
    let result = [];
    for (var i in arr) {
        result.push(callback(arr[i]));
    }
    return result;
}
