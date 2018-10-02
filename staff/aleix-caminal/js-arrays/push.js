document.querySelector('#push').addEventListener('click', function() {
    var arr = [1, 2, 3];
    console.log(push(arr, 4));
});

function push(arr, elem) {
    arr[arr.length] = elem;
    return arr;
}
