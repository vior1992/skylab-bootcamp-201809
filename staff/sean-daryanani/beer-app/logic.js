var logic = {

    call: function(path, callback, defaultValueonError) {
        var xhr = new XMLHttpRequest();
    
        xhr.addEventListener("load", function () {
            var res = JSON.parse(xhr.responseText);
            callback(res);
        });
    
        xhr.addEventListener("error", function () {
            callback(defaultValueonError);
        });
    
        xhr.open('get', 'https://quiet-inlet-67115.herokuapp.com/api' + path);
    
        xhr.send();
    },
    search: function(query, callback) {
        if (callback === undefined ) throw Error('undefined is not a function')
        this.call('/search/all?q=' + query, callback, []);
    },
    
    
    retrieveBeer: function(id, callback) {
        this.call('/beer/' + id, callback);
    }
}