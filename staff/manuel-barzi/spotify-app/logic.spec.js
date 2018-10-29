describe('logic', () => {
    beforeEach(() => logic.token = 'BQAw3yTuy--M0ubQEF5TzVrqY4QZhRGgwYvnxRv-LXNbSoxr2nfW9vo8XCtDL6GeaEE5DRu1bcJVozqkfRmnqBv79_YFY_160nt96Ra9s5ppEc4gVqo7L-3SCK4Eb9Kaw28zKLv4DLno35E')

    describe('search artists', () => {
        let query

        beforeEach(() => query = 'jackson')

        it('should succeed on matching query', () => {
            return logic.searchArtists(query)
                .then(artists => {
                    expect(artists).toBeDefined()

                    expect(artists.length).toBeGreaterThan(0)
                })
        })

        describe('token expired', () => {
            beforeEach(() => logic.token = 'BQDC-hqIyF8ZXfBBgoHHoBd8Nnh6AmU9jlj2hzv0GbYozZp3ElRVJrDauE_LKgGE32N80cZ_kyB-t--d3PwQQODO--3EPpoyYuaL0ffZUs_MH5XTkmxuKE4xcS3yL8p5nsdoHocRQid6ok8')

            it('should fail on expired token', () =>
                logic.searchArtists(query)
                    .catch(error => {
                        expect(error).toBeDefined()

                        const { message } = error

                        expect(message).toEqual('The access token expired')
                    })
            )
        })

        it('should fail on undefined query', () => {
            expect( () => logic.searchArtists()).toThrowError(TypeError, 'undefined is not a string')
        })

        // TODO other tests cases
    })

    describe('list albums', () => {
        it('should succeed on matching id', () => {
            var id = '6tbjWDEIzxoDsBA1FuhfPW' // madonna

            return logic.listAlbums(id)
                .then(albums => {
                    expect(albums).toBeDefined()

                    expect(albums.length).toBeGreaterThan(0)
                })
        })

        // TODO other cases
    })

    describe('list tracks', () => {
        it('should succeed on matching id', () => {
            var id = '4hBA7VgOSxsWOf2N9dJv2X' // "Rebel Heart Tour (Live)"

            return logic.listTracks(id)
                .then(tracks => {
                    expect(tracks).toBeDefined()

                    expect(tracks.length).toBeGreaterThan(0)
                })
        })

        // TODO other cases
    })
})