function of(elems) {
    console.log([].slice.call(arguments));
}

// Another possible solution... (ES6)

/*

function of(elems) {
    console.log([...arguments]);
}

*/