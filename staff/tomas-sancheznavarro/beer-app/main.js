function search(query, callback) {
    var xhr = new XMLHttpRequest();

    // xhr.onreadystatechange = function () {
    //     if (xhr.readyState === 4 && xhr.status === 200) {
    //         // console.log(xhr.responseText);

    //         var res = JSON.parse(xhr.responseText);

    //         // console.log(res);

    //         callback(res);
    //     }
    // };
    // xhr.addEventListener("progress", updateProgress);

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
    });

    xhr.addEventListener("error", function () {
        callback([]);
    });

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
                // console.log(beer.id, beer.name);

                var li = document.createElement('li');
                li.innerText = 'Name: ' + beer.name + ', id: ' + beer.id;

                // TODO on click on beer do retrieve beer and show beer below
                li.addEventListener('click', function () {
                    retrieveBeer(beer.id, function (details) {
                        console.log(details);

                        var titles = document.createElement('h2');

                        titles.innerText = details.name;

                        document.body.appendChild(titles);

                        var image = document.createElement('img');

                        if (details.labels) {
                            image.src = details.labels.medium;
                            document.body.appendChild(image);
                        } else {
                            var message = document.createElement('h3');
                            message.innerText = 'no image available';
                            document.body.appendChild(message);
                        }

                        var info = document.createElement('p');

                        if (details.description) {
                            info.innerText = details.description;
                            document.body.appendChild(info);

                        } else {
                            var message_2 = document.createElement('p');
                            message_2.innerText = 'no description available';
                            document.body.appendChild(message_2);
                        }




                    });
                });

                ul.appendChild(li);
            });

            document.body.appendChild(ul);
        } else alert('no results');

    });


});