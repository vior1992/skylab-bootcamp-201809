const logic = {
    searchArtists(query) {
        return new Promise((resolve, reject) => {
            var xhr = new XMLHttpRequest()

            xhr.addEventListener('load', function() {
                var res = JSON.parse(xhr.responseText)

                resolve(res.artists.items)
            })

            xhr.addEventListener('error', function() {
                reject() // TODO
            })

            xhr.open('get', 'https://api.spotify.com/v1/search?type=artist&query=' + query)

            var token = 'BQCqL-_SIPyRSuE_-zuSnTW-QaLX78Qn15akOuzL-fYIpv44VyaDWdMHhWJ4Ozyh-5nJ1TRLKxXywRTNFPnTeeXYwveij2wWzY5rIxQQ5J00dSFFkkab-718kpP_VYuWR2XH85aik3KTow'

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
                console.log(res.items);

            })

            xhr.addEventListener('error', function() {
                reject() // TODO
            })

            xhr.open('get', 'https://api.spotify.com/v1/artists/' + id + '/albums')

            var token = 'BQCqL-_SIPyRSuE_-zuSnTW-QaLX78Qn15akOuzL-fYIpv44VyaDWdMHhWJ4Ozyh-5nJ1TRLKxXywRTNFPnTeeXYwveij2wWzY5rIxQQ5J00dSFFkkab-718kpP_VYuWR2XH85aik3KTow'

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
                console.log(res.items);

            })

            xhr.addEventListener('error', function() {
                reject() // TODO
            })

            xhr.open('get', 'https://api.spotify.com/v1/albums/' + idAlbum + '/tracks')

            var token = 'BQCqL-_SIPyRSuE_-zuSnTW-QaLX78Qn15akOuzL-fYIpv44VyaDWdMHhWJ4Ozyh-5nJ1TRLKxXywRTNFPnTeeXYwveij2wWzY5rIxQQ5J00dSFFkkab-718kpP_VYuWR2XH85aik3KTow'

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
                console.log(res.items);

            })

            xhr.addEventListener('error', function() {
                reject() // TODO
            })

            xhr.open('get', 'https://api.spotify.com/v1/albums/' + idTracks + '/tracks')

            var token = 'BQCqL-_SIPyRSuE_-zuSnTW-QaLX78Qn15akOuzL-fYIpv44VyaDWdMHhWJ4Ozyh-5nJ1TRLKxXywRTNFPnTeeXYwveij2wWzY5rIxQQ5J00dSFFkkab-718kpP_VYuWR2XH85aik3KTow'

            xhr.setRequestHeader('authorization', 'Bearer ' + token)

            xhr.send()
        })
    }
}