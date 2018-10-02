var btn = document.querySelector('#concat');
var arr = [1, 2, 3];

btn.addEventListener('click', function() {
    let res = concat(arr, function(num) {
        console.log(num * 2);
    });
});

function concat(arr, callback) {
    let result = [];
    for (var i = 0; i < arr.length; i++) {
        result.push(callback(arr[i]));
    }
    return result;
}
