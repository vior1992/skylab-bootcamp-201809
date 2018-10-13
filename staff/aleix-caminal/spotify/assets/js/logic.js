const LOGIC = {
    search: function(callback) {
        if (typeof callback !== 'function') throw Error('callback is not a function');
        var spotify = new Spotify();
        spotify.search($('#search input').val()).then(function(result) {
            callback({artists: result.artists.items, albums: result.albums.items});
        }).catch(console.error);
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

    alignItems: function() {
        var px, columns = 0;
        var width = main.offsetWidth - (parseFloat(getComputedStyle(main).paddingLeft) + parseFloat(getComputedStyle(main).paddingRight));

        do {
            columns++;
            px = Math.floor(width / columns);
        } while (px > 240);
        main.style.gridTemplateColumns = "repeat(" + columns + ", " + columns + "fr)";
    }
};
