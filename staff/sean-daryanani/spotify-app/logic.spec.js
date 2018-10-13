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

    describe('list tracks', () => {
        it('should succeed on matching query', () => {
            var id = '4GjdtlX0gGwOxf5vta6Jpk' 

            return logic.listTracks(id)
                .then(tracks => {
                    expect(tracks).toBeDefined()

                    expect(tracks.length).toBeGreaterThan(0)
                })
        })
    })

    describe('get song to play', () => {
        it('should succeed on matching query', () => {
            var id = '4JIeOo8F6Yl6yegQIfCBUp' 

            return logic.listTrackInfo(id)
                .then(res => {
                    expect(res).toBeDefined()
                })
        })
    })
})