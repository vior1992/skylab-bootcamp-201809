var token='BQBQAf3lvlVnqKsca2zAx9pOHR79NFu7tzCwOsivvcjEiqU4wDU1xKDf-bzFNv8WXGTmgG2q3Lr84uz7_GXtui4FmhbLtKdov5BRYHgsAz1xbMyW4Vq0UY2W7k7EDeHPTOsN3aYqYVw';
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
        if( typeof id!=='string') throw TypeError (id+ ' is not a string')
        if( !id.trim().length) throw Error(id+ ' is not valid')

        return this.call('https://api.spotify.com/v1/albums/' + id + '/tracks')
    }
}