
const spotifyLogic = {
    token: 'BQDxi5vQKyXsMe8UtGNtJOrr1Z93kXodYrnqS0hsIkc3vw2q_mlQyB4RP4oVn678DdSBRq-_rUYyOViN4AizFPu_mz5W6XgWoakL7BNqQWE5Lx0Yk-i9G3upXKQL_MqpdfcVfT4itj25gsHOAEPnWbkuF_yNwNYeUvY_U6X6n5PG3EO-IPapi0kTqh2aVCHlikql39K3YQ9daYs5z4uCM4aPDzJihgm9RfA1VmZWkQspasxlqQ9kxh_O8gEnn-xxgoNG7RhIlL4',

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
