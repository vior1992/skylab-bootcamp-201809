const main = new Component('main', 'main');
document.body.appendChild(main.element);

const footer = new Footer();
document.body.appendChild(footer.element);

const search = new Search('Search Spotify', 'section', function() {
    LOGIC.search(function(items) {
        const artists = new Artists('Artists', 'section', items.artists, function() {
            LOGIC.artists(function() {
                artists.hide();
            });
        });

        const albums = new Albums('Albums', 'section', items.albums, function() {
            LOGIC.albums(function() {
                albums.hide();
            });
        });

        $(main.element).append(artists.element);
        $(main.element).append(albums.element);
        search.hide();
    });
});

/* const songs = new Songs('Songs', 'section', function() {
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
