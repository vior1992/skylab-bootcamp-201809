class Model {
    newEntity(values) {
        this.id = Date.now()
        const keys = Object.keys(values)
        keys.forEach(key => this[key] = values[key])
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

    find(query) {
        let users = this.all()
        const keys = Object.keys(query)
        keys.forEach(key => users = users.filter(user => user[key] === query[key]))
        return users
    }

    get(id) {
        this.all().find(user => {
            if (user.id === id) {
                const keys = Object.keys(user)
                keys.forEach(key => this[key] = user[key])
                return
            }
        })
        return this
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

    get(id) {
        this.all().find(board => {
            if (board.id === id) {
                const keys = Object.keys(board)
                keys.forEach(key => this[key] = board[key])
                return
            }
        })
        return this
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

    find(query) {
        let posts = this.all()
        const keys = Object.keys(query)
        keys.forEach(key => posts = posts.filter(post => post[key] === query[key]))
        return posts
    }

    get(id) {
        this.all().find(post => {
            if (post.id === id) {
                const keys = Object.keys(post)
                keys.forEach(key => this[key] = post[key])
                return
            }
        });
        return this
    }

    all() {
        return JSON.parse(sessionStorage.getItem('posts')) || []
    }
}
