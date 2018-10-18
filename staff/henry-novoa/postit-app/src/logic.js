// Business (logic)?
import data from './data'

const { storage, Postit, User } = data

const logic = {
    

    createPostit(text,userId) {
        const postit = new Postit(text, userId)

        const postits = this.listPostits()
        
        postits.push(postit)

        this.persistPostits(postits)
    },

    listPostits() {
        return JSON.parse(storage.getItem('postits'))
    },
    listPostitsByUser(userId){
        if (typeof userId !== 'number') throw new TypeError(`${userId} is not a number`)

        const postits = this.listPostits().filter(postit => postit.userId === userId)

        return postits
    },

    persistPostits(postits) {
        storage.setItem('postits', JSON.stringify(postits))
    },

    deletePostit(id) {
        let postits = this.listPostits()

        postits = postits.filter(postit => postit.id !== id)

        this.persistPostits(postits)
    },

    editPost(id) {
        if (typeof id !== 'number') throw new TypeError(`${id} is not a number`)
        let element = document.getElementById(id)
        if (element.disabled) {
            element.disabled = false
        }
        else {
            const posits = this.listPostits()
            let input = element.value
            let index = posits.findIndex(element => element.id === id)
            posits[index].text = input
            this.persistPostits(posits)

            element.disabled = true
        }
    },

    listUsers() {
        return JSON.parse(storage.getItem('users'))
    },

    persistUsers(users) {
        storage.setItem('users', JSON.stringify(users))
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

        const users = this.listUsers()
        
        let user
        
        user = users.find(user => user.username === username)

        if (user) throw Error('username already exists')
        
        user = new User(name, surname, username, password)

        
        users.push(user)

        this.persistUsers(users)
    },

    loginUser(username,password){    
        if (typeof username !== 'string') throw TypeError(`${username} is not a string`)
        if (typeof password !== 'string') throw TypeError(`${password} is not a string`)

        if (!username.trim()) throw Error('username is empty or blank')
        if (!password.trim()) throw Error('password is empty or blank')
        
        const users = this.listUsers()

        const user = users.find(user => user.username === username && user.password === password)

        if (!user) throw Error('wrong credentials')

        return user.id
            
    }
}


export default logic