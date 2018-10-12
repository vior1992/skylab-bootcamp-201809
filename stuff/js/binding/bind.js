function bind(func, context) {
    return function() {
        // console.log(arguments);

        var args = Array.prototype.slice.call(arguments);

        return func.apply(context, args);
    }
}