
const spotifyLogic = {
    token: 'BQBvNMVEkphkXnSNyEKE9wMJWqYmxcowT6g5A7zF6A1Xus6_PBvMU2et2X8gbEP0U2xbfKUmkc_TcHOB1ykQ-vAFnUFY_XCklvMY_nQzNuzZiglkTWTqZ1nVuRRXjQi84exfiF28gxHL5Dtbi_xTJm4juN9GKCj9FdaOQEjw0_JpoFNiEgr0nOIMMTt7SJo1-gVbXXWlAXOyVJYK-6eXI66Uucu4gBYrRmlRchfUqMzTZ75EP0TUYNcbxpOv0T9Flz434tbz0Q4',

    getArtistById(id) {
        return fetch(`https://api.spotify.com/v1/artists/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
                'Authorization': 'Bearer ' + this.token
            },
            // body: JSON.stringify({ name, surname, username, password })
        })
            .then(res => res.json())
            .then(res => res)
            .catch(res => res)
    },

    getArtists(search) {
        
        return fetch(`https://api.spotify.com/v1/search?q=${search}&type=artist`, {
            method: 'GET',
            headers: {
               
                'Authorization': 'Bearer ' + this.token
            },
           
        })
            .then(res => res.json())
            .catch(err => {throw Error(err.message)})
    },

    getPlaylistsTracks(playlistId) {
        return fetch(`https://api.spotify.com/v1/playlists/${playlistId}/tracks`, {
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

    createPlaylist(name, description) {
        return fetch(`https://api.spotify.com/v1/me/playlists`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
                'Authorization': 'Bearer ' + this.token
            },
            body: JSON.stringify({name: name, description: description})
        })
            .then((res) => res.json())
            .then(res => res)
    }
}

export default spotifyLogic

//module.exports = logic
