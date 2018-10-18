class Model {
    newEntity(values) {
        this.id = Date.now()
        const keys = Object.keys(values)
        keys.forEach(key => this[key] = values[key])
        return this
    }

    find(query) {
        let elements = this.all()
        const keys = Object.keys(query)
        keys.forEach(key => elements = elements.filter(element => element[key] === query[key]))
        return elements
    }

    get(id) {
        this.all().find(element => {
            if (element.id === id) {
                const keys = Object.keys(element)
                keys.forEach(key => this[key] = element[key])
                return
            }
        })
        return this
    }
}

export class UsersTable extends Model {
    insert() {
        sessionStorage.setItem('users', JSON.stringify([...this.all(), this]))
        return this
    }

    delete() {
        sessionStorage.setItem('users', JSON.stringify(this.all().filter(user => user.id !== this.id)))
    }

    update(query) {
        let users = this.all()
        const keys = Object.keys(query)
        users.find(user => {
            if (user.id === this.id) {
                keys.forEach(key => user[key] = query[key])
                return
            }
        })
        sessionStorage.setItem('users', JSON.stringify(users))
    }

    all() {
        return JSON.parse(sessionStorage.getItem('users')) || []
    }
}

export class BoardsTable extends Model {
    insert() {
        sessionStorage.setItem('boards', JSON.stringify([...this.all(), this]))
        return this
    }

    delete() {
        sessionStorage.setItem('boards', JSON.stringify(this.all().filter(board => board.id !== this.id)))
    }

    update(query) {
        let boards = this.all()
        const keys = Object.keys(query)
        boards.find(board => {
            if (board.id === this.id) {
                keys.forEach(key => board[key] = query[key])
                return
            }
        })
        sessionStorage.setItem('boards', JSON.stringify(boards))
    }

    all() {
        return JSON.parse(sessionStorage.getItem('boards')) || []
    }
}

export class PostsTable extends Model {
    insert() {
        sessionStorage.setItem('posts', JSON.stringify([...this.all(), this]))
        return this
    }

    delete() {
        sessionStorage.setItem('posts', JSON.stringify(this.all().filter(post => post.id !== this.id)))
    }

    all() {
        return JSON.parse(sessionStorage.getItem('posts')) || []
    }
}
