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
    console.log(id);
    var xhr = new XMLHttpRequest();

    xhr.addEventListener("load", function () {
        var res = JSON.parse(xhr.responseText);

        callback(res);
    });

    xhr.addEventListener("error", function () {
        callback([]);
    });


    
    // TODO call endpoint https://quiet-inlet-67115.herokuapp.com/api/beer/ + id
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

                li.addEventListener("click", function(){
                    retrieveBeer(beer.id, function(){
                        var beerImg = document.createElement("img");
                        document.getElementById("beer-img").innerHTML = beerImg;
                    });
                    
                    
                })

                ul.appendChild(li);
            });

            document.body.appendChild(ul);
        } else alert('no results');

    });
});