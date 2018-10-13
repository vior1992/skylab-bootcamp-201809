var main = new Component('main', 'main');
document.body.appendChild(main.element);

var footer = new Footer();
document.body.appendChild(footer.element);

var search = new Search('Search Spotify', 'section', function() {
    LOGIC.search(function(items) {
        var artists = new Artists('Artists', 'section', items.artists, function(name, id) {
            LOGIC.artistAlbums(id, function(items) {
                var artist = new Albums(name, 'section', items, function(name, id) {
                    LOGIC.albumTracks(id, function() {
                        artist.hide();
                    });
                });

                $(main.element).append(artist.element);
                artists.hide();
                albums.hide();
                LOGIC.alignItems();
            });
        });

        var albums = new Albums('Albums', 'section', items.albums, function(name, id) {
            LOGIC.albumTracks(id, function() {
                albums.hide();
                artists.hide();
            });
        });

        $(main.element).append(artists.element);
        $(main.element).append(albums.element);
        search.hide();
        LOGIC.alignItems();
    });
});

/* var songs = new Songs('Songs', 'section', function() {
    LOGIC.songs(function() {
        welcome.hide();
        login.show();
    });
}); */

$(main.element).append(search.element);
// $(main.element).append(songs.element);

window.addEventListener('resize', function() {
    LOGIC.alignItems();
});
