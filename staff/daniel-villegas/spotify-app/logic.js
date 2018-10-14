const token = 'BQAxlzXsSqWVYq_ZxySBdbMkhlGpinC622TbjtJhKP2sGRaH4UcbaGLKAGFPMv6feEOfHqhFfq5xphLXG8JtsZ0oM8kN2KF4XoT81CW9NV-Lu9U_L8AqYWP1Xu21-Y--tPmydpVLiasZng'

const logic = {
    searchArtists(query) {
        if (typeof query !== 'string') throw TypeError(query + ' is not a string');
        if (!query.trim().length) throw Error(query + 'is empty or blank');

        return new Promise((resolve, reject) => {
            var xhr = new XMLHttpRequest()

            xhr.addEventListener('load', function () {
                var res = JSON.parse(xhr.responseText)

                resolve(res.artists.items)
            })

            xhr.addEventListener('error', function () {
                reject() 
                
            })

            if (!query) throw TypeError (query + 'is not valid search')

            xhr.open('get', 'https://api.spotify.com/v1/search?type=artist&query=' + query)

            //var token = 'BQAYHAOYkwR0miK17TgzbLdj3S41xFXl1CFRcviWyoxqO_39gbs7vN9UPtXNIEMJoEmz0hP6FObXyuUz9wNiQ9uW5u70f7gySuUkr2rz-wOWmPniy4NKEhnqQ-uQO29QvBRdswXAuzN_IA'

            xhr.setRequestHeader('authorization', 'Bearer ' + token)

            xhr.send()
        })
    },

    searchAlbums(id) {
        if (typeof id !== 'string') throw TypeError(id + ' is not a string');
        if (!id.trim().length) throw Error(id + 'is empty or blank');

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
        if (typeof albumId !== 'string') throw TypeError(albumId + ' is not a string');
        if (!albumId.trim().length) throw Error(albumId + 'is empty or blank');

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

    playSong(song) {$player.attr('src', song)}
}