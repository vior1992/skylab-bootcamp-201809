document.querySelector('#push').addEventListener('click', function() {
    var arr = [1, 2, 3];
    push(arr, 4)
    console.log(arr);
});

function push(arr, elem) {
    arr[arr.length] = elem;
}
