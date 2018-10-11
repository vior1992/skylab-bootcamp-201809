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
    xhr.addEventListener("load", function () {
        var res = JSON.parse(xhr.responseText);

        callback(res);
    });

    xhr.addEventListener("error", function () {
        callback([]);
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
                // console.log(beer.id, beer.name);
                var li = document.createElement('li');
                li.innerText = beer.name + ' ' + (beer.id);
                
                // TODO on click on beer do retrieve beer and show beer below
                li.addEventListener('click', function () {
                    var h = document.createElement('h3');

                    if (h.length) {
                        document.body.removeChild(h[0]);
                        document.body.removeChild(pic[0]);
                        document.body.removeChild(p[0]);
                    }

                    h.innerText = beer.name;
                    document.body.appendChild(h);
                
                    if (beer.labels) {
                        var pic = document.createElement('img');
                        pic.src = beer.labels.medium;
                        document.body.appendChild(pic);
                    } else {
                        var pic = document.createElement('img');
                        pic.src = 'https://i.pinimg.com/originals/6a/e8/a7/6ae8a729773b78fc3c94d451d8ccde36.jpg';
                        document.body.appendChild(pic);
                    }

                    var p = document.createElement('p');
                    p.innerText = beer.style.description;
                    document.body.appendChild(p);

                })

                ul.appendChild(li);
            });

            document.body.appendChild(ul);
        } else alert('no results');

    });
});