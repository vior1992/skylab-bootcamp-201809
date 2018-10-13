const main = new Component('main');
document.body.appendChild(main.element);

const footer = new Footer();
document.body.appendChild(footer.element);

const search = new Search('Search Spotify', 'section', function(form) {
    LOGIC.search(form, function() {
        search.hide();
        artists.show();
        albums.show();
    });
});

const artists = new Artists('Artists', 'section', function() {
    LOGIC.artists(function() {
        login.hide();
        welcome.show();
    });
});

const albums = new Albums('Albums', 'section', function() {
    LOGIC.albums(function() {
        welcome.hide();
        login.show();
    });
});

const songs = new Songs('Songs', 'section', function() {
    LOGIC.songs(function() {
        welcome.hide();
        login.show();
    });
});

$(main.element).append(search.element);
$(main.element).append(artists.element);
$(main.element).append(albums.element);
$(main.element).append(songs.element);

window.addEventListener('resize', function() {
    LOGIC.alignAlbums();
});
