import validateLogic from './utilities/validate'

const logic = {
    _userId: sessionStorage.getItem('userId') || null,
    _token: sessionStorage.getItem('token') || null,

    url: 'NO-URL',

    registerUser(name, surname, city, username, password) {
        validateLogic([
            { key: 'name', value: name, type: String },
            { key: 'surname', value: surname, type: String },
            { key: 'city', value: city, type: String },
            { key: 'username', value: username, type: String },
            { key: 'password', value: password, type: String }
        ])
        
        return fetch(`${this.url}/users`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            },
            body: JSON.stringify({ name, surname, city, username, password })
        })
            .then(res => res.json())
            .then(res => {
                if (res.error) throw Error(res.error)
            })
    },

    authenticateUser(username, password) {
        validateLogic([
            { key: 'username', value: username, type: String },
            { key: 'password', value: password, type: String }
        ])

        return fetch(`${this.url}/authenticate`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            },
            body: JSON.stringify({ username, password })
        })
            .then(res => res.json())
            .then(res => {
                if (res.error) throw Error(res.error)

                const { id, token } = res.data

                this._userId = id
                this._token = token

                sessionStorage.setItem('userId', id)
                sessionStorage.setItem('token', token)
            })
    },

    retrieveLoggedUser() {
        return fetch(`${this.url}/users/${this._userId}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${this._token}` 
            }
        })
        .then(res => res.json())
        .then(res => {
            if (res.error) throw Error(res.error)
            
            return res.data
        })
    },

    searchUserById(userId) {
        validateLogic([{ key: 'userId', value: userId, type: String }])

        return fetch(`${this.url}/users/partyup/${userId}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${this._token}`  
            },
        })  
            .then(res => res.json())
            .then(res => {
                if (res.error) throw Error(res.error)
                
                return res
            })
    },

    get loggedIn() {
        return !!this._userId
    },

    logout() {
        this._userId = null
        this._token = null

        sessionStorage.removeItem('userId')
        sessionStorage.removeItem('token')
    },

    createPartyup(title, description, date, city, place, tags, userId) {
        validateLogic([
            { key: 'title', value: title, type: String },
            { key: 'description', value: description, type: String },
            { key: 'date', value: date, type: String },
            { key: 'city', value: city, type: String },
            { key: 'place', value: place, type: String },
            { key: 'tags', value: tags, type: String }
        ])

        return fetch(`${this.url}/users/${this._userId}/partyups`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
                'Authorization': `Bearer ${this._token}` 
            },
            body: JSON.stringify({ title, description, date, city, place, tags, userId })
        })
            .then(res => res.json())
            .then(res => {
                if (res.error) throw Error(res.error)
            })
    },

    searchPartyups(city, tags) {
        validateLogic([
            { key: 'city', value: city, type: String, optional: true},
            { key: 'tags', value: tags, type: String, optional: true}
        ])

        let _url = `${this.url}/users/${this._userId}/partyups/search?`

        if (city)
            _url += `city=${city}`

        if (tags)
            _url += `${city? '&' : ''}tags=${tags}`

        return fetch(`${_url}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${this._token}`  
            },
        })
            .then(res => res.json())
            .then(res => {
                if (res.error) throw Error(res.error)
                
                return res.partyups
            })
    },

    listPartyups() {
        return fetch(`${this.url}/partyups`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${this._token}` 
            },
        })
            .then(res => res.json())
            .then(res => {
                if (res.error) throw Error(res.error)
                
                return res.partyups
            })
    },

    searchPartyupsById(partyupId) {
        validateLogic([{ key: 'partyupId', value: partyupId, type: String }])

        return fetch(`${this.url}/partyups/${partyupId}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${this._token}`  
            },
        })  
            .then(res => res.json())
            .then(res => {
                if (res.error) throw Error(res.error)
                
                return res
            })
    },

    assistToPartyup(partyupId) {
        return fetch(`${this.url}/users/${this._userId}/partyups/${partyupId}/assistence`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${this._token}` 
            },
           
        })
            .then(res => res.json())
            .then(res => {
                if (res.error) throw Error(res.error)
                
                return res
            })
    },

    notAssistToPartyup(partyupId) {
        return fetch(`${this.url}/users/${this._userId}/partyups/${partyupId}/notAssistence`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${this._token}` 
            },
        })
            .then(res => res.json())
            .then(res => {
                if (res.error) throw Error(res.error)

                return res
            })
    },
    
    itemListPartyupsCreatedBy() {
        return fetch(`${this.url}/users/${this._userId}/partyups`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${this._token}` 
            },
        })
            .then(res => res.json())
            .then(res => {
                if (res.error) throw Error(res.error)
                
                return res.partyups
            })
    },

    itemListPartyupsIAssist() {
        return fetch(`${this.url}/users/${this._userId}/partyups/assistence`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${this._token}` 
            },
        })
            .then(res => res.json())
            .then(res => {
                if (res.error) throw Error(res.error)
                
                return res.partyups
            })
    }
}
//TEST
//module.exports = logic

//RUN
export default logic
