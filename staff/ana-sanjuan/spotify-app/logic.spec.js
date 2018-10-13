describe('logic', () => {
    describe('search artists', () => {
        it('should succeed on matching query', () => {
            var query = 'jackson'

            return logic.searchArtists(query)
                .then(res => {
                    var artists = res.artists.items
                    expect(artists).toBeDefined()

                    expect(artists.length).toBeGreaterThan(0)
                })
        })
    })

    true && describe('list albums', () => {
        it('should succeed on matching query', () => {
            var id = '6tbjWDEIzxoDsBA1FuhfPW' // madonna

            return logic.searchAlbums(id)
                .then(res => {
                    var albums = res.items
                    expect(albums).toBeDefined()

                    expect(albums.length).toBeGreaterThan(0)
                })
        })
    })


    true && describe('list tracks', () => {
        it('should succeed on matching query', () => {
            var id = '07tbMxw9qeVsNIq0l7xBBX' // check to check album

            return logic.searchTracks(id)
                .then(res => {
                    var tracks = res.items;
                    expect(tracks).toBeDefined()

                    expect(tracks.length).toBeGreaterThan(0)
                })
        })
    })


    true && describe('preview one song', () => {
        it('should succeed on matching query', () => {
            var id = '2GfhQgQXNUo1rW9WQRkrvU' // check to check song

            return logic.searchOneTrack(id)
                .then(res => {
                    var oneTrack = res.preview_url
                    expect(oneTrack).toBeDefined()

                    expect(oneTrack.length).toBeGreaterThan(0)
                })
        })
    })
})