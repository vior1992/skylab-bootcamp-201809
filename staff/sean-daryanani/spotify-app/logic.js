const logic = {

    call(path) {
        return new Promise((resolve, reject) => {
            var xhr = new XMLHttpRequest()

            xhr.addEventListener('load', function () {
                var res = JSON.parse(xhr.responseText)

                resolve(res)
            })

            xhr.addEventListener('error', function () {
                reject() // TODO
            })

            xhr.open('get', path)

            var token = 'BQDLf6sUS1oNVkPNO1FHUOzPxgQn2LzTZC0jtKVnmkd2p3mSr5K88GD74vdbGrX4ZRgSIVY3q4nIWUmUyWx7lWesGiaZjUaarID91hTPfuX18-OQaNnfj97PofN8J-zr6g0JFpCcrdDiF3Y'

            xhr.setRequestHeader('authorization', 'Bearer ' + token)

            xhr.send()
        })
    },

    searchArtists(query) {

        return this.call('https://api.spotify.com/v1/search?type=artist&query=' + query)
    },

    listAlbums(id) {
        return this.call('https://api.spotify.com/v1/artists/' + id + '/albums')
    },

    listTracks(id) {

        return this.call('https://api.spotify.com/v1/albums/' + id + '/tracks')

    },

    listTrackInfo(id) {
        return this.call('https://api.spotify.com/v1/tracks/' + id)
    }
}