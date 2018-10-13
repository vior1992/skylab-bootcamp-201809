const LOGIC = {
    search: function(form, callback) {
        if (typeof form !== 'object' || form.tagName !== 'FORM') throw Error('no form passed as argument');
        if (typeof callback !== 'function') throw Error('callback is not a function');

        form.querySelector('#name').value,
        form.querySelector('#username').value,
        form.querySelector('#password').value
        callback();
    },

    artists: function(callback) {
        if (typeof callback !== 'function') throw Error('callback is not a function');
        callback();
    },

    albums: function(callback) {
        if (typeof callback !== 'function') throw Error('callback is not a function');
        callback();
    },

    songs: function(callback) {
        if (typeof callback !== 'function') throw Error('callback is not a function');
        callback();
    },

    alignAlbums: function() {
        var px, columns = 0;
        var width = main.offsetWidth - (parseFloat(getComputedStyle(main).paddingLeft) + parseFloat(getComputedStyle(main).paddingRight));

        do {
            columns++;
            px = Math.floor(width / columns);
        } while (px > 240);
        main.style.gridTemplateColumns = "repeat(" + columns + ", " + columns + "fr)";
    },

    printAlbums: function() {
        for (var i in albums) {
            var article = document.createElement('article');
            article.className = 'container';
            main.appendChild(article);

            var wrapper = document.createElement('div');
            wrapper.className = 'container__image';
            article.appendChild(wrapper);

            var image = document.createElement('div');
            image.style.backgroundImage = "url('assets/img/" + albums[i].cover + "')";
            image.className = 'selectable';
            wrapper.appendChild(image);

            var small = document.createElement('small');
            small.className = 'container__title container__title--small';
            small.innerHTML = albums[i].author;
            article.appendChild(small);

            var title = document.createElement('h4');
            title.className = 'container__title';
            title.innerHTML = albums[i].title;
            article.appendChild(title);
        }

        this.alignAlbums();
    }
};
