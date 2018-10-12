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

            var token = 'BQCupPYx5P0fkoO9-am_w077fH0FujhUdOt-MiEtjaXxERbFoXOWPehgh5cZB_ch2QNoT9CqL2PkzUI7t4Vk4b43lc2Nqv0KzSVnopFc8LZBTPa8jRyG79gMOSSURKJwmc_ad71-osnYXw'

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

            var token = 'BQAI6-FVuO-JBI9krzovJ_uwIrFYpabgvRTnzqTAs-6g6ig9-aHS7PECGm87T6fLHpU3caVHkR8Is3sv9nwpi7R3okXhYWdmQCdmW3-XB2MbJVzRR13IVakGZhaFeD3HP55wSHNcpfubQg'

            xhr.setRequestHeader('authorization', 'Bearer ' + token)

            xhr.send()
        })
    }
}