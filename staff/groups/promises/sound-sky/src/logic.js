const logic = {
    _userId: sessionStorage.getItem('userId') || null,
    _token: sessionStorage.getItem('token') || null,


    registerUser(name, surname, username, email, password) {
        
        //TODO validations

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
        })

    },

    LogInUser(username, password) {

        //TODO validations

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
    }
    
}


export default logic