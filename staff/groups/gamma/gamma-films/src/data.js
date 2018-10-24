class User {
    constructor(name, surname, username, password){
        this.name = name
        this.surname = surname
        this.username = username
        this.password = password
        this.FavID = []
        this.id = Date.now()
    }
}

class MovieInfo {
    constructor(id){
        this.id = id
        this.key = Date.now()
    } 
}

// export default {User, MovieInfo}
module.exports = {User}