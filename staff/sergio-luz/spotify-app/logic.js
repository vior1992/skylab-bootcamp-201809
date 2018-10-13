var token='BQD_Ubu5x3cd1YUO8pFdmi8qb_bufWGLJwGtxBI82cvJI2ulFBrCnxZZhOeIVx8Vv681yNECR4o63n5E86XD9YWIPNSowYBkl6JDGu2QtGnh7Z8y1OfLHPn_k8U4DjlJRbjllfnScjw';
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

            xhr.setRequestHeader('authorization', 'Bearer ' + token)

            xhr.send()
        })
    },
    searchArtists(query) {
        if( typeof query!=='string') throw TypeError (query+ ' is not a string')
        if( !query.trim().length) throw Error(query+ ' is not valid')

        return this.call('https://api.spotify.com/v1/search?type=artist&query=' + query)
    },

    searchAlbums(id) {
        if( typeof id!=='string') throw TypeError (id+ ' is not a string')
        if( !id.trim().length) throw Error(id+ ' is not valid')

        return this.call('https://api.spotify.com/v1/artists/' + id + '/albums')
    },

    searchSongs(id) {
        console.log(id);
        return this.call('https://api.spotify.com/v1/albums/' + id + '/tracks')
    }
}