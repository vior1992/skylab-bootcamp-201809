const main = new Component('main', 'main');
document.body.appendChild(main.element);

const footer = new Footer();
document.body.appendChild(footer.element);

const search = new Search('Search Spotify', 'section', function() {
    LOGIC.search(function() {
        artists.show('flex');
        albums.show('flex');
        search.hide();
        LOGIC.alignItems();
    });
});

const artists = new Artists('Artists', 'section', function() {
    console.log(artist);
});
const albums = new Albums('Albums', 'section', function() {
    console.log(album);
});

/* const songs = new Songs('Songs', 'section', function() {
    LOGIC.songs(function() {
        welcome.hide();
        login.show();
    });
}); */

$(main.element).append(search.element);
$(main.element).append(artists.element);
$(main.element).append(albums.element);
// $(main.element).append(songs.element);

window.addEventListener('resize', function() {
    LOGIC.alignItems();
});
