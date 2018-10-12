const $artists = $('.artists')
const $albums = $('.albums')
const $tracks = $('.tracks')
const $player = $('.player')

let $ulAlbums = $albums.find('ul')
let $liAlbums = $ulAlbums.find('li')
let $aAlbums = $liAlbums.find('a')
let $h4Track = $tracks.find('h4')
let $h5Track = $tracks.find('h5')
let $audioTrack = $player.find('audio')

$artists.hide()
$albums.hide()
$tracks.hide()
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
    $artists.css('display', 'block')

    const $ul = $artists.find('ul')

    $ul.empty()

    artists.forEach(artist => {
        let $a = $(`<a href="#">${artist.name}</a>`)

        $a.click(() => {

            let id = artist.id

            $albums.css('display', 'block')

            logic.searchAlbums(id)
                .then(albums => {
                    listAlbums(albums)
                })
                .catch(console.error)
        })

        let $li = $('<li>')

        $li.append($a)

        $ul.append($li)

    })
}


function listAlbums(albums) {

    albums.forEach(album => {

        $aAlbums = $(`<a href="#">${album.name}</a>`)

        $aAlbums.click(() => {
            event.preventDefault()

            let idAlbum = album.id
            let nameAlbum = album.name

            $tracks.css('display', 'block')
            $h4Track = $(`${nameAlbum}`)
            $tracks.append($h4Track)


            logic.searchTracks(idAlbum)
                .then((tracks) => {
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

    tracks.forEach(track => {

        $aTracks = $(`<a href="#">${track.name}</a>`)


        $aTracks.click(() => {
            event.preventDefault()

            let trackPlaying = track.preview_url
            let nameTrack = track.name
            let idTracks = track.id

            $player.css('display', 'block')
            $h5Track = $(`${nameTrack}`)
            $tracks.append($h5Track)

            $audioTrack.attr('src', '' + trackPlaying + '')

            logic.playTrack(idTracks)
                .then((tracks) => {
                    //playingTrack(tracks)
                })
                .catch(console.error)

        })

        $liTracks = $('<li>')

        $liTracks.append($aTracks)

        $ulTracks.append($liTracks)

    })



}