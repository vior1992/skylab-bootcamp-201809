var token = 'BQAEyvPlWj1XNMypcWnyjH7OVezLyZCf0pt7Aob8dLcQbinBLzPXPgpvOYNMo2oeB0_qotFnWKGkGhCtuWuraSKNBShlPUd2MJVWa6IX2Y15FJyO0ueOZoNd1XQALMs1apm2GYoaT0titQ'

const logic = {
    searchArtists(query) {
        if (typeof query !== 'string') throw TypeError(`${query} is not a string`)
        if (!query.trim().length) throw Error('query is empty or blank')
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
        if (typeof id !== 'string') throw TypeError(`${id} is not a string`)
        if (!id.trim().length) throw Error('id is empty or blank')
        return new Promise((resolve, reject) => {
            var xhr = new XMLHttpRequest()

            xhr.addEventListener('load', function() {
                var res = JSON.parse(xhr.responseText)

                resolve(res.items)
                console.log(res.items);


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
        if (typeof idAlbum !== 'string') throw TypeError(`${idAlbum} is not a string`)
        if (!idAlbum.trim().length) throw Error('id is empty or blank')
        return new Promise((resolve, reject) => {
            var xhr = new XMLHttpRequest()

            xhr.addEventListener('load', function() {
                var res = JSON.parse(xhr.responseText)

                resolve(res.items)
                console.log(res.items);

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
        if (typeof idTracks !== 'string') throw TypeError(`${idTracks} is not a string`)
        if (!idTracks.trim().length) throw Error('id is empty or blank')
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