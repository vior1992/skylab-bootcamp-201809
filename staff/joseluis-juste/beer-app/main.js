function search(query, callback) {
    var xhr = new XMLHttpRequest();

    // xhr.addEventListener("progress", updateProgress);
    xhr.addEventListener("load", function () {
        var res = JSON.parse(xhr.responseText);

        callback(res);
    });

    xhr.addEventListener("error", function () {
        callback([]);
    });
    // xhr.addEventListener("abort", transferCanceled);

    xhr.open('get', 'https://quiet-inlet-67115.herokuapp.com/api/search/all?q=' + query);

    xhr.send();
}

function retrieveBeer(id, callback) {
    // TODO call endpoint https://quiet-inlet-67115.herokuapp.com/api/beer/ + id

    var xhr = new XMLHttpRequest();

    // xhr.addEventListener("progress", updateProgress);
    xhr.addEventListener("load", function () {
        var res = JSON.parse(xhr.responseText);

        if (res.labels)
            callback(res.labels.medium);
        else
            callback("./img/img.png");
    });

    xhr.addEventListener("error", function () {
        callback("");
    });
    // xhr.addEventListener("abort", transferCanceled);

    xhr.open('get', 'https://quiet-inlet-67115.herokuapp.com/api/beer/' + id);

    xhr.send();
}

var form = document.getElementById('search-form');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    var input = document.getElementById('search-query');

    var query = input.value;

    search(query, function (beers) {
        var uls = document.getElementsByTagName('ul');

        if (uls.length) {
            document.body.removeChild(uls[0]);
           
        }

        if (beers.length) {
            var ul = document.createElement('ul');

            beers.forEach(function (beer) {
               

                var li = document.createElement('li');
                li.innerText = beer.name;

                li.addEventListener("click", function (ev) {
                    ev.preventDefault();
                    ev.stopPropagation();
                    Array.prototype.forEach.call(document.getElementsByTagName('li'), function(el){

                        el.style.color = "black";

                    });
                    ev.target.style.color = "red";
                    if (document.getElementsByTagName('img').length){
                        document.body.removeChild(document.getElementsByTagName('img')[0]);
                    }
                   
                    retrieveBeer(beer.id, function (url) {
                        var img = document.createElement('img');
                        img.src = url;
                        document.body.appendChild(img);
                    });

                });

                ul.appendChild(li);
            });

            document.body.appendChild(ul);
        } else alert('no results');

    });
});