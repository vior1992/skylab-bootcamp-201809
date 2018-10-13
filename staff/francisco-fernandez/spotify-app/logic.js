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

            var token = 'BQAtihjPqJ_T44T5FOB3IgHpTrv-LZUvaAxtN2l2LtJ8XmS4XGSOWu1zxN2L2zfm0S2nS4PvrwoX1Qq5eaoqYkPxHSzg2LD5oOqEl5eF_Yx87yMDw_Ny_G-RFJ9GzKQw6Ox2ioOmyTgYoY3D'

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

            xhr.open('get', 'https://api.spotify.com/v1/artists/'+id+'/albums')

            var token = 'BQAtihjPqJ_T44T5FOB3IgHpTrv-LZUvaAxtN2l2LtJ8XmS4XGSOWu1zxN2L2zfm0S2nS4PvrwoX1Qq5eaoqYkPxHSzg2LD5oOqEl5eF_Yx87yMDw_Ny_G-RFJ9GzKQw6Ox2ioOmyTgYoY3D'

            xhr.setRequestHeader('authorization', 'Bearer ' + token)

            xhr.send()
        })
    },

    searchTracks(albumId) {
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

            xhr.open('get', 'https://api.spotify.com/v1/albums/'+albumId+'/tracks')

            var token = 'BQAtihjPqJ_T44T5FOB3IgHpTrv-LZUvaAxtN2l2LtJ8XmS4XGSOWu1zxN2L2zfm0S2nS4PvrwoX1Qq5eaoqYkPxHSzg2LD5oOqEl5eF_Yx87yMDw_Ny_G-RFJ9GzKQw6Ox2ioOmyTgYoY3D'

            xhr.setRequestHeader('authorization', 'Bearer ' + token)

            xhr.send()
        })
    }
}