function search(query, callback) {
    var xhr = new XMLHttpRequest();

    xhr.addEventListener("load", function () {
        var res = JSON.parse(xhr.responseText);
        callback(res);
    });

    xhr.addEventListener("error", function () {
        callback([]);
    });

    xhr.open('get', 'https://quiet-inlet-67115.herokuapp.com/api/search/all?q=' + query);

    xhr.send();
}

function retrieveBeer(id, callback) {
    var xhr = new XMLHttpRequest();

    xhr.addEventListener("load", function () {
        var res = JSON.parse(xhr.responseText);
        callback(res);
    })

    xhr.addEventListener("error", function () {
        callback([]);
    })

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
        var containers = document.getElementsByTagName('div');
        if (uls.length) {
            document.body.removeChild(uls[0]);
        }
        if (containers.length) {
            document.body.removeChild(containers[0]);
        }

        if (beers.length) {
            var ul = document.createElement('ul');

            beers.forEach(function (beer) {
                var li = document.createElement('li');
                li.innerText = beer.name + ' ' + (beer.id);
                ul.appendChild(li);
                li.addEventListener('click', function () {
      
                    retrieveBeer(beer.id, function (res) {
                        var containers = document.getElementsByTagName('div');
                        if (containers.length) {
                            document.body.removeChild(containers[0]);
                        }
                        var container = document.createElement('div');
                        document.body.appendChild(container);
                        var par = document.createElement('p');
                        par.innerText = res.nameDisplay;
                        container.appendChild(par);
                        var img = document.createElement('img');
                        if (res.labels) {
                            img.src = res.labels.medium;
                            container.appendChild(img);
                        }
                    })

                })
            });

            document.body.appendChild(ul);
        } else alert('no results');

    });


});