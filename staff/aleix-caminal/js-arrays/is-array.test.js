document.querySelector('#test-is-array').addEventListener('click', function() {
    console.log(isArray([1, 2, 3]));
    console.log(isArray({foo: 123}));
    console.log(isArray('foobar'));
    console.log(isArray(undefined));
});

function isArray(arr) {
    return arr instanceof Array;
}
