const $artists = $('.artists')
const $albums = $('.albums')
const $songs = $('.songs')
const $player = $('.player')
const $form = $('form')
const $imgArtist = $('.imgArtist')
const $imgAlbum = $('.imgAlbum')

$artists.hide()
$imgArtist.hide()
$albums.hide()
$imgAlbum.hide()
$songs.hide()
$player.hide()

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
    $imgArtist.hide()
    $albums.hide()
    $imgAlbum.hide()
    $songs.hide()
    $player.hide()

    const $ul = $artists.find('ul')
    
    $ul.empty()

    artists.forEach(artist => {
        const $a = $(`<a href="#">${artist.name}</a>`)
    
        $a.click(() => {
            const $artistPicUrl = artist.images[0].url
            logic.searchAlbums(artist.id)
            .then(albums => {
                showArtistPic($artistPicUrl)
                listAlbums(albums)
            })
            .catch(console.error)

        })

        const $li = $('<li>')

        $li.append($a)

        $ul.append($li)
        
    })
    
}

function showArtistPic (artistPicUrl) {
    
    const $artistPic = $(`<img src="${artistPicUrl}" alt="artist album" height="200" width="200">`)

    $imgArtist.empty()

    $imgArtist.append($artistPic)
    
}

function listAlbums(albums) {
    $artists.show()
    $imgArtist.show()
    $albums.show()
    $imgAlbum.hide()
    $songs.hide()
    $player.hide()
   
    const $ul = $albums.find('ul')

    $ul.empty()
   
    albums.forEach(album => {
        const $a = $(`<a href="#">${album.name}</a>`) 
        let albumId = album.id
        $a.click(() => {
            const $albumPicUrl = album.images[0].url
            logic.searchSongs(albumId)
            .then(songs => {
                listSongs(songs)
                showAlbumPic($albumPicUrl)
            })
            .catch(console.error)
        })

        const $li = $('<li>')

        $li.append($a)

        $ul.append($li)

    })
    
}

function showAlbumPic (albumPicUrl) {
    
    const $albumPic = $(`<img src="${albumPicUrl}" alt="artist album" height="200" width="200">`)

    $imgAlbum.empty()

    $imgAlbum.append($albumPic)
    
}

function listSongs(songs) {
    
    $artists.show()
    $imgArtist.show()
    $albums.show()
    $imgAlbum.show()
    $songs.show()
    $player.hide()
    
    const $ul = $songs.find('ul')

    $ul.empty()

    songs.forEach(song => {
        const $a = $(`<a href="#">${song.name}</a>`) 
        
        $a.click(() => {
            $url = song.preview_url
            playSong($url)
        })

        const $li = $('<li>')

        $li.append($a)

        $ul.append($li)
    })
}

function playSong($url) {
    $artists.show()
    $imgArtist.show()
    $albums.show()
    $imgAlbum.show()
    $songs.show()
    $player.show()

    $player.show()
    const $audio = $player.find('audio')
    $audio.attr('src', '' + $url + '')
}