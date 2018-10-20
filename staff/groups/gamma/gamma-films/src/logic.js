import data from "./data"

const { User } = data

const logic = {

    _user: "",


    registUser(name, surname, username, password) {

        const user = new User(name, surname, username, password)
        console.log(name, surname, username, password)
        this._user = user
        console.log(this._user)
        return fetch('https.//skylabcoders.herokuapp.com/api/user', {
            method: 'POST',
            headers: {
                'content-type': 'application/json; charset=utf-8'
            },
            body: JSON.stringify({ name, surname, username, password })
        })
        .then(res => res.json())
        .then(res => {
            if (res.error) throw Error(res.error)
        })
    },

    loginUser(username, password){

    }
}

export default logic