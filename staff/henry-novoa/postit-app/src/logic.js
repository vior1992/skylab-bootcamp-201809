// Business (logic)?
import data from './data'

const { storage, Postit, User } = data

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

    deletePostit(id) {
        let postits = this.listPostits()

        postits = postits.filter(postit => postit.id !== id)

        this.persistPostits(postits)
    },

    editPost(id) {

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
        const user = new User(name, surname, username, password)

        const users = this.listUsers()

        users.push(user)

        this.persistUsers(users)
    },

    loginUser(username,password){
        console.log("he llegado",username,password)
        
        const pass = password
        const users = this.listUsers()
        debugger
        const user = users.filter(person => person.username === username )
        if(user[0].password === pass) return true
        else return false
        
        
    }
}


export default logic