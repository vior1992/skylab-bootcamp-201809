import data from './data'

const {storage, Postit, User} = data

const logic = {
    
    createPostit(text) {
        const postit = new Postit(text)

        const postits = this.listPostits()

        postits.push(postit)

        this.persistPostits(postits)
    },

    listPostits() {
        return JSON.parse(storage.getItem('postits'))
    },

    persistPostits(postits) {
        storage.setItem('postits', JSON.stringify(postits))
    },

    deletePostit(id){
        let postits = this.listPostits()

        postits = postits.filter(postit => postit.id !== id)

        storage.setItem('postits', JSON.stringify(postits))
    },

    updatePostit(id, text) {
        let postits = this.listPostits()

        const postit = postits.find(postit => postit.id === id)

        postit.text = text

        this.persistPostits(postits)
    },


    listUsers() {
        return JSON.parse(storage.getItem('users'))
    },

    persistUsers(users) {
        storage.setItem('users', JSON.stringify(users))
    },

    registerUser(name, surname, username, password) {
        const user = new User(name, surname, username, password)

        const users = this.listUsers()

        users.push(user)

        this.persistUsers(users)
    },

    checkUserAndPassword(username, password){
        let users = this.listUsers()
        const user = users.find(user => user.username === username)
        debugger
        if(user) {
            if(user.password === password)
            return true
        }
        else {return false}

    },

    
}
export default logic