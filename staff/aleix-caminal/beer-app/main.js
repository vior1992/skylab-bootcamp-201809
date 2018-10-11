var form = document.getElementById('search-form');
var list = document.getElementById('beer-list');
function search(query, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('get', 'https://quiet-inlet-67115.herokuapp.com/api/search/all?q=' + query);
    xhr.addEventListener("load", function() {
        var res = JSON.parse(xhr.responseText);
        callback(res);
    });
    xhr.addEventListener("error", function() {
        alert('no results');
    });
    xhr.send();
}

function retrieveBeer(id, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('get', 'https://quiet-inlet-67115.herokuapp.com/api/beer/' + id);
    xhr.addEventListener("load", function() {
        var res = JSON.parse(xhr.responseText);
        callback(res);
    });
    xhr.addEventListener("error", function() {
        alert('no beer found');
    });
    xhr.send();
}

form.addEventListener('submit', function (event) {
    event.preventDefault();
    var input = document.getElementById('search-query');
    var query = input.value;
    search(query, function (beers) {
        list.innerHtml = '';
        beers.forEach(function (beer) {
            var li = document.createElement('li');
            li.innerText = beer.name;
            li.id = beer.id
            li.addEventListener('click', function(event) {
                retrieveBeer(event.target.id, function(prop) {
                    console.log(prop);
                });
            });
            list.appendChild(li);
        });
    });
});
