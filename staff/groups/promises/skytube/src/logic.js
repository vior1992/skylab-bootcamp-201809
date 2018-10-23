// import Youtube from './youtube'

const logic = {
    _userId: sessionStorage.getItem('userId') || null,
    _token: sessionStorage.getItem('token') || null,
    api_key: 'AIzaSyAieX4rBBAB612ai2A1HJYKK9416cd8f2U', 
    root_url:"https://www.googleapis.com/youtube/v3/",

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


        return fetch('https://skylabcoders.herokuapp.com/api/user', {

            method: 'POST', 
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            },
            body: JSON.stringify({ name, surname, username, email, password})

        })
        .then(res => res.json())
        .then(res => {
            if (res.error) throw Error(res.error)
        })
        .then( () => {
            return this.LogInUser(username, password)
        })

    },

    LogInUser(username, password) {
        if(typeof username !=='string') throw TypeError (`${username} is not a string`)
        if (!username.trim()) throw Error ('username is blank or empty')

        if(typeof password !=='string') throw TypeError (`${password} is not a string`)
        if (!password.trim()) throw Error ('password is blank or empty')

        

        return fetch ('https://skylabcoders.herokuapp.com/api/auth', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            },
            body: JSON.stringify({ username, password })
        })
            .then(res => res.json())
            .then(res => {
                if (res.error) throw Error(res.error)

                const {id, token} = res.data
                
                this._userId = id
                this._token = token
                
                sessionStorage.setItem('userId', id)
                sessionStorage.setItem('token', token)
            })

    },

    userLogOut() {
        this._token = null
        this._userId = null

        sessionStorage.removeItem('token')
        sessionStorage.removeItem('userId')
    },

    loggedIn() {
        return !!this._userId
    },
    
    search(query) {
        return fetch(this.root_url + 'search?part=snippet&key='+this.api_key+'&q='+query+'&videoCategoryId=10&type=video', {
            method: 'GET'
        })
        .then(res => res.json())
        .then (res => res.items)
       
    },

    retrieveSong(video_id) {
        return fetch(this.root_url + 'videos?part=player&key='+this.api_key+'&id='+video_id, {
            method: 'GET'
        })
        .then(res => res.json())
        .then(res => res)
    }
}


export default logic
//module.exports = logic