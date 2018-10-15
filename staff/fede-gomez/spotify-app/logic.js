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

            var token = 'BQA8EQzj06uxbsznGmn965xPiLsvbZGWdWm0nWLuasuxcgAkTtsOiF2Q6qCmyG6w1z-tUnzOM21lFCx4OiGU_3Y6cL3Rvy8N6QCLrJ40G1aKt98zLLb-Et0SPoCmTYcuFa6B-vPf2oeQxQ'

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

            var token = 'BQA8EQzj06uxbsznGmn965xPiLsvbZGWdWm0nWLuasuxcgAkTtsOiF2Q6qCmyG6w1z-tUnzOM21lFCx4OiGU_3Y6cL3Rvy8N6QCLrJ40G1aKt98zLLb-Et0SPoCmTYcuFa6B-vPf2oeQxQ'

            xhr.setRequestHeader('authorization', 'Bearer ' + token)

            xhr.send()
        })
    },

    searchSongs(id){
        return new Promise((resolve, reject) => {
            var xhr = new XMLHttpRequest()

            xhr.addEventListener('load', function () {
                var res = JSON.parse(xhr.responseText)
                console.log(res)
                resolve(res)
            })

            xhr.addEventListener('error', function () {
                reject() // TODO
            })

            xhr.open('get', 'https://api.spotify.com/v1/albums/' + id + '/tracks')

            var token = 'BQA8EQzj06uxbsznGmn965xPiLsvbZGWdWm0nWLuasuxcgAkTtsOiF2Q6qCmyG6w1z-tUnzOM21lFCx4OiGU_3Y6cL3Rvy8N6QCLrJ40G1aKt98zLLb-Et0SPoCmTYcuFa6B-vPf2oeQxQ'

            xhr.setRequestHeader('authorization', 'Bearer ' + token)

            xhr.send()
        })
    },
}
