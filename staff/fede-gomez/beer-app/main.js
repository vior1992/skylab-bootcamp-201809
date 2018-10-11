function search(query, callback) {
    var xhr = new XMLHttpRequest();

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

    var xhr = new XMLHttpRequest();

    xhr.addEventListener("load", function () {
        var res = JSON.parse(xhr.responseText);

        callback(res);
    });

    xhr.addEventListener("error", function () {
        callback([]);
    });

    xhr.open('get', 'https://quiet-inlet-67115.herokuapp.com/api/beer/' + id);

    xhr.send();

    // TODO call endpoint https://quiet-inlet-67115.herokuapp.com/api/beer/ + id
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
            //var section = document.getElementsByTagName('section');

            beers.forEach(function (beer) {
                // console.log(beer.id, beer.name);

                var li = document.createElement('li');
                ul.appendChild(li);

                var a = document.createElement('a');
                a.innerText = beer.name + ' ' + (beer.id);
                a.className = 'beer' + beer.id;

                // TODO on click on beer do retrieve beer and show beer below

                li.appendChild(a);

                var section;

                a.addEventListener('click', function (event) {
                    event.preventDefault();
                    
                    retrieveBeer(beer.id, function (res) {
                        if (res) {
                            var section = document.createElement('section');
                            var h1 = document.createElement('h1');
                            var p = document.createElement('p');
                            var img = document.createElement('img');
                            section.className = beer.id;
                            h1.innerText = res.name;
                            // p.innerText = res.description;
                            img.id = beer.id;
                            // img.src = res.labels.medium;

                            (res.description !== undefined) ? (p.innerText = res.description) : (p.innerText = 'No description');
                            (res.labels !== undefined) ? (img.src = res.labels.medium) : (img.src = "https://dummyimage.com/200x100/000/fff");

                            document.body.appendChild(section);
                            section.appendChild(h1);
                            section.appendChild(img);
                            section.appendChild(p);
                        }
                    });
                });
            });

            document.body.appendChild(ul);
        } else alert('no results');

    });

});