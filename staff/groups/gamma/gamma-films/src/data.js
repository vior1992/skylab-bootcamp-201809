class User {
    constructor(name, surname, username, password){
        this.name = name
        this.surname = surname
        this.username = username
        this.password = password
        this.id = Date.now()
    }
}

export default {User}