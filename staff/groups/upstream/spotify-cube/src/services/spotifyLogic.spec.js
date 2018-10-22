require('isomorphic-fetch')

const { expect } = require('chai')

const logic = require('./spotifyLogic')

// running test from CLI
// normal -> $ mocha src/logic.spec.js --timeout 10000
// debug -> $ mocha debug src/logic.spec.js --timeout 10000

describe('spotifyLogic', () => {
    describe('getArtistById', () => {

        let id = '6J7biCazzYhU3gM9j1wfid'
        it('should succeed on retrieving correct artist', () => {

            logic.getArtistById(id)
                .then((res) => expect(res.name).to.equal('Jamiroquai'))
            // .then(res => console.log(res))
        })
        // TODO other cases
    })

    describe('getPlaylistsTracks', () => {
        let id = '0AUisiV8Q5KcZ41nPOhrIr'
        it('should succeed on retrieving tracks of a playlist', () => {

            logic.getPlaylistsTracks(id)
                .then((res) => expect(res.items).not.to.be.undefined)
            // .then(res => console.log(res))
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
})
