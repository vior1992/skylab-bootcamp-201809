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
        alignItems();
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

function alignItems() {
    let main = $('.panel__body').get(0);
    let px, columns = 0;
    let width = main.offsetWidth - (parseFloat(getComputedStyle(main).paddingLeft) + parseFloat(getComputedStyle(main).paddingRight));

    do {
        columns++;
        px = Math.floor(width / columns);
    } while (px > 240);
    $('.panel__body').css('grid-template-columns', 'repeat(' + columns + ', ' + columns + 'fr)');
}

window.addEventListener('resize', function() {
    alignItems();
});
