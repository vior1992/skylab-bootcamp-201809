function of(elems) {
    return console.log([].slice.call(arguments));
}

// Another possible solution... (ES6)

/*

function of(elems) {
    return console.log([...arguments]);
}

*/