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

            var token = 'BQD44MKXFo0agFES2rfPEBPq8B_gOCvvQ5FPiKElj0KjOveocTbojOJDwBbwHKlq-sP5hpLrrfxaJKQ9maf0YbXvFlaiHPZLjd8t353Pf1HWgSwZdkDrDoZi-Pp893MNFT7isayNtj0'

            xhr.setRequestHeader('authorization', 'Bearer ' + token)

            xhr.send()
        })
    },

    searchAlbums(id) {
        // TODO
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

            var token = 'BQD44MKXFo0agFES2rfPEBPq8B_gOCvvQ5FPiKElj0KjOveocTbojOJDwBbwHKlq-sP5hpLrrfxaJKQ9maf0YbXvFlaiHPZLjd8t353Pf1HWgSwZdkDrDoZi-Pp893MNFT7isayNtj0'

            xhr.setRequestHeader('authorization', 'Bearer ' + token)

            xhr.send()
        })
    },

    searchSongs(id) {
        // TODO
        return new Promise((resolve, reject) => {
            var xhr = new XMLHttpRequest()

            xhr.addEventListener('load', function () {
                var res = JSON.parse(xhr.responseText)

                resolve(res.items)
            })

            xhr.addEventListener('error', function () {
                reject() // TODO
            })

            xhr.open('get', 'https://api.spotify.com/v1/albums/' + id + '/tracks')

            var token = 'BQD44MKXFo0agFES2rfPEBPq8B_gOCvvQ5FPiKElj0KjOveocTbojOJDwBbwHKlq-sP5hpLrrfxaJKQ9maf0YbXvFlaiHPZLjd8t353Pf1HWgSwZdkDrDoZi-Pp893MNFT7isayNtj0'

            xhr.setRequestHeader('authorization', 'Bearer ' + token)

            xhr.send()
        })
    }
}