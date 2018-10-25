
const spotifyLogic = {

    token: 'BQBKlWe4bTb3VLHtWwKkxL53ZXBn8flpUqgo1rfZ5UjmuxUHv1KZ3gkskBTZz8oN9aA1po7RG7w87aJWUmdvsjyqeSE6x4YxerHqVxJ46e62rSTaT0zaNRk1nY0Fjark2AtxBJlCOiTgmXzjcR8Fh0FqBKjc7jKGgM__mDEIyL7EyYvbO53IsYQA5kaBlDOWIngQ1pys3i7JCU54',

    getArtistById(id) {

        if(!(typeof id === 'string')) throw Error ('id is not a a string')
        if(!(id.length)) throw Error ('id is empty or blank')

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

    getArtists(query) {

          if(!(query.trim().length)) throw Error ('Query cannot be empty')
        
        return fetch(`https://api.spotify.com/v1/search?q=${query}&type=artist`, {
            method: 'GET',
            headers: {
               
                'Authorization': 'Bearer ' + this.token
            },
           
        })
            .then(res => res.json())
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
                const track = {}
                track.id = res.id
                track.name = res.name
                track.preview_url = res.preview_url ? res.preview_url : require("../assets/audio/default.mp3")
                track.image = res.album.images ? res.album.images[0].url : 'https://i.scdn.co/image/557a6058e3de72bf37ffcd2c12dd5932276df344'
                return track
            })
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

export default spotifyLogic

// module.exports = spotifyLogic
