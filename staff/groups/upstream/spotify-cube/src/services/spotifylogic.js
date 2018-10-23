
const spotifyLogic = {
    token: 'BQCYw93iFR12L0c8X2A7PnWscsTUEFc4bTfIwV5br-Lio02NQnl1O2nPVzDjrd-gT_6Lh7ef8i2igeZe_9jbwH6b48W7_ul6O3lchLXAYfQJIv5R-QXovPHMGNXKp4XqQpy627FLwfz6RmffYW8c-XAq2qRnHzQetXLD775KFZr-pwl0BH_TOrJDCFKOSH4jTM4iUfAt18bGP3RwN45JKc93OnMQJ02HLd4N0S8jLOSNoXZd4UEgI_E8HAxculW3MjCFwtUTeQE',

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
            .then(res => res)
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
