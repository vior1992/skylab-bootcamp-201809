require('isomorphic-fetch')

const { expect } = require('chai')

const logic = require('./spotifyLogic')

// running test from CLI
// normal -> $ mocha src/logic.spec.js --timeout 10000
// debug -> $ mocha debug src/logic.spec.js --timeout 10000

describe('spotifyLogic', () => {
    describe('getArtistById', () => {

        it('should succeed on retrieving correct artist', () => {

            let id = '6J7biCazzYhU3gM9j1wfid'
            logic.getArtistById(id)
                .then((res) => expect(res.name).to.equal('Jamiroquai'))
        })

        it('should throw correct error on non-string id', () => {

            let id = {}
            try {
                logic.getArtistById(id)
            }
            catch (err) {
                expect(err.message).to.equal('id is not a a string')
            }

        })
        
        it('should throw correct error on empty id', () => {
            let id = '';
            try{
                logic.getArtistById(id)
            } 
            catch (err) {
                expect(err.message).to.equal('id is empty or blank')
            }
        })

    })

    describe('getArtists', () => {
        it('should succesfully search', () => {

            return logic.getArtists('Jamiroquai')
                .then((res) => {
                    expect(res).not.to.be.undefined
                    expect((res.artists.items[0].name)).to.equal('Jamiroquai')

                })
        })

        it('should throw correct error on empty query', () => {
            try { logic.getArtists('') }
            catch (err) {
                expect(err.message).to.equal('Query cannot be empty')
            }
    
    
    
        })
    })
})

describe('getPlaylistsTracks', () => {
    let id = '0AUisiV8Q5KcZ41nPOhrIr'
    it('should succeed on retrieving tracks of a playlist', () => {

        logic.getPlaylistsTracks(id)
            .then((res) => {
                expect(res.items).not.to.be.undefined
                expect(res.href).to.equal('https://api.spotify.com/v1/playlists/0AUisiV8Q5KcZ41nPOhrIr/tracks?offset=0&limit=100')
            })
    })
})

describe('getAlbumsByArtistId', () => {
    let id = '6J7biCazzYhU3gM9j1wfid'
    it('should succeed on retrieving correct albums', () => {

        logic.getAlbumsByArtistId(id)
            .then((res) => {
                expect(res.items.length).to.equal(20)
                return res
            })
    })
})

describe('getSongsbyAlbumId', () => {
    let id = '1xQq0txMTpstjFUwp4c4E0'
    it('should succeed on retrieving correct tracks from album', () => {

        logic.getSongsbyAlbumId(id)
            .then((res) => {
                expect(res.items[1].name).to.equal('Automaton')
            })
        // .then((res) => console.log(res))
        // .then(res => console.log(res))
    })
})

describe('createPlaylist', () => {

    let name = 'Playlist Test 2'
    let description = 'Description of the playlist'

    it('should succeed on creating a playlist', () => {

        logic.createPlaylist(name, description)
            .then((res) => {
                expect(res.name).to.equal(name)
                return res
            })
    })
})
