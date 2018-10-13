var token = 'BQDv0Rn-tmYCT8jJa7T1YRgdPAPgmlKSH-kOvLcPTXRlpV7kMbW66mXHb_inP-iqtIrIdwDQXJVJtEB-N0bN1p1yG9MgnVsL9uv89AEMVrRaFOOWmK169JSkIDEEc-rVRHNqwXIKTLyd7OWM'

 
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
        if(typeof query !== 'string') throw TypeError(query + ' is not a string')
        if(query.trim().length === 0) throw TypeError(query + ' is blank or empty string')


        return logic.call('https://api.spotify.com/v1/search?type=artist&query=' + query)
    },

    searchAlbums(id) {
        if(typeof id !== 'string') throw TypeError(id + ' is not a string')
        if(id.trim().length === 0) throw TypeError(id + ' is blank or empty string')

        return logic.call('https://api.spotify.com/v1/artists/' + id + '/albums')
    },

    searchTracks(id) {
        if(typeof id !== 'string') throw TypeError(id + ' is not a string')
        if(id.trim().length === 0) throw TypeError(id + ' is blank or empty string')

        return logic.call('https://api.spotify.com/v1/albums/' + id + '/tracks')
    },

    searchOneTrack(id) {
        return logic.call('https://api.spotify.com/v1/tracks/' + id)
    }
}