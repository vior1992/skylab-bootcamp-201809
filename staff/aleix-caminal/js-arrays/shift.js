document.querySelector('#shift').addEventListener('click', function() {
    var nums = [1, 2, 3];
    var first = shift(nums);
    console.log(nums);
    console.log(first);
});

function shift(arr) {
    var result = arr[0];
    arr = slice(arr, 1);
    return result;
}
