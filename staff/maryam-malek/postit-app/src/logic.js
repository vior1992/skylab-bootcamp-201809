//Bussines logic

import {storage, User} from './data'

const logic = {
    createPostit(postit) {
        const postits = JSON.parse(storage.getItem('postits'))
        
        postits.push(postit)
        
        this.persistPostits(postits)
    },

    deletePostit(id) {

        let postits = JSON.parse(storage.getItem('postits'))
        
        postits = postits.filter(postit => postit.id !== id)
        
        this.persistPostits(postits)
    },

    persistPostits(postits) {
        return storage.setItem('postits', JSON.stringify(postits))
    },

    listPostits() {
        return JSON.parse(storage.getItem('postits'))
    },

    changePostit(textEdit, id, show) {
        let postits = JSON.parse(storage.getItem('postits'))
        
        let index = postits.findIndex(postit => postit.id === id)
    
        postits[index].text = textEdit

        postits[index].show = show

        this.persistPostits(postits)
    },
   
    apearEdit(id, show) {
        let postits = JSON.parse(storage.getItem('postits'))
        
        let index = postits.findIndex(postit => postit.id === id)
    
        postits[index].show = show
        
        this.persistPostits(postits)
    },
    
    listUsers() {
        return JSON.parse(storage.getItem('users'))
    },

    persistUsers(users) {
        return storage.setItem('users', JSON.stringify(users))
    },

    registerUser(name, surname, username, password) {
        if (typeof name !== 'string') throw TypeError(`${name} is not a string`)
        if (typeof surname !== 'string') throw TypeError(`${surname} is not a string`)
        if (typeof username !== 'string') throw TypeError(`${username} is not a string`)
        if (typeof password !== 'string') throw TypeError(`${password} is not a string`)

        if (!name.trim()) throw Error('name is empty or blank')
        if (!surname.trim()) throw Error('surname is empty or blank')
        if (!username.trim()) throw Error('username is empty or blank')
        if (!password.trim()) throw Error('password is empty or blank')
        
        let users = this.listUsers()
        
        let user = new User (name, surname, username, password)

        users.push(user)

        this.persistUsers(users)
    },

    authenticate(username, password) {
        let users = this.listUsers()

        let index = users.findIndex(user => user.username === username && user.password === password)

        if (index === -1) throw Error ('wrong credentials')

        return users[index].id
    }
}

export default logic
