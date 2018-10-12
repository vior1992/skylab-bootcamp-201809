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

            var token = 'BQA1Vck1KZT_s53oOBKwH0PV40nZMRps8spIqK2BxAHAbC0_-Hw4hhJSHMTW_Xl0dHnW9eusoPj5R1HX6y0LWoEJI9KYTSQ8sVAsKXXEI85wQumInUbDQ3q2nGHZd_ao4v6rW9CbXkvIvKA'

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
                reject() // TODO
            })

            xhr.open('get', 'https://api.spotify.com/v1/artists/' + id + '/albums')

            var token = 'BQA1Vck1KZT_s53oOBKwH0PV40nZMRps8spIqK2BxAHAbC0_-Hw4hhJSHMTW_Xl0dHnW9eusoPj5R1HX6y0LWoEJI9KYTSQ8sVAsKXXEI85wQumInUbDQ3q2nGHZd_ao4v6rW9CbXkvIvKA'

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
                reject() // TODO
            })

            xhr.open('get', 'https://api.spotify.com/v1/albums/' + id + '/tracks')

            var token = 'BQA1Vck1KZT_s53oOBKwH0PV40nZMRps8spIqK2BxAHAbC0_-Hw4hhJSHMTW_Xl0dHnW9eusoPj5R1HX6y0LWoEJI9KYTSQ8sVAsKXXEI85wQumInUbDQ3q2nGHZd_ao4v6rW9CbXkvIvKA'

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
                reject() // TODO
            })

            xhr.open('get', 'https://api.spotify.com/v1/audio-features/' + id)

            var token = 'BQA1Vck1KZT_s53oOBKwH0PV40nZMRps8spIqK2BxAHAbC0_-Hw4hhJSHMTW_Xl0dHnW9eusoPj5R1HX6y0LWoEJI9KYTSQ8sVAsKXXEI85wQumInUbDQ3q2nGHZd_ao4v6rW9CbXkvIvKA'

            xhr.setRequestHeader('authorization', 'Bearer ' + token)

            xhr.send()
        })
    }
}