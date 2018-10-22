const logic = {
    token: 'BQAGaZckUEjwMkGfl4CofsRAhUetdz3YzoINmgPfv2LhFaKkit8w_EoH-8jMyY8Ku_TyaBUMa2ms6v7yoEgFEy1N8kJp_x00IFzhyZvZd5-6H-fTNk9d3QXWLuQvVtxXEKfPK0sK6ggdrVAk4gADzzwHL56v-XyLkg45nmNOBbl3bqTYphnWZzjEnJlWl4Etst-n2jR6tpaY93K6',

    getArtistById(id) {
        return fetch(`	https://api.spotify.com/v1/artists/${id}`, {
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

module.exports = logic
