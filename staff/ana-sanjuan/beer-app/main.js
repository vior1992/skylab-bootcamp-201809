
var form = document.getElementById('search-form');

form.addEventListener('submit', function (event) {
    event.preventDefault();
    var input = document.getElementById('search-query');
    var query = input.value;
    search(query, function (beers) {
        var uls = document.getElementsByTagName('ul');
        if (uls.length) {
            document.body.removeChild(uls[0]);
            var beerDetails = document.getElementsByTagName('section');
            if (beerDetails.length) document.body.removeChild(beerDetails[0]);
        }
        if (beers.length) {
            var ul = document.createElement('ul');
            beers.forEach(function (beer) {
                var li = document.createElement('li');
                var id = beer.id
                var a = document.createElement('a');
                a.innerText = beer.name + ' ' + id;
                a.href = '#';
                a.addEventListener('click', 
                    function(event) {
                        event.preventDefault();
                        retrieveBeer (id, function(res){
                            var beerDetails = document.getElementsByTagName('section');
                            if (beerDetails.length) document.body.removeChild(beerDetails[0]);
                        
                            var section = document.createElement('section')
                            var title = document.createElement('h3')
                            title.innerText = res.name;
                            section.appendChild(title);
                            
                            var description = document.createElement('p')
                            var defaultText = 'No description available'
                            description.innerText = res.description || res.style.description || defaultText;
                            section.appendChild(description);
                            
                            var placeholder= 'https://placekitten.com/300/200'
                            var image = document.createElement('img')
                            image.src = (res.labels? res.labels.medium: placeholder);
                            image.style.width = '300px'
                            section.appendChild(image);

                            document.body.appendChild(section);

                        })
                    }
                )
                li.appendChild(a)
                ul.appendChild(li);
            });
            document.body.appendChild(ul);
        } else alert('no results');
    });
});


