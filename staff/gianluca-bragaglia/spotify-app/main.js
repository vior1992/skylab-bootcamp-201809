const $artists = $('.artists')
const $albums = $('.albums')
const $tracks = $('.tracks')

$artists.hide()
$albums.hide()
$tracks.hide()

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
    $artists.css('display', 'block')

    const $ul = $artists.find('ul')

    $ul.empty()

    artists.forEach(artist => {
        const $a = $(`<a href="#">${artist.name}</a>`)

        $a.click(() => {

            const id = artist.id

            $albums.css('display', 'block')

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
}


function listAlbums(albums) {

    let $ulAlbums = $albums.find('ul')
    let $liAlbums = $ulAlbums.find('li')
    let $aAlbums = $liAlbums.find('a')

    albums.forEach(album => {

        $aAlbums = $(`<a href="#">${album.name}</a>`)

        $aAlbums.click(() => {
            event.preventDefault()

            const idTracks = album.id

            $tracks.css('display', 'block')

            logic.searchTracks(idTracks)
                .then(tracks => {
                    listTracks(tracks)
                })
                .catch(console.error)

        })

        $liAlbums = $('<li>')

        $liAlbums.append($aAlbums)

        $ulAlbums.append($liAlbums)

    })


}

function listTracks(tracks) {

    let $ulTracks = $tracks.find('ul')
    let $liTracks = $ulTracks.find('li')
    let $aTracks = $liTracks.find('a')

    tracks.forEach(tracks => {

        $aTracks = $(`<a href="#">${tracks.name}</a>`)

        $aTracks.click(() => {
            event.preventDefault()


        })

        $liTracks = $('<li>')

        $liTracks.append($aTracks)

        $ulTracks.append($liTracks)

    })


}