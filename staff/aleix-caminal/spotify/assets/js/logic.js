const LOGIC = {
    spotify: new Spotify(),
    search: function(callback) {
        if (typeof callback !== 'function') throw Error('callback is not a function');
        this.spotify.search($('#search input').val()).then(function(result) {
            callback({artists: result.artists.items, albums: result.albums.items});
        }).catch(console.error);
    },
    artistAlbums: function(artist, callback) {
        if (typeof callback !== 'function') throw Error('callback is not a function');
        this.spotify.getArtist(artist).then(function(result) {
            callback(result.items);
        }).catch(console.error);
    },
    albumTracks: function(album, callback) {
        if (typeof callback !== 'function') throw Error('callback is not a function');
        callback();
    },
    songs: function(callback) {
        if (typeof callback !== 'function') throw Error('callback is not a function');
        callback();
    },
    alignItems: function() {
        $.each($('.panel__body'), function(i, main) {
            let px, columns = 0;
            let width = main.offsetWidth - (parseFloat(getComputedStyle(main).paddingLeft) + parseFloat(getComputedStyle(main).paddingRight));

            do {
                columns++;
                px = Math.floor(width / columns);
            } while (px > 240);
            $(main).css('grid-template-columns', 'repeat(' + columns + ', ' + columns + 'fr)');
        });
    }
};
