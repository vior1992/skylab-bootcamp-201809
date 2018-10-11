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

        if (beers.length) {
            var ul = document.createElement('ul');

            beers.forEach(function (beer) {
                // console.log(beer.id, beer.name);

                var li = document.createElement('li');
                li.innerText = beer.name + ' ' + (beer.id);

                li.addEventListener('click', function () {
                    var h3 = document.getElementsByTagName('h3');
                    var img = document.getElementsByTagName('img');
                    var des = document.getElementsByTagName('p');

                    if(h3.length){

                        document.body.removeChild(h3[0]);
                        document.body.removeChild(img[0]);
                        document.body.removeChild(des[0]);
                        
                    }


                    retrieveBeer(beer.id, function (info) {

                        var h3 = document.createElement('h3');
                        h3.innerText = beer.name;

                        var img = document.createElement('img');
                        var image= beer.labels;
                        if (image === undefined){
                            img.src = 'https://dummyimage.com/300x200/000/fff';
                        }else{
                            img.src=beer.labels.medium;
                        }

                        var des = document.createElement('p');
                        des.innerText = beer.style.description;
                        console.log(info);
                        li.appendChild(h3);
                        li.appendChild(img);
                        li.appendChild(des); 
                        

                    });
                });


                

                ul.appendChild(li);
            });

            document.body.appendChild(ul);
        } else alert('no results');

    });
});