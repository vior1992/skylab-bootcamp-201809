
const spotifyLogic = {

    token: 'BQCNb5afPx0maW4h24sJbaD9_9rmu-PzvChuet2zfElaI-dWMIwZfX_6uKwM1viHiLTXAOrWx86P-FgL-pLHWnrKN9DuZgkckhidHl05zo30b7sDbLuRvOutC1DCZG_ei7yRHBc37vALrYJ8mTSZtbUd3U9q-imcsrMjy-CIKSFLdaYLEWzI-OnLhLpe1Gb26rmpbh-5Cb0Bi-cK',

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
                if(res.error) throw Error (res.error)
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
            .catch(err => {throw Error(err.message)})
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
            .then(res => res.json())
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
            .then(res => res)
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
            .then(res => res)
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
            .then(res => res)
    }
}

// export default spotifyLogic

module.exports = spotifyLogic
