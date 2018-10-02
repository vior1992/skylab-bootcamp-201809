function of(elems) {
    console.log(elems)
    var result = [];
    for (var i = 0; i < elems.length; i++){
        result[i] = elems[i];
    }
    console.log(result)
    return result;
}


console.log('DEMO of');

of(7); // [7] 
of(1, 2, 3); // [1, 2, 3]
of(undefined); // [undefined]