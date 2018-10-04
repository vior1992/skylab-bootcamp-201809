document.querySelector('#sort').addEventListener('click', function() {
    var months = ['March', 'Jan', 'Feb', 'Dec'];
    console.log(sort(months));
    console.log(months);
    var nums = [1, 30, 4, 21];
    console.log(sort(nums));
    console.log(nums);
});

function sort(arr) {
    if (!Array.isArray(arr)) throw Error('array is not valid');
    if (arr.length <= 0) throw Error('array is empty');

    var result = slice(arr);
    for (var i = 0; i < result.length - 1; i++) {
        var min = i;
        for (var j = i; j < result.length; j++) {
            if ('' + result[j] < '' + result[min]) {
                min = j;
            }
        }

        var sorted = result[i];
        result[i] = result[min];
        result[min] = sorted;
    }
    return result;
}
