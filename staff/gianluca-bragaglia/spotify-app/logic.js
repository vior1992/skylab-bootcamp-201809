var token = 'BQAIHu2kaxRBjjgTjO0FlAtcmY5VkVsgyBcWvZqJniqpqZ09ZBf0RCnY4tskinZxIKC0mdwtlwmfOBQpN8j0KHC8wdYFoQUDRXbeczWF0ykUgByLE8eMMqIbJGm_psNdcgqiGo8VoM26_Q'

const logic = {
    searchArtists(query) {
        return new Promise((resolve, reject) => {
            var xhr = new XMLHttpRequest()

            xhr.addEventListener('load', function() {
                var res = JSON.parse(xhr.responseText)

                resolve(res.artists.items)
            })

            xhr.addEventListener('error', function() {
                reject()
            })

            xhr.open('get', 'https://api.spotify.com/v1/search?type=artist&query=' + query)

            xhr.setRequestHeader('authorization', 'Bearer ' + token)

            xhr.send()
        })
    },

    searchAlbums(id) {
        return new Promise((resolve, reject) => {
            var xhr = new XMLHttpRequest()

            xhr.addEventListener('load', function() {
                var res = JSON.parse(xhr.responseText)

                resolve(res.items)

            })

            xhr.addEventListener('error', function() {
                reject() // TODO
            })

            xhr.open('get', 'https://api.spotify.com/v1/artists/' + id + '/albums')

            xhr.setRequestHeader('authorization', 'Bearer ' + token)

            xhr.send()
        })
    },

    searchTracks(idAlbum) {
        return new Promise((resolve, reject) => {
            var xhr = new XMLHttpRequest()

            xhr.addEventListener('load', function() {
                var res = JSON.parse(xhr.responseText)

                resolve(res.items)

            })

            xhr.addEventListener('error', function() {
                reject() // TODO
            })

            xhr.open('get', 'https://api.spotify.com/v1/albums/' + idAlbum + '/tracks')

            xhr.setRequestHeader('authorization', 'Bearer ' + token)

            xhr.send()
        })
    },

    playTrack(idTracks) {
        return new Promise((resolve, reject) => {
            var xhr = new XMLHttpRequest()

            xhr.addEventListener('load', function() {
                var res = JSON.parse(xhr.responseText)

                resolve(res.items)


            })

            xhr.addEventListener('error', function() {
                reject() // TODO
            })

            xhr.open('get', 'https://api.spotify.com/v1/albums/' + idTracks + '/tracks')

            xhr.setRequestHeader('authorization', 'Bearer ' + token)

            xhr.send()
        })
    }
}