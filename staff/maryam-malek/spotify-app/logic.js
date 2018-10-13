const logic = {

    callApi(path) {
        return new Promise((resolve, reject) => {
            var xhr = new XMLHttpRequest()

            xhr.addEventListener('load', function () {
                var res = JSON.parse(xhr.responseText)

                resolve(res)
            })

            xhr.addEventListener('error', function () {
                reject() // TODO
            })

            xhr.open('get', 'https://api.spotify.com/v1/' + path)

            var token = 'BQAM4-okhnzDJ6MZ5I1AbHDG3o-q87j1fXEdQy0_38_CHvBQlbrdhdLuUo502SN3yIvhCsm2TRvo9aOrclj2g1PhrwCg93eOvYRj1RGPdGTPIV0ZBiG4shurIYitJ6E35zExiKXb8IGKpH84Hiwj0dU3kt5gkdIhOA'

            xhr.setRequestHeader('authorization', 'Bearer ' + token)

            xhr.send()
        })

    },
    searchArtists(query) {
        if(typeof query !== 'string' || query.trim().length === 0) throw TypeError (query + ' is not a valid query')
        
        return this.callApi(`search?type=artist&query=${query}`)
    },

    listAlbums(id) {
        if(typeof id !== 'string' || id.trim().length === 0) throw TypeError (id + ' is not a valid id')

        return this.callApi(`artists/${id}/albums`)
    },

    listSongs(id){
        if(typeof id !== 'string' || id.trim().length === 0) throw TypeError (id + ' is not a valid id')

        return this.callApi(`albums/${id}/tracks`)
         
    }
    // searchArtists(query) {
    //     if(typeof query !== 'string' || query.trim().length === 0) throw TypeError (query + ' is not a valid query')
    //     return new Promise((resolve, reject) => {
    //         var xhr = new XMLHttpRequest()

    //         xhr.addEventListener('load', function () {
    //             var res = JSON.parse(xhr.responseText)

    //             resolve(res)
    //             //.artists.items
    //         })

    //         xhr.addEventListener('error', function () {
    //             reject() // TODO
    //         })

    //         xhr.open('get', 'https://api.spotify.com/v1/search?type=artist&query=' + query)

    //         // var token = 'BQBPHeoLCmYO9j1rXNoOTA5pEACBfKriJGW8hxquUVW--M7qCSZeK0buIwRBEd9o1iyDdw9rB8K42KitgZId0aeWHXLzHUzmqtvu42qsm66DF8haW--XWsagMLFLK5qrA-Y0w1-1-tMMVQuhN0MZFs2zgWT1EUkBtA'

    //         xhr.setRequestHeader('authorization', 'Bearer ' + token)

    //         xhr.send()
    //     })
    // },
    // listAlbums(id){
    //     return new Promise((resolve, reject) => {
    //         var xhr = new XMLHttpRequest()

    //         xhr.addEventListener('load', function () {
    //             var res = JSON.parse(xhr.responseText)

    //             resolve(res)
    //         })

    //         xhr.addEventListener('error', function () {
    //             reject() // TODO
    //         })

    //         xhr.open('get', `https://api.spotify.com/v1/artists/${id}/albums`)

    //         // var token = 'BQBPHeoLCmYO9j1rXNoOTA5pEACBfKriJGW8hxquUVW--M7qCSZeK0buIwRBEd9o1iyDdw9rB8K42KitgZId0aeWHXLzHUzmqtvu42qsm66DF8haW--XWsagMLFLK5qrA-Y0w1-1-tMMVQuhN0MZFs2zgWT1EUkBtA'

    //         xhr.setRequestHeader('authorization', 'Bearer ' + token)

    //         xhr.send()
    //     })
    // },

    // listSongs(id){
    //     return new Promise((resolve, reject) => {
    //         var xhr = new XMLHttpRequest()

    //         xhr.addEventListener('load', function () {
    //             var res = JSON.parse(xhr.responseText)

    //             resolve(res)
    //         })

    //         xhr.addEventListener('error', function () {
    //             reject() // TODO
    //         })

    //         xhr.open('get', `https://api.spotify.com/v1/albums/${id}/tracks`)

    //         // var token = 'BQBPHeoLCmYO9j1rXNoOTA5pEACBfKriJGW8hxquUVW--M7qCSZeK0buIwRBEd9o1iyDdw9rB8K42KitgZId0aeWHXLzHUzmqtvu42qsm66DF8haW--XWsagMLFLK5qrA-Y0w1-1-tMMVQuhN0MZFs2zgWT1EUkBtA'

    //         xhr.setRequestHeader('authorization', 'Bearer ' + token)

    //         xhr.send()
    //     })
    // },
}
    // playSong(id) {
    //     return new Promise((resolve, reject) => {
    //         var xhr = new XMLHttpRequest()

    //         xhr.addEventListener('load', function () {
    //             var res = JSON.parse(xhr.responseText)

    //             resolve(res)
    //         })

    //         xhr.addEventListener('error', function () {
    //             reject() // TODO
    //         })

    //         xhr.open('get', `https://api.spotify.com/v1/audio-features/${id}`)
    //        // xhr.open('get', `https://api.spotify.com/v1/tracks/${id}`)

    //         // var token = 'BQBPHeoLCmYO9j1rXNoOTA5pEACBfKriJGW8hxquUVW--M7qCSZeK0buIwRBEd9o1iyDdw9rB8K42KitgZId0aeWHXLzHUzmqtvu42qsm66DF8haW--XWsagMLFLK5qrA-Y0w1-1-tMMVQuhN0MZFs2zgWT1EUkBtA'

    //         xhr.setRequestHeader('authorization', 'Bearer ' + token)

    //         xhr.send()
    //     })
    // }
    



    // callApi(path) {
    //     return new Promise((resolve, reject) => {
    //         var xhr = new XMLHttpRequest()

    //         xhr.addEventListener('load', function () {
    //             var res = JSON.parse(xhr.responseText)

    //             resolve(res.artists.items)
    //         })

    //         xhr.addEventListener('error', function () {
    //             reject() // TODO
    //         })

    //         xhr.open('get', 'https://api.spotify.com/v1/' + path)

    //         var token = 'BQBmpa0kQt8afqrNzFPxDcz_3bBAqJZspkmUXzscjSLLYH3BCtjUGRv7vaXlLl-jlU-koiflDnEhKDevNWko8PWSmv1SUI5ZiCV46LegmnZl7SmrTACSePnWnUBrgndAMbN7aF0NVQqtcFhYVB2LRK7g-2oB9aoKng'

    //         xhr.setRequestHeader('authorization', 'Bearer ' + token)

    //         xhr.send()
    //     })

    // },
    // searchArtists(query) {
    //     return this.callApi(`search?type=artist&query=${query}`)
    // },

    // listAlbums(id) {
    //     return this.callApi(`artists/${id}/albums`)
    // }
