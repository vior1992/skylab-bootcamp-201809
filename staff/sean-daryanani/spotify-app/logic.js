const logic = {

    call() {

    },
    
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

            var token = 'BQDLf6sUS1oNVkPNO1FHUOzPxgQn2LzTZC0jtKVnmkd2p3mSr5K88GD74vdbGrX4ZRgSIVY3q4nIWUmUyWx7lWesGiaZjUaarID91hTPfuX18-OQaNnfj97PofN8J-zr6g0JFpCcrdDiF3Y'

            xhr.setRequestHeader('authorization', 'Bearer ' + token)

            xhr.send()
        })
    },

    listAlbums(id) {
        return new Promise((resolve, reject) => {
            var xhr = new XMLHttpRequest()

            xhr.addEventListener('load', function () {
                var res = JSON.parse(xhr.responseText)

                resolve(res.items)
            })

            xhr.addEventListener('error', function () {
                reject() 
            })

            xhr.open('get', 'https://api.spotify.com/v1/artists/' + id + '/albums')

            var token = 'BQDLf6sUS1oNVkPNO1FHUOzPxgQn2LzTZC0jtKVnmkd2p3mSr5K88GD74vdbGrX4ZRgSIVY3q4nIWUmUyWx7lWesGiaZjUaarID91hTPfuX18-OQaNnfj97PofN8J-zr6g0JFpCcrdDiF3Y'

            xhr.setRequestHeader('authorization', 'Bearer ' + token)

            xhr.send()
        })
    },

    listTracks(id) {
        return new Promise((resolve, reject) => {
            var xhr = new XMLHttpRequest()

            xhr.addEventListener('load', function () {
                var res = JSON.parse(xhr.responseText)

                resolve(res.items)
            })

            xhr.addEventListener('error', function () {
                reject() 
            })

            xhr.open('get', 'https://api.spotify.com/v1/albums/' + id + '/tracks')

            var token = 'BQDLf6sUS1oNVkPNO1FHUOzPxgQn2LzTZC0jtKVnmkd2p3mSr5K88GD74vdbGrX4ZRgSIVY3q4nIWUmUyWx7lWesGiaZjUaarID91hTPfuX18-OQaNnfj97PofN8J-zr6g0JFpCcrdDiF3Y'

            xhr.setRequestHeader('authorization', 'Bearer ' + token)

            xhr.send()
        })
    },

    listTrackInfo(id) {
        return new Promise((resolve, reject) => {
            var xhr = new XMLHttpRequest()

            xhr.addEventListener('load', function () {
                var res = JSON.parse(xhr.responseText)

                resolve(res)
            })

            xhr.addEventListener('error', function () {
                reject() 
            })

            xhr.open('get', 'https://api.spotify.com/v1/tracks/' + id)

            var token = 'BQDLf6sUS1oNVkPNO1FHUOzPxgQn2LzTZC0jtKVnmkd2p3mSr5K88GD74vdbGrX4ZRgSIVY3q4nIWUmUyWx7lWesGiaZjUaarID91hTPfuX18-OQaNnfj97PofN8J-zr6g0JFpCcrdDiF3Y'

            xhr.setRequestHeader('authorization', 'Bearer ' + token)

            xhr.send()
        })
    }
}

