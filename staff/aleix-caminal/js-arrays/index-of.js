var btn = document.querySelector('#index');
var arr = ['ant', 'bison', 'camel', 'duck', 'bison'];

btn.addEventListener('click', function() {
    console.log(indexOf(arr, 'bison'));
});

function indexOf(arr, elem) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === elem) {
            return i;
        }
    }
}
