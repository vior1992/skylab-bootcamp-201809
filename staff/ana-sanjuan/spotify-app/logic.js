var token = 'BQDGJH9ZDvXcq5j9EtuQXVwk61dtuDPuxyKWdbxGGjMrDRxKp_tVPdKtKdPQeuGVb2z2sVboNBD0-YWzxjiKrbc73hXrwvXOvqdycL8iW7ThH-yyfX5e9OYEj74HHewIKn4OcJOkSoXcqQ5I'

 
const logic = {

    call(endpoint){
        return new Promise((resolve, reject) => {
            var xhr = new XMLHttpRequest()

            xhr.addEventListener('load', function () {
                var res = JSON.parse(xhr.responseText)
                resolve(res)
            })

            xhr.addEventListener('error', function () {
                reject() // TODO
            })

            xhr.open('get', endpoint)

            xhr.setRequestHeader('authorization', 'Bearer ' + token)

            xhr.send()
        })
    },

    searchArtists(query) {
        return logic.call('https://api.spotify.com/v1/search?type=artist&query=' + query)
    },

    searchAlbums(id) {
        return logic.call('https://api.spotify.com/v1/artists/' + id + '/albums')
    },

    searchTracks(id) {
        return logic.call('https://api.spotify.com/v1/albums/' + id + '/tracks')
    },

    searchOneTrack(id) {
        return logic.call('https://api.spotify.com/v1/tracks/' + id)
    }
}