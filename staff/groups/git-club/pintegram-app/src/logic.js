import data from './data'
// const data = require('./data')

const { Post, Comment } = data

const logic = {
    _app: 'pintegram',
    _userId: sessionStorage.getItem('userId') || null,
    _token: sessionStorage.getItem('token') || null,
    _posts: [],
    _postsUser: [],
    _postsAllUsers: [],
    _follows: [],
    _likes: [],
    _followers: [],
    _postLiked: [],
    _comments: [],
    _postsOtherUser: [],

    _callApi(path, method, token, data) {
        const init = {
            method,
            headers: {}
        }

        if (method !== 'GET') {
            init.headers['Content-Type'] = 'application/json; charset=utf-8'
        }

        if (token) {
            init.headers.Authorization = `Bearer ${token}`
        }

        if (data) {
            init.body = JSON.stringify(data)
        }

        return fetch(`https://skylabcoders.herokuapp.com/api/${path}`, init)
            .then(res => res.json())
    },

    registerUser(name, surname, username, password) {
        if (typeof name !== 'string') throw TypeError(`${name} is not a string`)
        if (typeof surname !== 'string') throw TypeError(`${surname} is not a string`)
        if (typeof username !== 'string') throw TypeError(`${username} is not a string`)
        if (typeof password !== 'string') throw TypeError(`${password} is not a string`)


        if (!name.trim()) throw Error('name is empty or blank')
        if (!surname.trim()) throw Error('surname is empty or blank')
        if (!username.trim()) throw Error('username is empty or blank')
        if (!password.trim()) throw Error('password is empty or blank')

        return this._callApi('user', 'POST', undefined, { app: this._app, name, surname, username, password, profilePublic: true })
            .then(res => {
                if (res.error) throw Error(res.error)
            })
    },

    login(username, password) {
        if (typeof username !== 'string') throw TypeError(`${username} is not a string`)
        if (typeof password !== 'string') throw TypeError(`${password} is not a string`)

        if (!username.trim()) throw Error('username is empty or blank')
        if (!password.trim()) throw Error('password is empty or blank')

        return this._callApi('auth', 'POST', undefined, { username, password })
            .then(res => {
                if (res.error) throw Error(res.error)

                const { id, token } = res.data

                this._userId = id
                this._token = token

                sessionStorage.setItem('userId', id)
                sessionStorage.setItem('token', token)
            })
    },

    get loggedIn() {
        return !!this._userId
    },

    logout() {
        this._posts = []
        this._postsUser = []
        this._postsAllUser = []
        this._likes = []
        this._follows = []
        this._followers = []
        this._userId = null
        this._token = null
        this._postLiked = []
        this._comments = []
        this._postsOtherUser = []

        sessionStorage.removeItem('userId')
        sessionStorage.removeItem('token')
    },

    createPost(url, description) {
        if (typeof url !== 'string') throw TypeError(`${url} is not a string`)

        if (!url.trim()) throw Error('document is empty or blank')

        if (!description) description = ''

        this._postsUser.push(new Post(this._userId, url, description))

        let path = 'user/' + this._userId

        return this._callApi(path, 'PUT', this._token, { posts: this._postsUser })
            .then(res => {
                if (res.error) throw Error(res.error)
            })
    },

    listLikes() {
        let path = 'user/' + this._userId
        return this._callApi(path, 'GET', this._token, undefined)
            .then(res => {
                if (res.error) throw Error(res.error)

                return this._likes = res.data.likes || []
            })
    },

    addLike(postId) {

        if (typeof postId !== 'number') throw TypeError(`${postId} is not a number`)

        this._likes.push(postId)

        let path = 'user/' + this._userId
        return this._callApi(path, 'PUT', this._token, { likes: this._likes })
            .then(res => {
                if (res.error) throw Error(res.error)
            })
    },

    likedPost(postId) {

        if (typeof postId !== 'number') throw TypeError(`${postId} is not a number`)

        let path = 'user/' + this._userId
        return this._callApi(path, 'GET', this._token, undefined)
            .then(res => {
                if (res.error) throw Error(res.error)
                if (res.data.likes) {
                    let liked = res.data.likes.some(like => like === postId)
                    return liked
                }

            })

    },

    retriveUser(userId) {
        if (typeof userId !== 'string') throw TypeError(`${userId} is not a string`)

        let path = 'users?app=' + this._app
        return this._callApi(path, 'GET', this._token, undefined)
            .then(res => {
                if (res.error) throw Error(res.error)
                let userName = res.data.filter(user => user.id === userId)
                let name = userName[0].username
                return name || null
            })
    },

    listPosts() {

        let path = 'user/' + this._userId
        return this._callApi(path, 'GET', this._token, undefined)
            .then(res => {
                if (res.error) throw Error(res.error)
                let sortedUsers = []
                if (res.data.posts) sortedUsers = res.data.posts.sort(function (a, b) {
                    return b.id - a.id;
                });
                return this._postsUser = sortedUsers || []
            })
    },

    listOtherPosts(user){

        if(!(user instanceof Object)) throw Error(`${user} is not an object`)
        if(user.length !== undefined) throw Error (`${user} is not an object`)
        if(!user) throw Error('Other user is empty')

        let sortedUsers = []
        if (user.posts) sortedUsers = user.posts.sort(function (a, b) {
            return b.id - a.id
        })
        return this._postsOtherUser = sortedUsers || []

    },

    listAllPosts() {

        let path = 'users?app=' + this._app
        return this._callApi(path, 'GET', this._token, undefined)
            .then(res => {
                let postsUsers = []
                if (res.error) throw Error(res.error)
                res.data.forEach(user => {
                    if (user.posts) {
                        for (let i = 0; i < user.posts.length; i++) {
                            if (user.posts[i].publicPost) postsUsers.push(user.posts[i])
                        }
                    }
                })
                let sortedUsers = postsUsers.sort(function (a, b) {
                    return b.id - a.id;
                });
                return this._postsAllUser = sortedUsers || []
            })
    },

    retrievePosts(postsId) {
        // if ( postsId instanceof Array) throw TypeError(`${postsId} is not an Array`)

        let path = 'users?app=' + this._app
        return this._callApi(path, 'GET', this._token, undefined)
            .then(res => {

                if (res.error) throw Error(res.error)
                let postsUsers = []
                res.data.forEach(user => {
                    if (user.posts) {
                        for (let i = 0; i < user.posts.length; i++) {
                            for (let e = 0; e < postsId.length; e++) {
                                if (user.posts[i].id === postsId[e]) postsUsers.push(user.posts[i])
                            }
                        }
                    }
                })
                return this._postLiked = postsUsers || []
            })
    },

    retrieveProfile() {
        let path = 'user/' + this._userId
        return this._callApi(path, 'GET', this._token, undefined)   
            .then(res => {
                if (res.error) throw Error(res.error)

                return res.data || []
            })
    },

    addImageProfile(url){
        if (typeof url !== 'string') throw TypeError(`${url} is not a string`)

        let path = 'user/' + this._userId
        return this._callApi(path, 'PUT', this._token, { img: url })
            .then(res => {
                if (res.error) throw Error(res.error)
            })
    },

    searchUserByName(username) {
        if (typeof username !== 'string') throw TypeError(`${username} is not a string`)

        let path = 'users?app=' + this._app
        return this._callApi(path, 'GET', this._token, undefined)
            .then(res => {
                if (res.error) throw Error(res.error)
                let userName = res.data.filter(user => user.username === username)
                let name = userName[0]
                return name || null
            })
    },

    searchUsers(text) {
        if (typeof text !== 'string') throw TypeError(`${text} is not a string`)

        let path = 'users?app=' + this._app
        return this._callApi(path, 'GET', this._token, undefined)
            .then(res => {
                if (res.error) throw Error(res.error)
                let users = res.data.filter(user => user.username.includes(text))
                return  users || null
            })
    },

    likesPost(postId) {
        if (typeof postId !== 'number') throw TypeError(`${postId} is not a number`)

        let path = 'users?app=' + this._app
        return this._callApi(path, 'GET', this._token, undefined)
            .then(res => {

                if (res.error) throw Error(res.error)

                let countLikes = 0
                res.data.forEach(user => {

                    if (user.likes) {
                        for (let i = 0; i < user.likes.length; i++) {
                            if (user.likes[i] === postId) countLikes++
                        }
                    }
                })
                return countLikes || 0
            })
    },
    
    onDeleteLike(postId){
        if (typeof postId !== 'number') throw new TypeError(`${postId} is not a number`)
        debugger
        this._postLiked = this._postLiked.filter(post => post.id !== postId)
        let _likes=[]
        this._postLiked.forEach(post => _likes.push(post.id) )

        let path = 'user/' + this._userId
        return this._callApi(path, 'PUT', this._token, { likes: _likes })
            .then(res => {
                if (res.error) throw Error(res.error)
            })
    },

    listComments() {

        let path = 'user/' + this._userId
        return this._callApi(path, 'GET', this._token, undefined)
            .then(res => {
                if (res.error) throw Error(res.error)

                return this._comments = res.data.comments || []
            })
    },

    addComment(postId, content) {
        if (typeof postId !== 'number') throw TypeError(`${postId} is not a number`)
        if (typeof content !== 'string') throw TypeError(`${content} is not a string`)

        if (!content.trim()) throw Error('document is empty or blank')

        this._comments.push(new Comment(postId, content))

            let path = 'user/' + this._userId
            return this._callApi(path, 'PUT', this._token, { comments: this._comments })
            .then(res => {
                if (res.error) throw Error(res.error)
            })
    },
    commentsPost(postId) {

        let path = 'users?app=' + this._app
        return this._callApi(path, 'GET', this._token, undefined)
            .then(res => {

                if (res.error) throw Error(res.error)

                let countComments = 0
                res.data.forEach(user => {

                    if (user.comments) {
                        for (let i = 0; i < user.comments.length; i++) {
                            if (user.comments[i].postId === postId) countComments++
                        }
                    }
                })
                return countComments || 0
            })
    },

    retrieveComments(postId) {

        if (typeof postId !== 'number') throw TypeError(`${postId} is not a string`)

        let path = 'users?app=' + this._app
        return this._callApi(path, 'GET', this._token, undefined)
            .then(res => {
                if (res.error) throw Error(res.error)
                let commentsPost = []
                res.data.forEach(user => {

                    if (user.comments) {
                        for (let i = 0; i < user.comments.length; i++) {
                            if (user.comments[i].postId === postId) commentsPost.push(user.comments[i])
                        }
                    }
                })
                return commentsPost || []

            })

    },

    retrieveUserComment(commentId) {

        if (typeof commentId !== 'number') throw TypeError(`${commentId} is not a string`)

        let path = 'users?app=' + this._app
        return this._callApi(path, 'GET', this._token, undefined)
            .then(res => {
                if (res.error) throw Error(res.error)
                let userComment = ''
                res.data.forEach(user => {

                    if (user.comments) {
                        for (let i = 0; i < user.comments.length; i++) {
                            if (user.comments[i].id === commentId) userComment = user.username
                        }
                    }
                })
                return userComment

            })

    },

    deletePost(id) {
        if (typeof id !== 'number') throw new TypeError(`${id} is not a number`)

        this._postsUser = this._postsUser.filter(post => post.id !== id)

        let path = 'user/' + this._userId
        return this._callApi(path, 'PUT', this._token, { posts: this._postsUser })
            .then(res => {
                if (res.error) throw Error(res.error)
            })
    }
}

export default logic
// module.exports = logic