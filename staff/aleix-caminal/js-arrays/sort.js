document.querySelector('#sort').addEventListener('click', function() {
    var months = ['March', 'Jan', 'Feb', 'Dec'];
    console.log(sort(months));
    console.log(months);
    var nums = [1, 30, 4, 21];
    console.log(sort(nums));
    console.log(nums);
});

function sort(arr) {
    for (var i = 0; i < arr.length - 1; i++) {
        var min = i;
        for (var j = i; j < arr.length; j++) {
            if ('' + arr[j] < '' + arr[min]) {
                min = j;
            }
        }

        var sorted = arr[i];
        arr[i] = arr[min];
        arr[min] = sorted;
    }
    return arr;
}
