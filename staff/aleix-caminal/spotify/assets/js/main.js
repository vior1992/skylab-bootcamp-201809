const main = new Component('main', 'main');
document.body.appendChild(main.element);

const footer = new Footer();
document.body.appendChild(footer.element);

const search = new Search('Search Spotify', 'section', function() {
    LOGIC.search(function() {
        artists.show('flex');
        albums.show('flex');
        search.hide();
        tracks.hide();
        LOGIC.alignItems();
    });
});

const artists = new Artists('Artists', 'section', function(artist) {
    LOGIC.artistAlbums(artist, function() {
        albums.show('flex');
        artists.hide();
        tracks.hide();
        search.hide();
        LOGIC.alignItems();
    });
});
const albums = new Albums('Albums', 'section', function(album) {
    LOGIC.albumTracks(album, function() {
        tracks.show('flex');
        albums.hide();
        artists.hide();
        search.hide();
        LOGIC.alignItems();
    });
});

const tracks = new Tracks('Songs', 'section', function(track) {
    console.log(track);
});

$(main.element).append(search.element);
$(main.element).append(artists.element);
$(main.element).append(albums.element);
$(main.element).append(tracks.element);

window.addEventListener('resize', function() {
    LOGIC.alignItems();
});
