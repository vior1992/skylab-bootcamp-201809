describe('logic', () => {
    describe('search artists', () => {
        it('should succeed on matching query', () => {
            var query = 'jackson'

            return logic.searchArtists(query)
                .then(artists => {
                    expect(artists).toBeDefined()

                    expect(artists.length).toBeGreaterThan(0)
                })
        })
    })

    describe('list albums', () => {
        it('should succeed on matching query', () => {
            var id = '6tbjWDEIzxoDsBA1FuhfPW' // madonna

            return logic.listAlbums(id)
                .then(albums => {
                    expect(albums).toBeDefined()

                    expect(albums.length).toBeGreaterThan(0)
                })
        })
    })

    describe('list songs', () => {
        it('should succeed on matching query', () => {
            var id = '5GafzQvK7U5aYFnGopnR27' //Cat Empire Album

            return logic.listSongs(id)
                .then(songs => {
                    expect(songs).toBeDefined()

                    expect(songs.length).toBeGreaterThan(0)
                })
        })
    })

    describe('play song', () => {
        it('should succeed on matching query', () => {
            var id = '2S9zg7NJN8Pk8nI0t06HxT' //Cat Empire Song

            return logic.playSong(id)
                .then(song => {
                    expect(song).toBeDefined()
                    // Falta alguna comprovació
                })
        })
    })

})