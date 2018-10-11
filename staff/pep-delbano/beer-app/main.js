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
                li.innerText = beer.name + ' ' + (beer.id);

                ul.appendChild(li);

                li.addEventListener('click', function(x) {
                    var div = document.createElement('div');
                    document.body.appendChild(div);

                    var title = document.createElement('h1');
                    title.innerText = x.name;
                    div.appendChild(title);

                    var picBeer = x.labels.medium;

                    var pic = document.createElement('img');
                    div.appendChild(pic);

                    var text = document.createElement('p');
                    text.innerText = x.description;
                    div.appendChild(text);
                    // TODO on click on beer do retrieve beer and show beer below
                });
            });

            document.body.appendChild(ul);
        } else alert('no results');

    });
});