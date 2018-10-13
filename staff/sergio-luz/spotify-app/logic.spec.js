describe('logic', () => {
    describe('search artists', () => {
        it('should succeed on matching query', () => {
            var query = 'jackson'

            return logic.searchArtists(query)
                .then(arr => {
                    expect(arr).toBeDefined()

                    expect(arr.artists.items.length).toBeGreaterThan(0)
                })
        })

        it('should fail on invalid query (undefined)', () => {
            var query = undefined
            expect(function () {
                logic.searchArtists(query);
            }).toThrowError(TypeError, query+ ' is not a string');
        })

        it('should fail on invalid query (number)', () => {
            var query = 12
            expect(function () {
                logic.searchArtists(query);
            }).toThrowError(TypeError, query+ ' is not a string');
        })

        it('should fail on invalid query (boolean)', () => {
            var query = true
            expect(function () {
                logic.searchArtists(query);
            }).toThrowError(TypeError, query+ ' is not a string');
        })

        it('should fail on invalid query (array)', () => {
            var query = [1,2]
            expect(function () {
                logic.searchArtists(query);
            }).toThrowError(TypeError, query+ ' is not a string');
        })

        it('should fail on invalid query (object)', () => {
            var query = {ob:'ject'}
            expect(function () {
                logic.searchArtists(query);
            }).toThrowError(TypeError, query+ ' is not a string');
        })

        it('should fail on invalid query (null)', () => {
            var query = null
            expect(function () {
                logic.searchArtists(query);
            }).toThrowError(TypeError, query+ ' is not a string');
        })

        it('should fail on invalid query (blank)', () => {
            var query = '      \n\t'
            expect(function () {
                logic.searchArtists(query);
            }).toThrowError(Error, query+ ' is not valid');
        })
    })

    describe('search albums', () => {
        it('should succeed on matching id', () => {
            var id = '6tbjWDEIzxoDsBA1FuhfPW' // madonna

            return logic.searchAlbums(id)
                .then(albums => {
                    expect(albums).toBeDefined()

                    expect(albums.items.length).toBeGreaterThan(0)
                })
        })

        it('should fail on invalid id (undefined)', () => {
            var id = undefined
            expect(function () {
                logic.searchAlbums(id);
            }).toThrowError(TypeError, id+ ' is not a string');
        })

        it('should fail on invalid id (number)', () => {
            var id = 12
            expect(function () {
                logic.searchAlbums(id);
            }).toThrowError(TypeError, id+ ' is not a string');
        })

        it('should fail on invalid id (boolean)', () => {
            var id = true
            expect(function () {
                logic.searchAlbums(id);
            }).toThrowError(TypeError, id+ ' is not a string');
        })

        it('should fail on invalid id (array)', () => {
            var id = [1,2]
            expect(function () {
                logic.searchAlbums(id);
            }).toThrowError(TypeError, id+ ' is not a string');
        })

        it('should fail on invalid id (object)', () => {
            var id = {ob:'ject'}
            expect(function () {
                logic.searchAlbums(id);
            }).toThrowError(TypeError, id+ ' is not a string');
        })

        it('should fail on invalid id (null)', () => {
            var id = null
            expect(function () {
                logic.searchAlbums(id);
            }).toThrowError(TypeError, id+ ' is not a string');
        })

        it('should fail on invalid id (blank)', () => {
            var id = '      \n\t'
            expect(function () {
                logic.searchAlbums(id);
            }).toThrowError(Error, id+ ' is not valid');
        })
    })

    describe('search songs', () => {
        it('should succeed on matching id', () => {
            var id = '4GjdtlX0gGwOxf5vta6Jpk' 

            return logic.searchSongs(id)
                .then(tracks => {
                    expect(tracks).toBeDefined()

                    expect(tracks.items.length).toBeGreaterThan(0)
                })
        })


























        

        it('should fail on invalsong song (undefined)', () => {
            var song = undefined
            expect(function () {
                logic.searchSongs(song);
            }).toThrowError(TypeError, song+ ' is not a string');
        })

        it('should fail on invalsong song (number)', () => {
            var song = 12
            expect(function () {
                logic.searchSongs(song);
            }).toThrowError(TypeError, song+ ' is not a string');
        })

        it('should fail on invalsong song (boolean)', () => {
            var song = true
            expect(function () {
                logic.searchSongs(song);
            }).toThrowError(TypeError, song+ ' is not a string');
        })

        it('should fail on invalsong song (array)', () => {
            var song = [1,2]
            expect(function () {
                logic.searchSongs(song);
            }).toThrowError(TypeError, song+ ' is not a string');
        })

        it('should fail on invalsong song (object)', () => {
            var song = {ob:'ject'}
            expect(function () {
                logic.searchSongs(song);
            }).toThrowError(TypeError, song+ ' is not a string');
        })

        it('should fail on invalsong song (null)', () => {
            var song = null
            expect(function () {
                logic.searchSongs(song);
            }).toThrowError(TypeError, song+ ' is not a string');
        })

        it('should fail on invalsong song (blank)', () => {
            var song = '      \n\t'
            expect(function () {
                logic.searchSongs(song);
            }).toThrowError(Error, song+ ' is not valid');
        })
    })
})