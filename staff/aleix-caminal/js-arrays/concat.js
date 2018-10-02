document.querySelector('#concat').addEventListener('click', function() {
    var arr = [1, 2, 3];
    var arr2 = [4, 5, 6];
    var res = concat(arr, arr2)
    console.log(res);
});

function concat(...elems) {
    var result = [];
    for (var i = 0; i < elems.length; i++) {
        for (var j = 0; j < elems[i].length; j++) {
            result[result.length] = elems[i][j];
        }
    }
    return result;
}
