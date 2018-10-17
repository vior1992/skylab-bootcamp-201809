import { storage, Postit, User } from './data'

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

    registerUser(name, surname, username, password, id, onFail) {
        // if (typeof name !== 'string' || !name || !name.trim().length) onFail('invalid name');
        // else if (typeof surname !== 'string' || !surname || !surname.trim().length) onFail('invalid surname');
        // else if (typeof username !== 'string' || !username || !username.trim().length) onFail('invalid username');
        // else if (typeof password !== 'string' || !password || !password.trim().length) onFail('invalid password');
        // else if (typeof onFail !== 'function') throw TypeError(onFail + ' is not a function');
        // else {

        const user = new User(name, surname, username, password, id)
        const users = this.listUsers()
        users.push(user)
        this.persistUsers(users)
        },
    

    // login (username, password, onSuccess, onFail) {
    //     if (typeof username !== 'string' || !username || !username.trim().length) onFail('invalid username');
    //     else if (typeof password !== 'string' || !password || !password.trim().length) onFail('invalid password');
    //     else if (typeof onSuccess !== 'function') throw TypeError(onSuccess + ' is not a function');
    //     else if (typeof onFail !== 'function') throw TypeError(onFail + ' is not a function');
    //     else if (user) {
    //         if (user.username === username && user.password === password) {
    //             onSuccess({
    //                 name: user.name,
    //                 surname: user.surname,
    //                 username: user.username
    //             });
    //         }
    //         else onFail('wrong credentials');
    //     }
    // }
}

export default logic