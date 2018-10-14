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

            var token = 'BQCaGUSdgPbo6UoK6U13tiYp4AjO9wVEFHj14XMwQfclLsSB9Mtb_W3tre-BdZCAdwFwzf71FqcbLmW-VExl1wdDnxMxD9AXfBgPjT3FC5-cLSMx4Tp9_q0mm56KJd_h0ByDQdbOdRZwWw'

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

            var token = 'BQCaGUSdgPbo6UoK6U13tiYp4AjO9wVEFHj14XMwQfclLsSB9Mtb_W3tre-BdZCAdwFwzf71FqcbLmW-VExl1wdDnxMxD9AXfBgPjT3FC5-cLSMx4Tp9_q0mm56KJd_h0ByDQdbOdRZwWw'

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

            var token = 'BQCaGUSdgPbo6UoK6U13tiYp4AjO9wVEFHj14XMwQfclLsSB9Mtb_W3tre-BdZCAdwFwzf71FqcbLmW-VExl1wdDnxMxD9AXfBgPjT3FC5-cLSMx4Tp9_q0mm56KJd_h0ByDQdbOdRZwWw'

            xhr.setRequestHeader('authorization', 'Bearer ' + token)

            xhr.send()
        })
    },
}
