class Model {
    newEntity(values) {
        this.id = Date.now()
        const keys = Object.keys(values)
        keys.forEach(key => this[key] = values[key])
        return this
    }
}

class PostsTable extends Model {
    insert() {
        sessionStorage.setItem('posts', JSON.stringify([...this.all(), this]))
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
        this.all().find(board => {
            if (board.id === id) {
                this.id = board.id
                this.title = board.title
                return
            }
        });
        return this
    }

    all() {
        return JSON.parse(sessionStorage.getItem('posts')) || []
    }
}

class BoardsTable extends Model {
    insert() {
        sessionStorage.setItem('boards', JSON.stringify([...this.all(), this]))
    }

    delete() {
        sessionStorage.setItem('boards', JSON.stringify(this.all().filter(board => board.id !== this.id)))
    }

    update(id, title) {
        let boards = this.all()
        boards.forEach(function(board) {
            if (board.id === id) board.title = title
        });
        sessionStorage.setItem('boards', JSON.stringify(boards))
    }

    get(id) {
        this.all().find(board => {
            if (board.id === id) {
                this.id = board.id
                this.title = board.title
                return
            }
        });
        return this
    }

    all() {
        return JSON.parse(sessionStorage.getItem('boards')) || []
    }
}
