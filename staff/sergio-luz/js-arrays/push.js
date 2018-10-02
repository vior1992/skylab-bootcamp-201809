function push() {
    var count = 0;
    for (var i = 1; i < arguments.length; i++) {
        arguments[0][arguments[0].length + count] = arguments[i];
        count++;
    }
    return arguments[0];
}