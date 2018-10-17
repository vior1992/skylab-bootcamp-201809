import { UsersTable, BoardsTable, PostsTable } from './model'

const LOGIC = {
    users: new UsersTable(),
    boards: new BoardsTable(),
    posts: new PostsTable(),

    addBoard(query) {
        this.boards.newEntity(query).insert();
        return this.all('boards')
    },

    deleteBoard(id) {
        const board = this.boards.get(id)
        board.delete()
        return this.all('boards')
    },

    updateBoard(id, query) {
        const board = this.boards.get(id)
        board.update(query)
        return this.all('boards')
    },

    addPost(query) {
        const post = this.posts.newEntity(query)
        post.insert();
        return this.find('posts', {
            board_id: post.board_id
        })
    },

    deletePost(id) {
        const post = this.posts.get(id)
        post.delete()
        return this.find('posts', {
            board_id: post.board_id
        })
    },

    find(model, query) {
        return this[model].find(query)
    },

    all(model) {
        return this[model].all()
    },

    register(name, username, password, confirm_password) {
        return this.users.newEntity({
            name: name,
            username: username,
            password: password
        }).insert();
    },

    login(username, password) {
        const user_id = this.find('users', {
            username: username,
            password: password
        })[0].id
        const auth = this.users.get(user_id)
        sessionStorage.setItem('auth', JSON.stringify(auth))
        return auth
    },

    getAuth() {
        return JSON.parse(sessionStorage.getItem('auth')) || {}
    }
}

export default LOGIC
