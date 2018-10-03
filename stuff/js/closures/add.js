function add(a, b) {
    var res = a + b;

    return {
        add: function(c) {
            return add(res, c);
        },

        result: function() {
            return res;
        }
    }
}