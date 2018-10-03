document.querySelector('#test-filter').addEventListener('click', function() {
    var words = ['spray', 'limit', 'elite', 'exuberant', 'construction', 'present'];
    var res = filter(words, function(word) {
        return word.length > 6;
    });

    console.log(res);
});

function filter(arr, callback) {
    var result = [];
    for (var i = 0; i < arr.length; i++) {
        if (callback(arr[i])) {
            result[result.length] = arr[i];
        }
    }
    return result;
}
