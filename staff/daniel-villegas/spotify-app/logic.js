const token = 'BQAyXi3bC5Oex-BSXrAwGtwXMMKeNNBbe0R-RzgHqMEtV9PaJRCFEr4xmwc3di9MwspMJKkKAu5rRNaXGnlJNHK-XyFN9FBcIta8TVsFgcLFBMPi435NZzavt0ccOTU7pcTGwAB1oUlTJw'

const logic = {
    searchArtists(query) {
        return new Promise((resolve, reject) => {
            var xhr = new XMLHttpRequest()

            xhr.addEventListener('load', function () {
                var res = JSON.parse(xhr.responseText)

                resolve(res.artists.items)
            })

            xhr.addEventListener('error', function () {
                reject() // TODO
            })

            xhr.open('get', 'https://api.spotify.com/v1/search?type=artist&query=' + query)

            //var token = 'BQAYHAOYkwR0miK17TgzbLdj3S41xFXl1CFRcviWyoxqO_39gbs7vN9UPtXNIEMJoEmz0hP6FObXyuUz9wNiQ9uW5u70f7gySuUkr2rz-wOWmPniy4NKEhnqQ-uQO29QvBRdswXAuzN_IA'

            xhr.setRequestHeader('authorization', 'Bearer ' + token)

            xhr.send()
        })
    },

    searchAlbums(id) {
        return new Promise((resolve, reject) => {
            var xhr = new XMLHttpRequest()

            xhr.addEventListener('load', function () {
                var res = JSON.parse(xhr.responseText)
                resolve(res.items)
            })

            xhr.addEventListener('error', function () {
                reject() // TODO
            })

            xhr.open('get', 'https://api.spotify.com/v1/artists/'+ id + '/albums')

            //var token = 'BQAYHAOYkwR0miK17TgzbLdj3S41xFXl1CFRcviWyoxqO_39gbs7vN9UPtXNIEMJoEmz0hP6FObXyuUz9wNiQ9uW5u70f7gySuUkr2rz-wOWmPniy4NKEhnqQ-uQO29QvBRdswXAuzN_IA'

            xhr.setRequestHeader('authorization', 'Bearer ' + token)

            xhr.send()
        })
    },

    searchSongs(albumId) {
        return new Promise((resolve, reject) => {
            var xhr = new XMLHttpRequest()

            xhr.addEventListener('load', function () {
                var res = JSON.parse(xhr.responseText)
               
                resolve(res.items)
            })

            xhr.addEventListener('error', function () {
                reject() // TODO
            })

            xhr.open('get', 'https://api.spotify.com/v1/albums/'+ albumId + '/tracks/')

            //var token = 'BQAYHAOYkwR0miK17TgzbLdj3S41xFXl1CFRcviWyoxqO_39gbs7vN9UPtXNIEMJoEmz0hP6FObXyuUz9wNiQ9uW5u70f7gySuUkr2rz-wOWmPniy4NKEhnqQ-uQO29QvBRdswXAuzN_IA'

            xhr.setRequestHeader('authorization', 'Bearer ' + token)

            xhr.send()
        })
    },

    playSong(song, pic) {
    
        $player.attr('src', song)
    },
}