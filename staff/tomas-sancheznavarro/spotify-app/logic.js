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

            var token = 'BQAAOqEg0Fc95X_CE0WPnTE-doEQAUVJYv9tNc75jyGPRINQLGsJyokBpMSgFLHdgJOFiJVJFntWmytr3P5LDeXLFxoxBZ-Xco0oC5UwFQucQ7tJgt5lq4Zf5hDCQZ7OuAhQRnaSMTU'

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

            xhr.open('get', 'https://api.spotify.com/v1/artists/' + id + '/albums')

            var token = 'BQAAOqEg0Fc95X_CE0WPnTE-doEQAUVJYv9tNc75jyGPRINQLGsJyokBpMSgFLHdgJOFiJVJFntWmytr3P5LDeXLFxoxBZ-Xco0oC5UwFQucQ7tJgt5lq4Zf5hDCQZ7OuAhQRnaSMTU'

            xhr.setRequestHeader('authorization', 'Bearer ' + token)

            xhr.send()
        })
        // TODO
    },

    searchSongs(id) {
        return new Promise((resolve, reject) => {
            var xhr = new XMLHttpRequest()

            xhr.addEventListener('load', function () {
                var res = JSON.parse(xhr.responseText)
                console.log(res)

                resolve(res.items)

            })

            xhr.addEventListener('error', function () {
                reject() // TODO
            })

            xhr.open('get', 'https://api.spotify.com/v1/albums/' + id + '/tracks')

            var token = 'BQAAOqEg0Fc95X_CE0WPnTE-doEQAUVJYv9tNc75jyGPRINQLGsJyokBpMSgFLHdgJOFiJVJFntWmytr3P5LDeXLFxoxBZ-Xco0oC5UwFQucQ7tJgt5lq4Zf5hDCQZ7OuAhQRnaSMTU'

            xhr.setRequestHeader('authorization', 'Bearer ' + token)

            xhr.send()
        })
        // TODO
    }
}