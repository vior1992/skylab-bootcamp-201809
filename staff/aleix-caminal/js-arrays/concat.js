var btn = document.querySelector('#concat');
var arr = [1, 2, 3];
var arr2 = [4, 5, 6];

btn.addEventListener('click', function() {
    console.log(concat(arr, arr2));
});

function concat() {
    let result = [];
    for (var i = 0; i < arguments.length; i++) {
        for (var j = 0; j < arguments[i].length; j++) {
            result.push(arguments[i][j]);
        }
    }
    return result;
}
