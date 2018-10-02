document.querySelector('#filter').addEventListener('click', function() {
    var words = ['spray', 'limit', 'elite', 'exuberant', 'construction', 'present'];
    let res = filter(words, function(word) {
        return word.length > 6;
    });
    console.log(res);
});

function filter(arr, callback) {
    let result = [];
    for (var i = 0; i < arr.length; i++) {
        if (callback(arr[i])) {
            result[result.length] = arr[i];
        }
    }
    return result;
}
