const logic = {
    token: 'BQDWBmxjaSXjHqam7ZBMkcTkd9eyrH9EPPGJ57iq9QsJja-TfUGDsoiXd_zcixtU-tdrEbtYJ6lXgA8NNWg_xYC0ESJtBNJYD9PFB4_D3KA1VuEYHgo2RrDDYqrLzG8g2llGFzfPEi5GEGa_iV3iiE7Fd5EoDxuQ3JAn2tiCxUWZbBP5B_Xwr5kTS8fib2DrZfPgaDpaVW1BnE0k',

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
