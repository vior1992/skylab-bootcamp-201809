export const storage = sessionStorage

if (!storage.getItem('postits'))
storage.setItem('postits', JSON.stringify([]))

export class Postit {
    constructor(text) {
        this.text = text
        this.id = Date.now()
    }
}


if (!storage.getItem('users'))
storage.setItem('users', JSON.stringify([]))

export class User {
    constructor(name, email, username, password) {
        this.name = name
        this.email = email
        this.username = username
        this.password = password
        this.id = Date.now()
    }
}
