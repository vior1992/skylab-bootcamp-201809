
const spotifyLogic = {


    token: 'BQAYQRauevt4JhKL-lYyC7Pxa9pkL4dGxMfDyFDzmy2e3TY_Qcl_ElrLZGsyUsL6i5cwY-5pVPVPrEUMXy06V0X7RrkrnV6lcoo_58xwl43v3fEs-Wc11mf-2YsYsSisGOqEF4CuB3aqGqcXKb26VtCv06OZeDEftdiMiUBVEkAy41vhqKkcAWNVvj37D-tLkG1uJ0x9v9TLqInHbGX6u6wopaajKMTxnO6QlGc0lsFUOPzLPT1aWEZsm9T1eegm7fDr3cMmimQ',


    getArtistById(id) {

        if(!(typeof id === 'string')) throw TypeError (`${id} is not a a string`)
        if(!(id.length)) throw Error (`${id} is empty or blank`)

        return fetch(`https://api.spotify.com/v1/artists/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
                'Authorization': 'Bearer ' + this.token
            },
            // body: JSON.stringify({ name, surname, username, password })
        })
            .then(res => res.json())
            .then((res) => {
                if(res.error) throw Error (res.error.message)
                return res
            })
            
    },

    getArtists(query) {

        if(!(typeof query === 'string')) throw TypeError (`${query} is not a a string`)
        if(!(query.trim().length)) throw Error ('query cannot be empty')
        
        return fetch(`https://api.spotify.com/v1/search?q=${query}&type=artist`, {
            method: 'GET',
            headers: {
               
                'Authorization': 'Bearer ' + this.token
            },
           
        })
            .then(res => res.json())
            .then(res => {

                if (res.error) throw Error(res.error.message)
                else    
                    return res
            })
            .catch(err => {throw Error(err.message)})
    },

    getTrack(id) {
        return fetch(`https://api.spotify.com/v1/tracks/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
                'Authorization': 'Bearer ' + this.token
            }
        })
            .then((res) => res.json())
            .then((res) => {
                
                if(res.error) throw Error (res.error.message)
                
                const track = {}
                track.id = res.id
                track.name = res.name
                track.preview_url = res.preview_url ? res.preview_url : require("../assets/audio/default.mp3")
                track.image = res.album.images ? res.album.images[0].url : 'https://i.scdn.co/image/557a6058e3de72bf37ffcd2c12dd5932276df344'
                return track
            })
    },

    getPlaylistsTracks(playlistId) {

        if(!(typeof playlistId === 'string')) throw TypeError (`${playlistId} is not a a string`)
        if(!(playlistId.trim().length)) throw Error ('query cannot be empty')
        
        return fetch(`https://api.spotify.com/v1/playlists/${playlistId}/tracks`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
                'Authorization': 'Bearer ' + this.token
            },
            // body: JSON.stringify({ name, surname, username, password })
        })
            .then(res => res.json()).then(res => {if (res.error) throw Error (res.error.message); else return res})
    },

    getAlbumsByArtistId(artistId) {
        return fetch(`https://api.spotify.com/v1/artists/${artistId}/albums`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
                'Authorization': 'Bearer ' + this.token
            },
            // body: JSON.stringify({ name, surname, username, password })
        })
            .then(res => res.json())
            .then(res => {
                if(res.error) throw Error (res.error.message)
                return res
            })
    },

    getSongsbyAlbumId(id) {
        return fetch(`https://api.spotify.com/v1/albums/${id}/tracks`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
                'Authorization': 'Bearer ' + this.token
            },
        })
            .then((res) => res.json())
            .then(res => {
                if(res.error) throw Error (res.error.message)
                //res.preview_url ? res.preview_url : require("../assets/audio/default.mp3")
                return res

            })
    },

    createPlaylist(name) {
        return fetch(`https://api.spotify.com/v1/me/playlists`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
                'Authorization': 'Bearer ' + this.token
            },
            body: JSON.stringify({name: name})
        })
            .then((res) => res.json())
            .then(res => {

                if (res.error) throw(res.error) 
                else
                    return res

            })
    },

    //id, name, preview_url, picture

    getTrack(id) {
        return fetch(`https://api.spotify.com/v1/tracks/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
                'Authorization': 'Bearer ' + this.token
            }
        })
            .then((res) => res.json())
            .then((res) => {
                if(res.error) throw Error (res.error.message)
                
                const track = {}
                track.id = res.id
                track.name = res.name
                track.preview_url = res.preview_url
                track.image = res.album.images ? res.album.images[0].url : 'https://i.scdn.co/image/557a6058e3de72bf37ffcd2c12dd5932276df344'
                return track
            })
    }
}

 export default spotifyLogic

//module.exports = spotifyLogic
