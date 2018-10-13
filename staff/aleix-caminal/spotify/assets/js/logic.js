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
    }
};
