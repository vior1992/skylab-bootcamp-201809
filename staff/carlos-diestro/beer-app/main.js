var form = document.getElementById('search-form');
var input = document.getElementById('search-query');

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

form.addEventListener('submit', function (event) {
    event.preventDefault();

    var query = input.value;

    search(query, function (beers) {
        var uls = document.getElementsByTagName('ul');
        var div = document.getElementById('beer-info');

        if (uls.length) {
            document.body.removeChild(uls[0]);
        }

        if (div) {
            document.body.removeChild(div);
        }

        if (beers.length) {
            var ul = document.createElement('ul');

            beers.forEach(function (beer) {
                // console.log(beer.id, beer.name);

                var li = document.createElement('li');
                li.dataset.id = beer.id;
                li.innerText = beer.name;
                li.addEventListener('click', function() {
                    retrieveBeer(this.dataset.id, function(beer) {
                        var div = document.getElementById('beer-info');

                        if (div) {
                            document.body.removeChild(div);
                        }

                        var beerContainer = document.createElement('div');
                        beerContainer.id = 'beer-info';

                        var beerName = document.createElement('h3');
                        beerName.innerText = beer.name;
                        beerContainer.appendChild(beerName);

                        if(beer.description) {
                            var beerDescription = document.createElement('p');
                            beerDescription.innerText = beer.description;
                            beerContainer.appendChild(beerDescription);
                        }
                        
                        var beerImage = document.createElement('img');

                        if(beer.labels) {
                            beerImage.src = beer.labels.medium;
                            beerImage.width = '300';
                            beerContainer.appendChild(beerImage);
                        } else {
                            beerImage.src = 'https://www.beerhawk.co.uk/media/catalog/product/g/e/german_beer_mixed_case_master.png';
                            beerImage.width = '300';
                            beerContainer.appendChild(beerImage);
                        }

                        document.body.appendChild(beerContainer);
                    });
                    // console.log(this.innerHTML);
                });

                // TODO on click on beer do retrieve beer and show beer below

                ul.appendChild(li);
            });

            document.body.appendChild(ul);
        } else alert('no results');

    });
});