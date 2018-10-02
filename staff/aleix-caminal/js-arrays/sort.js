document.querySelector('#sort').addEventListener('click', function() {
    var months = ['March', 'Jan', 'Feb', 'Dec'];
    console.log(sort(months));
    var nums = [1, 30, 4, 21];
    console.log(sort(nums));
});

function sort(arr) {
    let result = [];
    for (var i = 0; i < arr.length; i++) {
        var min = i;
        for (var j = i; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }

        var sorted = arr[i];
        arr[i] = arr[min];
        arr[min] = sorted;
    }
    return arr;
}
