const logic = {
    token: 'BQCwmvX9VJHLcMINhPXTJwXpV_ziIKt71jUQLRNEjHO5MrSkoR58cAEHcVnOywKU8Of4t3xbWtCU6NcgvGQblDvM3F6rt27i-6besRT16AZ7KEQ8HxswihHNXnkNE_9MwnQnvP22S2d-2HzJnso3WZ8Fk6Y351gK4iZJOLw5e_PhEAi-p3p8n4YAFitYTJ8jvs8vAM9IEXPBj6aB',

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
            .catch(res => res)
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
