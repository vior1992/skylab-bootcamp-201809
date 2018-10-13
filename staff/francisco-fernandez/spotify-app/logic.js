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

            var token = 'BQCJDU0HtUbAd9gagVC-Y4-yL9af9CjwbYj-dDRkmGG4aeccIBIh2waAPUCy3-UsBFMsOFGyhqIeEjlq9dCXjhxE2r2mpTK3hDB8aDEgfTe-CGvFKJ-JB17QY8qMFNT8N-ZbLXWoNJE0zWq8'

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

            var token = 'BQCJDU0HtUbAd9gagVC-Y4-yL9af9CjwbYj-dDRkmGG4aeccIBIh2waAPUCy3-UsBFMsOFGyhqIeEjlq9dCXjhxE2r2mpTK3hDB8aDEgfTe-CGvFKJ-JB17QY8qMFNT8N-ZbLXWoNJE0zWq8'

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

            var token = 'BQCJDU0HtUbAd9gagVC-Y4-yL9af9CjwbYj-dDRkmGG4aeccIBIh2waAPUCy3-UsBFMsOFGyhqIeEjlq9dCXjhxE2r2mpTK3hDB8aDEgfTe-CGvFKJ-JB17QY8qMFNT8N-ZbLXWoNJE0zWq8'

            xhr.setRequestHeader('authorization', 'Bearer ' + token)

            xhr.send()
        })
    }
}