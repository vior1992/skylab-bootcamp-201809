const $artists = $('.artists')

$artists.hide()

const $form = $('form')

const $albums = $('.albums')

$albums.hide()

const $tracks = $('.tracks')

$tracks.hide()

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
            
            const id = artist.id

            logic.searchAlbums (id)
                .then(albums => {
                    listAlbums(albums)
                })
                .catch(console.error)
            })

            // TODO search albums by artist id

        const $li = $('<li>')

        $li.append($a)

        $ul.append($li)
    })
}

function listAlbums(albums){
    
    $albums.show()

    const $ul = $albums.find('ul')

    $ul.empty()

    albums.forEach(album => {
        const $a = $(`<a href="#">${album.name}</a>`)

        $a.click(() => {
            
            const albumId = album.id

            logic.searchTracks (albumId)
                .then(tracks => {
                    listTracks(tracks)
                })
                .catch(console.error)

                })

        const $li = $('<li>')

        $li.append($a)

        $ul.append($li)
    })
}

function listTracks(tracks){
    // console.log(tracks);
    $tracks.show()

    const $ul = $tracks.find('ul')

    $ul.empty()

    tracks.forEach(track => {
        const $a = $(`<a href="#">${track.name}</a>`)

        // $a.click(() => {
            
        //     const trackUrl = preview.url

        //     logic.searchTracks (albumId)
        //         .then(tracks => {
        //             listTracks(tracks)
        //         })
        //         .catch(console.error)

        //         })

        const $li = $('<li>')

        $li.append($a)

        $ul.append($li)
    })
}