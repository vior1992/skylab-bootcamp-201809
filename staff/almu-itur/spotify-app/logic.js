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

            var token = 'BQDa3zN1YXTgekpzOqmP2qq-ZJHaYPFQicthoRIN-j0muZ_ltGac1s6JA-6CcaIZ9R4moppp8BelSj7ZOxh9WBZrPBmsmFFIWTIuhib3jPZEfY_-jJNU_dZrHYx0zx8Ksx3_Bn5dBcio'

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

            var token = 'BQDa3zN1YXTgekpzOqmP2qq-ZJHaYPFQicthoRIN-j0muZ_ltGac1s6JA-6CcaIZ9R4moppp8BelSj7ZOxh9WBZrPBmsmFFIWTIuhib3jPZEfY_-jJNU_dZrHYx0zx8Ksx3_Bn5dBcio'

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
        
            xhr.open('get', 'https://api.spotify.com/v1/albums/' + albumId + '/tracks')

            var token = 'BQDa3zN1YXTgekpzOqmP2qq-ZJHaYPFQicthoRIN-j0muZ_ltGac1s6JA-6CcaIZ9R4moppp8BelSj7ZOxh9WBZrPBmsmFFIWTIuhib3jPZEfY_-jJNU_dZrHYx0zx8Ksx3_Bn5dBcio'

            xhr.setRequestHeader('authorization', 'Bearer ' + token)

            xhr.send()
        })
    },

    findSong(idTracks) {
        
        return new Promise((resolve, reject) => {
            var xhr = new XMLHttpRequest()

            xhr.addEventListener('load', function () {
                var res = JSON.parse(xhr.responseText)
                resolve(res.items)
            })

            xhr.addEventListener('error', function () {
                reject() // TODO
            })
        
            xhr.open('get', 'https://api.spotify.com/v1/albums/' + idTracks + '/tracks')

            var token = 'BQDa3zN1YXTgekpzOqmP2qq-ZJHaYPFQicthoRIN-j0muZ_ltGac1s6JA-6CcaIZ9R4moppp8BelSj7ZOxh9WBZrPBmsmFFIWTIuhib3jPZEfY_-jJNU_dZrHYx0zx8Ksx3_Bn5dBcio'

            xhr.setRequestHeader('authorization', 'Bearer ' + token)

            xhr.send()
        })
    }
}