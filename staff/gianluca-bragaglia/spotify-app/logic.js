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

            var token = 'BQDBgQe5OKOv59B-9XZARPBRqCzA-GssSL5CwB69_RGiIu2tQRXVlgvGruIguNrp_8WjANbFSYfbNwUdHYePVfpGHXss8gJUMVW2-HNzIPRsghpxam-E52l1m4Jc8yGTk6AI_w5Kec3hPw'

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

            var token = 'BQDBgQe5OKOv59B-9XZARPBRqCzA-GssSL5CwB69_RGiIu2tQRXVlgvGruIguNrp_8WjANbFSYfbNwUdHYePVfpGHXss8gJUMVW2-HNzIPRsghpxam-E52l1m4Jc8yGTk6AI_w5Kec3hPw'

            xhr.setRequestHeader('authorization', 'Bearer ' + token)

            xhr.send()
        })
    },

    searchTracks(idTracks) {
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

            var token = 'BQDBgQe5OKOv59B-9XZARPBRqCzA-GssSL5CwB69_RGiIu2tQRXVlgvGruIguNrp_8WjANbFSYfbNwUdHYePVfpGHXss8gJUMVW2-HNzIPRsghpxam-E52l1m4Jc8yGTk6AI_w5Kec3hPw'

            xhr.setRequestHeader('authorization', 'Bearer ' + token)

            xhr.send()
        })
    }
}