const token = 'BQAY9zG9ExeRP0w4PTbNebUiq1QADVnSrpOYr4NENlsoKaoDh-GhKjwCAfbfbF5J_caqLUD5xUyiAM5zax_h22YW13SBgxV8hHD4QyL-jTgmU9eelVGjnC1RanH8b5PSFrBcRb504-lVxA'

const logic = {
    searchArtists(query) {
        if (typeof query !== 'string') throw TypeError(query + ' is not a string');
        if (!query.trim().length) throw Error(query + 'is empty or blank');

        return new Promise((resolve, reject) => {
            var xhr = new XMLHttpRequest()

            xhr.addEventListener('load', () => {
                var res = JSON.parse(xhr.responseText)

                resolve(res.artists.items)
            })

            xhr.addEventListener('error', () => {
                reject() 
                
            })

            if (!query) throw TypeError (query + 'is not valid search')

            xhr.open('get', 'https://api.spotify.com/v1/search?type=artist&query=' + query)

            xhr.setRequestHeader('authorization', 'Bearer ' + token)

            xhr.send()
        })
    },

    searchAlbums(id) {
        if (typeof id !== 'string') throw TypeError(id + ' is not a string');
        if (!id.trim().length) throw Error(id + 'is empty or blank');

        return new Promise((resolve, reject) => {
            var xhr = new XMLHttpRequest()

            xhr.addEventListener('load', () => {
                var res = JSON.parse(xhr.responseText)
                resolve(res.items)
            })

            xhr.addEventListener('error', () => {
                reject() // TODO
            })

            xhr.open('get', 'https://api.spotify.com/v1/artists/'+ id + '/albums')

            xhr.setRequestHeader('authorization', 'Bearer ' + token)

            xhr.send()
        })
    },

    searchSongs(albumId) {
        if (typeof albumId !== 'string') throw TypeError(albumId + ' is not a string');
        if (!albumId.trim().length) throw Error(albumId + 'is empty or blank');

        return new Promise((resolve, reject) => {
            var xhr = new XMLHttpRequest()

            xhr.addEventListener('load', () => {
                var res = JSON.parse(xhr.responseText)
               
                resolve(res.items)
            })

            xhr.addEventListener('error', () => {
                reject() // TODO
            })

            xhr.open('get', 'https://api.spotify.com/v1/albums/'+ albumId + '/tracks/')

            xhr.setRequestHeader('authorization', 'Bearer ' + token)

            xhr.send()
        })
    },

    playSong(song) {$player.attr('src', song)}
}