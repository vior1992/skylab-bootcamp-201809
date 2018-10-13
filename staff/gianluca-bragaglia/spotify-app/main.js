const $artists = $('.artists')
const $albums = $('.albums')
const $tracks = $('.tracks')
const $player = $('.player')

let $ulAlbums = $albums.find('ul')
let $liAlbums = $ulAlbums.find('li')
let $aAlbums = $liAlbums.find('a')
let $h4Track = $tracks.find('h4')
let $h5Track = $player.find('h5')
let $ulTracks = $tracks.find('ul')
let $liTracks = $ulTracks.find('li')
let $aTracks = $liTracks.find('a')
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

    $artists.hide()
    $albums.hide()
    $tracks.hide()
    $player.hide()

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
        $li.addClass('list-group-item')
        $li.append($a)

        $ul.append($li)

    })
}


function listAlbums(albums) {

    $ulAlbums.empty()

    albums.forEach(album => {

        $aAlbums = $(`<a href="#">${album.name}</a>`)

        $aAlbums.click(() => {
            event.preventDefault()

            let idAlbum = album.id
            
            $h4Track.text(album.name)
 
            $tracks.show()

            logic.searchTracks(idAlbum)
                .then((tracks) => {
                    listTracks(tracks)
                })
                .catch(console.error)

        })


        $liAlbums = $('<li>')

        $liAlbums.addClass('list-group-item')

        $liAlbums.append($aAlbums)

        $ulAlbums.append($liAlbums)
        

    })


}

function listTracks(tracks) {

    $ulTracks.empty()
    

    tracks.forEach(track => {

        $aTracks = $(`<a href="#">${track.name}</a>`)


        $aTracks.click(() => {
            event.preventDefault()

            $player.show()
        
            $h5Track.text(track.name)

            let trackPlaying = track.preview_url

            $audioTrack.attr('src', '' + trackPlaying + '')

        })


        $liTracks = $('<li>')

        $liTracks.addClass('list-group-item')

        $liTracks.append($aTracks)

        $ulTracks.append($liTracks)

    })

}
