const $artists = $('.artists')
$artists.hide()

const $albums = $('.albums')
$albums.hide()

const $tracks = $('.tracks')
$tracks.hide()

const $track_panel = $('.track_panel')
$track_panel.hide()

const $media_player = $('.media_player')

const view = {
    listArtist(artists) {
        $artists.show()
    
        const $ul = $artists.find('ul')
    
        $ul.empty()
    
        artists.forEach(artist => {
            const $a = $(`<a href="#">${artist.name}</a>`)
    
            $a.click((event) => {
                console.log('artist id ' + artist.id)
    
                event.preventDefault()
    
                logic.searchAlbums(artist.id)
                    .then(albums => {
                        this.listAlbums(albums.items, artist.name);
                    })
                    .catch(console.error)
            })
    
            const $li = $('<li>')
    
            $li.append($a)
    
            $ul.append($li)
        })
    },
    
    listAlbums(albums, name) {
        $albums.show()

        const $h3 = $albums.find('h3')
        $h3.text(name)
    
        const $ul = $albums.find('ul')
    
        $ul.empty()
    
        albums.forEach(album => {
            const $a = $(`<a href="#">${album.name}</a>`)
    
            $a.click((event) => {
                console.log(album.id)
    
                event.preventDefault()
    
                logic.searchSongs(album.id)
                    .then(songs => {
                        console.log(songs.items);
                        this.listSongs(songs.items, album.name)
                    })
                    .catch(console.error)
            })
    
            const $li = $('<li>')
    
            $li.append($a)
    
            $ul.append($li)
        })
    },
    
    listSongs(songs, name) {
        $tracks.show()

        console.log(songs);

        const $h4 = $tracks.find('h4')
        $h4.text(name)
    
        const $ul = $tracks.find('ul')
    
        $ul.empty()
    
        songs.forEach(song => {
            const $a = $(`<a href="#">${song.name}</a>`)
    
            $a.click((event) => {
                console.log('song id ' +  song.id)
    
                event.preventDefault()
                this.PlaySong(song)
    
            })
    
            const $li = $('<li>')
    
            $li.append($a)
    
            $ul.append($li)
        })
    },
    
    PlaySong(song) {
        $track_panel.show()
    
    
        const $h5 = $track_panel.find('h5')
        $h5.text(song.name)
    
        $media_player.attr('src', '' + song.preview_url + '')
    
    
    }
}