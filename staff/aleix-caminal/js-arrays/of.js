document.querySelector('#of').addEventListener('click', function() {
    of(7);
    of(1, 2, 3);
    of(undefined);
});

function of() {
    var result = [];
    for (var i = 0; i < arguments.length; i++) {
        result[result.length] = arguments[i];
    }
    console.log(result);
}
