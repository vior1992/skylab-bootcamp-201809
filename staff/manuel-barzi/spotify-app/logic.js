const logic = {
    token: 'NO-TOKEN',

    call(path) {
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest()

            xhr.addEventListener('load', () => {
                const res = JSON.parse(xhr.responseText)

                if (res.error) return reject(new Error(res.error.message))

                resolve(res)
            })

            xhr.addEventListener('error', () => reject())

            xhr.open('get', `https://api.spotify.com/v1/${path}`)

            xhr.setRequestHeader('authorization', `Bearer ${this.token}`)

            xhr.send()
        })
    },

    searchArtists(query) {
        if (typeof query !== 'string') throw TypeError(`${query} is not a string`)

        if (!query.trim().length) throw Error('query is empty or blank')

        return this.call(`search?type=artist&query=${query}`)
            //.then(res => res.artists.items)
            .then(({ artists: { items } }) => items)
    },

    listAlbums(id) {
        return this.call(`artists/${id}/albums`)
            .then(({ items }) => items)
    },

    listTracks(id) {
        return this.call(`albums/${id}/tracks`)
            .then(({ items }) => items)
    },

    // TODO retrieveTrack(id)
}