import { Favourites, WatchLater, Playlists, History } from './model'
import Skylab from './skylab'
import YouTube from './youtube'

const logic = {
    skylab: new Skylab(),
    youtube: new YouTube(),
    favourites: new Favourites(),
    watch_later: new WatchLater(),
    playlists: new Playlists(),
    history: new History(),
    auth: JSON.parse(sessionStorage.getItem('auth')) || {},
    video_search: JSON.parse(sessionStorage.getItem('video_search')) || [],
    current_video: JSON.parse(sessionStorage.getItem('current_video')) || [],

    registerUser(name, surname, username, email, password) {
        if(typeof name !=='string') throw TypeError (`${name} is not a string`)
        if (!name.trim()) throw Error ('name is blank or empty')

        if(typeof surname !=='string') throw TypeError (`${surname} is not a string`)
        if (!surname.trim()) throw Error ('surname is blank or empty')

        if(typeof username !=='string') throw TypeError (`${username} is not a string`)
        if (!username.trim()) throw Error ('username is blank or empty')

        if(typeof email !=='string') throw TypeError (`${email} is not a string`)
        if (!email.trim()) throw Error ('email is blank or empty')

        if(typeof password !=='string') throw TypeError (`${password} is not a string`)
        if (!password.trim()) throw Error ('password is blank or empty')

        return this.skylab.register({
            name: name,
            surname: surname,
            username: username,
            email: email,
            password: password
        })
    },

    loginUser(username, password) {
        if(typeof username !=='string') throw TypeError (`${username} is not a string`)
        if (!username.trim()) throw Error ('username is blank or empty')

        if(typeof password !=='string') throw TypeError (`${password} is not a string`)
        if (!password.trim()) throw Error ('password is blank or empty')

        return this.skylab.login({
            username: username,
            password: password
        })
            .then(data => {
                this.auth.id = data.id
                this.auth.token = data.token
                sessionStorage.setItem('auth', JSON.stringify(this.auth))
                return this.skylab.info(this.auth.id, this.auth.token)
                    .then(info => {
                        let auth_info = {
                            username: info.username,
                            name: info.name,
                            surname: info.surname,
                            email: info.email
                        }

                        sessionStorage.setItem('auth_info', JSON.stringify(auth_info))
                        auth_info.favourites = info.favourites || []
                        sessionStorage.setItem('favourites', JSON.stringify(auth_info.favourites))
                        auth_info.watch_later = info.watch_later || []
                        sessionStorage.setItem('watch_later', JSON.stringify(auth_info.watch_later))
                        auth_info.playlists = info.playlists || []
                        sessionStorage.setItem('playlists', JSON.stringify(auth_info.playlists))
                        auth_info.history = info.history || []
                        sessionStorage.setItem('history', JSON.stringify(auth_info.history))
                        return auth_info
                    })
                    .catch(error => {
                        throw Error(error)
                    })
            })
    },

    logoutUser() {
        sessionStorage.removeItem('auth')
        sessionStorage.removeItem('auth_info')
        sessionStorage.removeItem('favourites')
        sessionStorage.removeItem('watch_later')
        sessionStorage.removeItem('playlists')
        sessionStorage.removeItem('history')
        this.auth = {}
    },

    isAuthenticated() {
        return this.auth && Object.keys(this.auth).length > 0
    },

    search(query) {
        return this.youtube.search(query)
            .then(result => {
                sessionStorage.setItem('video_search', JSON.stringify(result))
                return result
            })
    },

    retrieveSong(video_id) {
        if (typeof video_id !== 'string') throw TypeError(`${video_id} is not a string`)
        if (!video_id.trim()) throw Error ('video_id is blank or empty')
        if (!video_id.length === 11) throw Error ('video_id length is not valid')

        return this.youtube.getVideo(video_id)
            .then(result => {
                sessionStorage.setItem('current_video', JSON.stringify(result[0]))
                return result[0]
            })
    },

    addFavourite(video_id) {
        this.favourites.newEntity({
            video_id: video_id
        }).save()
        this.skylab.update({favourites: this.favourites.all()}, this.auth.id, this.auth.token)
    },

    getMostPopular(){
       return this.youtube.mostPopular()
    },
  
    addWatchLater(video_id) {
        this.watch_later.newEntity({
            video_id: video_id
        }).save()
        this.skylab.update({watch_later: this.watch_later.all()}, this.auth.id, this.auth.token)
    },

    addPlaylist(title) {
        this.playlists.newEntity({
            title: title
        }).save()
        this.skylab.update({playlists: this.playlists.all()}, this.auth.id, this.auth.token)
    },

    getFavourites() {
        return this.favourites.all()
    },

    getWatchLater() {
        return this.watch_later.all()
    },

    authInfo() {
        let info = JSON.parse(sessionStorage.getItem('auth_info')) || {}
        if (info && Object.keys(info).length > 0) {
            info.favourites = JSON.parse(sessionStorage.getItem('favourites'))
            info.watch_later = JSON.parse(sessionStorage.getItem('watch_later'))
            info.playlists = JSON.parse(sessionStorage.getItem('playlists'))
            info.history = JSON.parse(sessionStorage.getItem('history'))
        }

        return info
    }
}

// export default logic

module.exports = logic
