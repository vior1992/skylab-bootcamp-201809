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
    // xhr.addEventListener("abort", transferCanceled);

    xhr.open('get', 'https://quiet-inlet-67115.herokuapp.com/api/search/all?q=' + query);

    xhr.send();
}

function retrieveBeer(id, callback) {
    // TODO call endpoint https://quiet-inlet-67115.herokuapp.com/api/beer/ + id
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

        var div = document.getElementsByTagName('div');
        if (div.length) {
            document.body.removeChild(div[0]);
        }

        if (beers.length) {
            var ul = document.createElement('ul');

            beers.forEach(function (beer) {
                
                var li = document.createElement('li');
                li.innerText = beer.name + ' ' + (beer.id);

                li.addEventListener('click', function (event) {
                    event.preventDefault();
                    retrieveBeer(beer.id, function (res) {
                        console.log(res);
                        var div = document.getElementsByTagName('div');
                        if (div.length) {
                            document.body.removeChild(div[0]);
                        }

                        var div = document.createElement('div');
                        document.body.appendChild(ul);

                        var title = document.createElement('h2');
                        title.innerText = res.name;
                        div.appendChild(title);

                        var text = document.createElement('p');
                        div.appendChild(text);

                        if (res.labels) {
                            if(res.description!==undefined) text.innerText = res.description;
                            var image = document.createElement('img');
                            image.src = res.labels.medium;
                            div.appendChild(image);
                        }else{
                            var info=document.createElement('h3');
                            info.innerText = 'Image no disponible';
                            div.appendChild(info);
                        }
                        document.body.appendChild(div);
                    });
                });

                ul.appendChild(li);
            });

            document.body.appendChild(ul);
        } else alert('no results');

    });
});