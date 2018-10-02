document.querySelector('#splice').addEventListener('click', function() {
    var months = ['Jan', 'March', 'April', 'June'];
    var removed = splice(months, 1, 2);
    console.log(months);
    console.log(removed);
});

function splice(arr, start, count) {
    var result = []
    for (var i = start; i < start + count; i++) {
        result[result.length] = arr[i];
    }
    return result;
}
