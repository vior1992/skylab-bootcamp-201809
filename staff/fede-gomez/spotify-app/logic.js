const logic = {

    // var token: 'BQDrLOTMDs3my8C1Ev9uL7hVeU89UgBNfHaP0bsBujMQHAlt-865FLQB-48Hu6EKMMTDvd5sPdgmqKfwg3OT1yX8BCLPqD4mgRj7RaRBUcT03dfMR0Z5alr2_yzzAC5ufQqWIpmJrlPF2A',

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

            token = 'BQDrLOTMDs3my8C1Ev9uL7hVeU89UgBNfHaP0bsBujMQHAlt-865FLQB-48Hu6EKMMTDvd5sPdgmqKfwg3OT1yX8BCLPqD4mgRj7RaRBUcT03dfMR0Z5alr2_yzzAC5ufQqWIpmJrlPF2A'

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

            var token = 'BQDrLOTMDs3my8C1Ev9uL7hVeU89UgBNfHaP0bsBujMQHAlt-865FLQB-48Hu6EKMMTDvd5sPdgmqKfwg3OT1yX8BCLPqD4mgRj7RaRBUcT03dfMR0Z5alr2_yzzAC5ufQqWIpmJrlPF2A'

            xhr.setRequestHeader('authorization', 'Bearer ' + token)

            xhr.send()
        })
    },

    searchSongs(id){
        return new Promise((resolve, reject) => {
            var xhr = new XMLHttpRequest()

            xhr.addEventListener('load', () => {
                const res = JSON.parse(xhr.responseText)
                console.log(res)
                resolve(res)
            })

            xhr.addEventListener('error', () => {
                reject() // TODO
            })

            xhr.open('get', `https://api.spotify.com/v1/albums/${id}/tracks`)

            var token = 'BQDrLOTMDs3my8C1Ev9uL7hVeU89UgBNfHaP0bsBujMQHAlt-865FLQB-48Hu6EKMMTDvd5sPdgmqKfwg3OT1yX8BCLPqD4mgRj7RaRBUcT03dfMR0Z5alr2_yzzAC5ufQqWIpmJrlPF2A'

            xhr.setRequestHeader('authorization', 'Bearer ' + token)

            xhr.send()
        })
    },
}
