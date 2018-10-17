// Data - Model (domain)

export const storage = sessionStorage


if (!storage.getItem('postits'))
    storage.setItem('postits', JSON.stringify([]))

if (!storage.getItem('users'))
storage.setItem('users', JSON.stringify([]))

export class Postit {
    constructor(text) {
        this.text = text
        this.id = Date.now()
    }
}

export class User {
    constructor(name, surname, username, password) {
        this.name = name
        this.surname = surname
        this.username = username
        this.password = password
        this.id = Date.now()
    }
}

