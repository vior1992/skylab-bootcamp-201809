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
        callback();
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
              
                var li = document.createElement('li');

                var a = document.createElement('a');

                a.href = '#';
                a.innerText = beer.name;

                ul.appendChild(li);

                li.addEventListener('click', function() {
                    retrieveBeer(beer.id, function(beer) {
                        var details = document.getElementsByTagName('section');

                        if (){

                        }
                    })
                    var div = document.createElement('div');
                    document.body.appendChild(div);

                    var title = document.createElement('h1');
                    title.innerText = beer.name;
                    div.appendChild(title);

                    var picBeer = x.labels.medium;

                    var label = document.createElement('img');
                    label.src = beer.labels? beer.labels.medium : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5h9_k7YdUpzwloXiE3U163dZirzmODJP5tj4I3nYtzC1y9gtF';
                    label.style.width= '300px';
                    
                    detail.appendChild(label);

                    var desc = document.createElement('p');

                    text.innerText = beer.style.
                    document.body.appendChild(desc);
                    // TODO on click on beer do retrieve beer and show beer below
                });
            });

            document.body.appendChild(ul);
        } else alert('no results');

    });
});