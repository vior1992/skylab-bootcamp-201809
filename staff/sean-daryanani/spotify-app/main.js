const $artists = $('.artists')
const $albums = $('.albums')
const $tracks = $('.tracks')
const $trackInfo = $('.trackInfo')

$artists.hide()
$albums.hide()
$tracks.hide()
$trackInfo.hide()

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
            const id = artist.id
            const artistName = artist.name

            logic.listAlbums(id)
                .then(albums => {
                    //show albums en una lista
                    showAlbums(albums, artistName)
                })
                .catch(console.error)


            // TODO search albums by artist id
        })

        const $li = $('<li>')

        $li.append($a)

        $ul.append($li)
    })
}

function showAlbums(albums, artistName) {
    $albums.show()
    const $h3_albums = $albums.find('h3')
    $h3_albums.text(artistName)

    const $ul_albums = $albums.find('ul')

    $ul_albums.empty()

    albums.forEach(album => {
        if (album.album_type === 'album') {
            const $a_albums = $(`<a href="#">${album.name}</a>`)
            const $li_albums = $('<li></li>')
            $a_albums.click(() => {
                const albumName = album.name
                const albumid = album.id
                logic.listTracks(albumid)
                    .then(tracks => {
                        showTracks(tracks, albumName)
                    })
                    .catch(console.error)
                
            })


            $li_albums.append($a_albums)
            $ul_albums.append($li_albums)
        }
    })

}

function showTracks(tracks, albumName) {

    $tracks.show()

    const $h4_tracks = $tracks.find('h4')
    $h4_tracks.text(albumName)

    const $ul_tracks = $tracks.find('ul')

    $ul_tracks.empty()

    tracks.forEach(track => {
        const $a_tracks = $(`<a href="#">${track.name}</a>`)
        const $li_tracks = $('<li></li>')

        $a_tracks.click(() => {
            console.log(track.id)
            const trackName = track.name
            const trackid = track.id

            logic.listTrackInfo(trackid)
                .then(trackAudio => {
                    showTrackInfo(trackAudio, trackName)
                })
                .catch(console.error)
        })

        $a_tracks.appendTo($li_tracks)
        $li_tracks.appendTo($ul_tracks)
    })
}

function showTrackInfo(trackAudio, trackName)  {
    $trackInfo.show()
    const $h5_trackInfo = $trackInfo.find('h5')
    const audio = new Audio(trackAudio.preview_url)
    $h5_trackInfo.text(trackName)
    $button = $('.play')
    $button.click(() =>{
        audio.play()
    })
    $button = $('.stop')
    $button.click(() =>{
        audio.pause()
    })
    
}