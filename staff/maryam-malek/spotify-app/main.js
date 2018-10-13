const $artists = $('.artists')

const $albums = $('.albums')

const $songs = $('.songs')

const $player = $('.player')

$artists.hide()
$albums.hide()
$songs.hide()
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
            $albums.show()
            const $h3 = $albums.find('h3')
            $h3.text(`${artist.name}`)
            const id = artist.id
            logic.listAlbums(id)
                .then(albums => {
                    showAlbums(albums)
                })
                .catch(console.error)
        })

        const $li = $('<li>')

        $li.append($a)

        $ul.append($li)
    })
}

function showAlbums(albums) {
    const $ulAlb = $albums.find('ul')
    $ulAlb.empty()
    albums.forEach(album => {
        const $aAlb = $(`<a href="#">${album.name}</a>`)
        $aAlb.click(() => {
            $songs.show()
            $h4Sng = $songs.find('h4')
            $h4Sng.text(`${album.name}`)
            const idAlb = album.id
            logic.listSongs(idAlb)
                .then(songs => {
                    showSongs(songs)
                })
                .catch(console.error)
        })
        const $liAlb = $('<li>')
        
        $liAlb.append($aAlb)

        $ulAlb.append($liAlb)
    })

} 

function showSongs(songs) {
    const $ulSng = $songs.find('ul')
    $ulSng.empty()
    console.log(songs)
    songs.forEach(song => {
        const $aSng = $(`<a href="#">${song.name}</a>`)
        $aSng.click(() => {
            console.log(song)
            $player.show()
            $h5 = $player.find('h5')
            $h5.text(`${song.name}`)
            const idSng = song.id
            logic.playSong(idSng)
                 .then(song => {
                     playSong(song)
                 })
                 .catch(console.error)
        })
        const $liSng = $('<li>')
        
        $liSng.append($aSng)

        $ulSng.append($liSng)
    })
}

function playSong(song) {
    const $audio = $player.find('audio')
    $audio.empty()
    console.log(song)
    const idPly = song.track_href 
    console.log(idPly)
    $audio.src = idPly

}
