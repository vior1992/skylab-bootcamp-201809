function http(url, identifier, callback) {
    var xhr = new XMLHttpRequest();
    xhr.addEventListener("load", function() {
        var res = JSON.parse(xhr.responseText);

        callback(res);
    });
    xhr.addEventListener("error", function() {
        callback([]);
    });
    // xhr.addEventListener("abort", transferCanceled);
    xhr.open('get', url + identifier);
    xhr.send();
}

// function search(query, callback) {
//     var xhr = new XMLHttpRequest();
//     xhr.addEventListener("load", function() {
//         var res = JSON.parse(xhr.responseText);

//         callback(res);
//     });
//     xhr.addEventListener("error", function() {
//         callback([]);
//     });
//     // xhr.addEventListener("abort", transferCanceled);
//     xhr.open('get', 'https://quiet-inlet-67115.herokuapp.com/api/search/all?q=' + query);
//     xhr.send();
// }

// function retrieveBeer(id, callback) {
//     var xhr = new XMLHttpRequest();
//     xhr.addEventListener("load", function() {
//         var res = JSON.parse(xhr.responseText);

//         callback(res);
//     });
//     xhr.addEventListener("error", function() {
//         callback([]);
//     });
//     // xhr.addEventListener("abort", transferCanceled);
//     xhr.open('get', 'https://quiet-inlet-67115.herokuapp.com/api/beer/' + id);
//     xhr.send();
// }

function search(query, callback) {
    http('https://quiet-inlet-67115.herokuapp.com/api/search/all?q=', query, callback);
}
function retrieveBeer(id, callback) {
    http('https://quiet-inlet-67115.herokuapp.com/api/beer/', id, callback);
}
