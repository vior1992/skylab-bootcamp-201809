
const token = 'BQBce1V7m_pdng_0OP_Ee1jAU4dqgGf1CCls8CjJc4GiCZ5316AHCNWNDnh5S_ul5MOkOlBOiBTJAcff1fCVZgc77e1IC_B39dMX-wWJwhy4ul9Ycx1CrlJ5ZvoyiN2LJQoSUvQgtvgOvA'

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

            xhr.setRequestHeader('authorization', 'Bearer ' + token)

            xhr.send()
        })
    },

    listAlbums(id) {
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

            xhr.setRequestHeader('authorization', 'Bearer ' + token)

            xhr.send()
        })
    },

    listSongs(album_id) {
        return new Promise((resolve, reject) => {
            var xhr = new XMLHttpRequest()

            xhr.addEventListener('load', function () {
                var res = JSON.parse(xhr.responseText)

                resolve(res.items)
            })

            xhr.addEventListener('error', function () {
                reject() // TODO
            })

            xhr.open('get', 'https://api.spotify.com/v1/albums/' + album_id + '/tracks')

            xhr.setRequestHeader('authorization', 'Bearer ' + token)

            xhr.send()
        })
    },
    
    playSongs(song_id) {
        return new Promise((resolve, reject) => {
            var xhr = new XMLHttpRequest()

            xhr.addEventListener('load', function () {
                var res = JSON.parse(xhr.responseText)

                resolve(res)
            })

            xhr.addEventListener('error', function () {
                reject() // TODO
            })

            xhr.open('get', 'https://api.spotify.com/v1/tracks/' + song_id)

            xhr.setRequestHeader('authorization', 'Bearer ' + token)

            xhr.send()
        })
    },
}