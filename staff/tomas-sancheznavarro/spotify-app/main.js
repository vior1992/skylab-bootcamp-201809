const $artists = $('.artists')

$artists.hide()

const $albums = $('.albums')

$albums.hide()

const $tracklist = $('.tracklist')

$tracklist.hide()

const $player = $('.player')

$player.hide()

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

        $a.click(() => {
            // console.log(artist)

            $artists.hide()

            const id = artist.id

            logic.searchAlbums(id)
                .then(albums => {
                    listAlbums(albums)
                })
                .catch(console.error)
        })

        const $li = $('<li>')

        $li.append($a)

        $ul.append($li)
    })

    function listAlbums(albums) {
        // console.log(albums)
        $albums.show()

        const $ul = $albums.find('ul')

        $ul.empty()

        albums.forEach(album => {
            const $a = $(`<a href="#">${album.name}</a>`)

            $a.click(() => {

                $artists.hide()

                const id = album.id

                logic.searchSongs(id)
                    .then(songs => {
                        listSongs(songs)
                    })
                    .catch(console.error)

            })

            const $li = $('<li>')

            $li.append($a)

            $ul.append($li)

            // $ul.empty()

        })
    }

    function listSongs(songs) {
        $tracklist.show()

        const $ul = $tracklist.find('ul')

        songs.forEach(song => {

            const $a = $(`<a href="#">${song.name}</a>`)
            const $li = $('<li>')

            $li.append($a)

            $ul.append($li)

            $a.click(() => {

                $player.show()

                const url = song.preview_url

                playSong(url)
            })
        })
    }

    playSong = (url) => { // lo mismo que "function playSong(url) {...}", pero en sintaxis ES6

        const $playSong = $player.find('audio')

        $playSong.attr('src', '' + url + '')

    }
}