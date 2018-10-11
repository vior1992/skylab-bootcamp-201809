
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
                   var h = document.getElementsByTagName('h3');
                   var pic = document.getElementsByTagName('img');
                   var p = document.getElementsByTagName('p');

                    if (h.length) {
                        document.body.removeChild(h[0]);
                        document.body.removeChild(pic[0]);
                        document.body.removeChild(p[0]);
                    }

                    h = document.createElement('h3');
                    h.innerText = beer.name;
                    document.body.appendChild(h);
                    
                    pic = document.createElement('img');
                    pic.src = (beer.labels) ? beer.labels.medium : 'https://i.pinimg.com/originals/6a/e8/a7/6ae8a729773b78fc3c94d451d8ccde36.jpg' ;
                    pic.width = 250
                    document.body.appendChild(pic);

                    ////Version antigua para seleccionar la imagen////////////////////
                    // if (beer.labels) {
                    //     pic = document.createElement('img');
                    //     pic.src = beer.labels.medium;
                    //     document.body.appendChild(pic);
                    // } else {
                    //     pic = document.createElement('img');
                    //     pic.src = 'https://i.pinimg.com/originals/6a/e8/a7/6ae8a729773b78fc3c94d451d8ccde36.jpg';
                    //     document.body.appendChild(pic);
                    // }

                    p = document.createElement('p');
                    p.innerText = beer.style.description;
                    document.body.appendChild(p);

                })

                ul.appendChild(li);
            });

            document.body.appendChild(ul);
        } else alert('no results');

    });
});