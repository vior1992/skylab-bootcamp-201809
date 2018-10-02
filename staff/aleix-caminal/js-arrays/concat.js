document.querySelector('#concat').addEventListener('click', function() {
    var arr = [1, 2, 3];
    var arr2 = [4, 5, 6];
    console.log(concat(arr, arr2));
});

function concat() {
    let result = [];
    for (var i = 0; i < arguments.length; i++) {
        for (var j = 0; j < arguments[i].length; j++) {
            result[j + (arguments[i].length * i)] = arguments[i][j];
        }
    }
    return result;
}
