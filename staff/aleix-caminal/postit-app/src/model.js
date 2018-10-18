class Model {
    newEntity(values) {
        this.id = Date.now()
        for (var key in values) this[key] = values[key]
        return this
    }

    find(query) {
        let elements = this.all()
        for (var key in query) elements = elements.filter(element => element[key] === query[key])
        return elements
    }

    first(elements) {
        for (var key in elements[0]) this[key] = elements[0][key]
        return this
    }

    get(id) {
        return this.first(this.find({id:id}))
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
        users.find(user => {
            if (user.id === this.id) {
                for (var key in query) user[key] = query[key]
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
        boards.find(board => {
            if (board.id === this.id) {
                for (var key in query) board[key] = query[key]
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
