import data from './data'

const { storage, Postit, User } = data

const logic = {
    createPostit(text, userid   ) {
        const postit = new Postit(text, userid)

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

    deletePostit(id) {
        let postits = this.listPostits()

        postits = postits.filter(postit => postit.id !== id)

        this.persistPostits(postits)
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
         if (typeof name !== 'string' || !name || !name.trim().length) throw TypeError (`${name} invalid name`)
         else if (typeof surname !== 'string' || !surname || !surname.trim().length) throw TypeError (`${surname} invalid surname`)
         else if (typeof username !== 'string' || !username || !username.trim().length) throw TypeError (`${username} invalid username`)
         else if (typeof password !== 'string' || !password || !password.trim().length) throw TypeError (`${password} invalid password`)
         else {

        const user = new User(name, surname, username, password)
        const users = this.listUsers()
        users.push(user)
        this.persistUsers(users)
        return true
        }
    },

    loginUser(username, password) {
        if (typeof username !== 'string' || !username || !username.trim().length) throw TypeError (`${username} invalid username`)
         else if (typeof password !== 'string' || !password || !password.trim().length) throw TypeError (`${password} invalid password`)
         else {

        const users = this.listUsers()
        const user = users.find(user => user.username === username && user.password === password)
        if (!user) throw Error ("wrong credentials")
        return user.id
        }
    }

}
export default logic