
var form = document.getElementById('search-form');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    var input = document.getElementById('search-query');

    var query = input.value;

    logic.search(query, function (beers) {
        var uls = document.getElementsByTagName('ul');

        if (uls.length) {
            document.body.removeChild(uls[0]);
        }

        if (beers.length) {
            var ul = document.createElement('ul');

            beers.forEach(function (beer) {
                // console.log(beer.id, beer.name);

                var li = document.createElement('li');
                li.innerText = beer.name + ' // ID: ' + (beer.id);
                li.addEventListener('click', function(){

                    logic.retrieveBeer(beer.id, function(url){

                        var a = document.createElement('a');
                        a.innerText = "ID beer: " + beer.id;
                        document.body.appendChild(a);

                        var imagen = document.createElement('img');
                        imagen.src = url;
                        document.body.appendChild(imagen);
                     })
                })

                ul.appendChild(li);
            });

            document.body.appendChild(ul);
        } else alert('no results');

    });
});