class User {
    constructor(name, surname, username, password){
        this.name = name
        this.surname = surname
        this.username = username
        this.password = password
        this.Fav = [
            {id:undefined,
            urlImage:undefined}
        ]
        this.id = Date.now()
    }
}

class MovieInfo {
    constructor(id){
        this.id = id
        this.key = Date.now()
    } 
}

export default {User, MovieInfo}
// module.exports = {User}