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

            var token = 'BQDPUQbWEs9zFP6syBWSq20wNDkAUdKBRWttqzRIj432AIWi8tpwndjBsPI7YlrGp41xnbAwOzE6owKLPmO3il568vgJRjNLMTQ_mc0ANF9mC4Sntp7H3_KjgiqzRjL5hO0SFulK3XjzUHhq'

            xhr.setRequestHeader('authorization', 'Bearer ' + token)

            xhr.send()
        })
    },

    searchAlbums(id) {
        // TODO
        return new Promise((resolve, reject) => {
            var xhr = new XMLHttpRequest()
            
            xhr.addEventListener('load', function () {
                var res = JSON.parse(xhr.responseText)

                resolve(res.items)
            })

            xhr.addEventListener('error', function () {
                reject() // TODO
            })

            xhr.open('get', 'https://api.spotify.com/v1/artists/'+id+'/albums')

            var token = 'BQDPUQbWEs9zFP6syBWSq20wNDkAUdKBRWttqzRIj432AIWi8tpwndjBsPI7YlrGp41xnbAwOzE6owKLPmO3il568vgJRjNLMTQ_mc0ANF9mC4Sntp7H3_KjgiqzRjL5hO0SFulK3XjzUHhq'

            xhr.setRequestHeader('authorization', 'Bearer ' + token)

            xhr.send()
        })
    },

    searchTracks(albumId) {
        // TODO
        return new Promise((resolve, reject) => {
            var xhr = new XMLHttpRequest()
            
            xhr.addEventListener('load', function () {
                var res = JSON.parse(xhr.responseText)

                resolve(res.items)
            })

            xhr.addEventListener('error', function () {
                reject() // TODO
            })

            xhr.open('get', 'https://api.spotify.com/v1/albums/'+albumId+'/tracks')

            var token = 'BQDPUQbWEs9zFP6syBWSq20wNDkAUdKBRWttqzRIj432AIWi8tpwndjBsPI7YlrGp41xnbAwOzE6owKLPmO3il568vgJRjNLMTQ_mc0ANF9mC4Sntp7H3_KjgiqzRjL5hO0SFulK3XjzUHhq'

            xhr.setRequestHeader('authorization', 'Bearer ' + token)

            xhr.send()
        })
    }
}