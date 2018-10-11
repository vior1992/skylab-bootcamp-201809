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

        var details = document.getElementsByTagName('section');
            if(details.length){
                document.body.removeChild(details[0]);  
            }

        if (beers.length) {
            var ul = document.createElement('ul');

            beers.forEach(function (beer) {

                var li = document.createElement('li');
                
                ul.appendChild(li);

                var a = document.createElement('a');
                a.innerText = beer.name + ' ' + (beer.id);
                var id = beer.id;

                li.appendChild(a);

                a.addEventListener('click', function(event){
                    event.preventDefault();
                    var details = document.getElementsByTagName('section');
                    if(details.length){
                        document.body.removeChild(details[0]);  
                    }
                    details = document.createElement('section');
                    retrieveBeer(id, function(beerDetails){   
                        var h1 = document.createElement('h1');
                        h1.innerText = beerDetails.name;
                        details.appendChild(h1);

                        var p = document.createElement('p');
                        if(beerDetails.description) p.innerText = beerDetails.description;
                        else p.innerText = 'No beer description';
                        details.appendChild(p);
        
                        var img = document.createElement('img');       
                        if(beerDetails.labels) img.src = beerDetails.labels.icon;
                        else img.src = 'https://dummyimage.com/200x75/000/fff';
                        details.appendChild(img);

                        document.body.appendChild(details);
                    });
                });
            });

            document.body.appendChild(ul);
        } else alert('no results');

    });
});