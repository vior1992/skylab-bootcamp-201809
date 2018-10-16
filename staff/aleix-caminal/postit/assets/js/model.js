class Model {
    constructor() {
        this.id = Date.now()
    }
}

class PostsTable extends Model {
    constructor(title) {
        super()
        this.title = title
    }

    insert() {
        let posts = this.selectAll()
        sessionStorage.setItem('posts', JSON.stringify([...posts, this]))
        return this.selectAll()
    }

    delete(id) {
        let posts = this.selectAll()
        sessionStorage.setItem('posts', JSON.stringify(posts.filter(posts => posts.id !== id)))
        return this.selectAll()
    }

    selectAll() {
        return JSON.parse(sessionStorage.getItem('posts')) || []
    }
}

class BoardsTable extends Model {
    constructor(title) {
        super()
        this.title = title
    }

    insert() {
        let boards = this.selectAll()
        sessionStorage.setItem('boards', JSON.stringify([...boards, this]))
        return this.selectAll()
    }

    delete(id) {
        let boards = this.selectAll()
        sessionStorage.setItem('boards', JSON.stringify(boards.filter(boards => boards.id !== id)))
        return this.selectAll()
    }

    selectAll() {
        return JSON.parse(sessionStorage.getItem('boards')) || []
    }
}
