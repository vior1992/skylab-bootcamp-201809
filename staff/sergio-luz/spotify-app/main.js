const $artists = $('.artists')
$artists.hide()

const $albums = $('.albums')
$albums.hide()

const $tracks = $('.tracks')
$tracks.hide()

const $track_panel = $('.track_panel')
$track_panel.hide()

const $media_player = $('.media_player')

const $form = $('form')

$form.submit(event => {
    event.preventDefault()

    const $input = $form.find('input')

    const query = $input.val()

    logic.searchArtists(query)
        .then(artists => {
            listArtist(artists)
        })
        .catch(console.error)
})

function listArtist(artists) {
    $artists.show()

    const $ul = $artists.find('ul')

    $ul.empty()

    artists.forEach(artist => {
        const $a = $(`<a href="#">${artist.name}</a>`)

        $a.click((event) => {
            console.log(artist.id)

            event.preventDefault()

            logic.searchAlbums(artist.id)
                .then(albums => {
                    console.log(albums);
                    listAlbums(albums);
                })
                .catch(console.error)
            // TODO search albums by artist id
        })

        const $li = $('<li>')

        $li.append($a)

        $ul.append($li)
    })
}

function listAlbums(albums) {
    $albums.show()

    const $ul = $albums.find('ul')

    $ul.empty()

    albums.forEach(album => {
        const $a = $(`<a href="#">${album.name}</a>`)

        $a.click((event) => {
            console.log(album.id)

            event.preventDefault()

            logic.searchSongs(album.id)
                .then(songs => {
                    console.log(songs);
                    listSongs(songs)
                })
                .catch(console.error)
        })

        const $li = $('<li>')

        $li.append($a)

        $ul.append($li)
    })
}

function listSongs(songs) {
    $tracks.show()

    const $ul = $tracks.find('ul')

    $ul.empty()

    songs.forEach(song => {
        const $a = $(`<a href="#">${song.name}</a>`)

        $a.click((event) => {
            console.log('song id '+song.preview_url)

            event.preventDefault()
            PlaySong(song)
            
        })

        const $li = $('<li>')

        $li.append($a)

        $ul.append($li)
    })
}

function PlaySong(song) {
    $track_panel.show()


    const $h5 = $track_panel.find('h5')

    $media_player.attr('src', '' + song.preview_url + '')

    
}