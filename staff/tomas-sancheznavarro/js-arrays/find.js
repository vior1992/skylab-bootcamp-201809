function find(arr, func) {

    if (typeof arr === 'undefined') throw Error('undefined is not an array');
    if (typeof func === 'undefined') throw Error('undefined is not a function');

    for (var i = 0; i < arr.length; i++) {
        if (func(arr[i])) {
            return arr[i];
        } else {
            if (func(arr[i]) === -1)
                return undefined;
        }
    }
}