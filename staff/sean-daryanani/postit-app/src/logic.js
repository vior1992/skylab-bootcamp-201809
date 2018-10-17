import {storage, Postit, User} from './data'

const logic = {
    createPostit(text) {
        const postit = new Postit(text)

        const postits = JSON.parse(storage.getItem('postits'))

        postits.push(postit)

        storage.setItem('postits', JSON.stringify(postits))
        this.persistPostits(postits)
    },

    listPostits() {
        return JSON.parse(storage.getItem('postits'))
    },

    persistPostits(postits) {
        storage.setItem('postits', JSON.stringify(postits))
    },

    deletePostit(id) {
        let postits = JSON.parse(storage.getItem('postits'))

        postits = postits.filter(postit => postit.id !== id)

        this.persistPostits(postits)
      
    },

    updatePost(id, text) {
        const newPostit = new Postit(text)
        const postits = JSON.parse(storage.getItem('postits'))
        const index = postits.findIndex( el => el.id===id)
        postits[index] = newPostit
        this.persistPostits(postits)
        
    },

    completePost(id) {
        const postits = JSON.parse(storage.getItem('postits'))
        const index = postits.findIndex( el => el.id===id)
        postits[index].complete=true
        this.persistPostits(postits)
    },

    createUser(name, email, username, password) {
        const user = new User(name, email, username, password)
        const users = JSON.parse(storage.getItem('users'))
        users.push(user)
        storage.setItem('users', JSON.stringify(users))
        this.listUsers(users)
        
    },

    persistUsers(users) {
        storage.setItem('users', JSON.stringify(users))

    },

    listUsers() {
        return JSON.parse(storage.getItem('users'))
    }
}

export default logic