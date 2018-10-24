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
    _postsOtherUser:[],

    registerUser(name, surname, username, password) {
        if (typeof name !== 'string') throw TypeError(`${name} is not a string`)
        if (typeof surname !== 'string') throw TypeError(`${surname} is not a string`)
        if (typeof username !== 'string') throw TypeError(`${username} is not a string`)
        if (typeof password !== 'string') throw TypeError(`${password} is not a string`)

        if (!name.trim()) throw Error('name is empty or blank')
        if (!surname.trim()) throw Error('surname is empty or blank')
        if (!username.trim()) throw Error('username is empty or blank')
        if (!password.trim()) throw Error('password is empty or blank')

        return fetch('https://skylabcoders.herokuapp.com/api/user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            },
            body: JSON.stringify({ app: this._app, name, surname, username, password, profilePublic: true })
        })
            .then(res => res.json())
            .then(res => {
                if (res.error) throw Error(res.error)
            })
    },

    login(username, password) {
        if (typeof username !== 'string') throw TypeError(`${username} is not a string`)
        if (typeof password !== 'string') throw TypeError(`${password} is not a string`)

        if (!username.trim()) throw Error('username is empty or blank')
        if (!password.trim()) throw Error('password is empty or blank')

        return fetch('https://skylabcoders.herokuapp.com/api/auth', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            },
            body: JSON.stringify({ username, password })
        })
            .then(res => res.json())
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

        sessionStorage.removeItem('userId')
        sessionStorage.removeItem('token')
    },

    createPost(url, description) {
        if (typeof url !== 'string') throw TypeError(`${url} is not a string`)

        if (!url.trim()) throw Error('document is empty or blank')

        if (!description) description = ''

        this._postsUser.push(new Post(this._userId, url, description))

        return fetch(`https://skylabcoders.herokuapp.com/api/user/${this._userId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
                'Authorization': `Bearer ${this._token}`
            },
            body: JSON.stringify({ posts: this._postsUser })
        })
            .then(res => res.json())
            .then(res => {
                if (res.error) throw Error(res.error)
            })
    },

    listLikes() {
        return fetch(`https://skylabcoders.herokuapp.com/api/user/${this._userId}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${this._token}`
            }
        })
            .then(res => res.json())
            .then(res => {
                if (res.error) throw Error(res.error)

                return this._likes = res.data.likes || []
            })
    },

    addLike(postId) {

        if (typeof postId !== 'number') throw TypeError(`${postId} is not a string`)

        this._likes.push(postId)

        return fetch(`https://skylabcoders.herokuapp.com/api/user/${this._userId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
                'Authorization': `Bearer ${this._token}`
            },
            body: JSON.stringify({ likes: this._likes })
        })
            .then(res => res.json())
            .then(res => {
                if (res.error) throw Error(res.error)
            })
    },

    likedPost(postId) {

        if (typeof postId !== 'number') throw TypeError(`${postId} is not a string`)

        return fetch(`https://skylabcoders.herokuapp.com/api/user/${this._userId}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${this._token}`
            }
        })
            .then(res => res.json())
            .then(res => {
                if (res.error) throw Error(res.error)
                if (res.data.likes) {
                    let liked = res.data.likes.some(like => like === postId)
                    return liked
                }

            })

    },

    retriveUser(userId) {
        return fetch(`https://skylabcoders.herokuapp.com/api/users?app=pintegram`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${this._token}`
            }
        })
            .then(res => res.json())
            .then(res => {
                if (res.error) throw Error(res.error)
                let userName = res.data.filter(user => user.id === userId)
                let name = userName[0].name
                return name || null
            })
    },

    listPosts() {
        return fetch(`https://skylabcoders.herokuapp.com/api/user/${this._userId}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${this._token}`
            }
        })
            .then(res => res.json())
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
        if(!user) throw Error('Other user is empty')
        let sortedUsers = []
        if (user.posts) sortedUsers=user.posts.sort(function(a,b){
            return b.id - a.id
        })
        return this._postsOtherUser = sortedUsers || []

    },

    listAllPosts() {
        return fetch(`https://skylabcoders.herokuapp.com/api/users?app=pintegram`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${this._token}`
            }
        })
            .then(res => res.json())
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
        return fetch(`https://skylabcoders.herokuapp.com/api/users?app=pintegram`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${this._token}`
            }
        })
            .then(res => res.json())
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
        return fetch(`https://skylabcoders.herokuapp.com/api/user/${this._userId}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${this._token}`
            }
        })
            .then(res => res.json())
            .then(res => {
                if (res.error) throw Error(res.error)

                return res.data || []
            })
    },

    searchUserByName(username) {
        return fetch(`https://skylabcoders.herokuapp.com/api/users?app=pintegram`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${this._token}`
            }
        })
            .then(res => res.json())
            .then(res => {
                if (res.error) throw Error(res.error)
                let userName = res.data.filter(user => user.name === username)
                let name = userName[0]
                return  name || null
            })
    },

    likesPost(postId) {

        return fetch(`https://skylabcoders.herokuapp.com/api/users?app=pintegram`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${this._token}`
            }
        })
            .then(res => res.json())
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

    listComments() {
        return fetch(`https://skylabcoders.herokuapp.com/api/user/${this._userId}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${this._token}`
            }
        })
            .then(res => res.json())
            .then(res => {
                if (res.error) throw Error(res.error)

                return this._comments = res.data.comments || []
            })
    },

    addComment(postId, content) {
        if (typeof postId !== 'number') throw TypeError(`${postId} is not a string`)
        if (typeof content !== 'string') throw TypeError(`${content} is not a string`)

        if (!content.trim()) throw Error('document is empty or blank')

        this._comments.push(new Comment(postId, content))

        return fetch(`https://skylabcoders.herokuapp.com/api/user/${this._userId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
                'Authorization': `Bearer ${this._token}`
            },
            body: JSON.stringify({ comments: this._comments })
        })
            .then(res => res.json())
            .then(res => {
                if (res.error) throw Error(res.error)
            })
    },
    commentsPost(postId) {

        return fetch(`https://skylabcoders.herokuapp.com/api/users?app=pintegram`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${this._token}`
            }
        })
            .then(res => res.json())
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

        return fetch(`https://skylabcoders.herokuapp.com/api/users?app=pintegram`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${this._token}`
            }
        })
            .then(res => res.json())
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

        return fetch(`https://skylabcoders.herokuapp.com/api/users?app=pintegram`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${this._token}`
            }
        })
            .then(res => res.json())
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

        return fetch(`https://skylabcoders.herokuapp.com/api/user/${this._userId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
                'Authorization': `Bearer ${this._token}`
            },
            body: JSON.stringify({ posts: this._postsUser })
        })
            .then(res => res.json())
            .then(res => {
                if (res.error) throw Error(res.error)
            })
    },

    //     updatePostit(id, text) {
    //         if (typeof id !== 'number') throw new TypeError(`${id} is not a number`)

    //         if (typeof text !== 'string') throw TypeError(`${text} is not a string`)

    //         if (!text.trim()) throw Error('text is empty or blank')

    //         const postit = this._postits.find(postit => postit.id === id)

    //         postit.text = text

    //         return fetch(`https://skylabcoders.herokuapp.com/api/user/${this._userId}`, {
    //             method: 'PUT',
    //             headers: {
    //                 'Content-Type': 'application/json; charset=utf-8',
    //                 'Authorization': `Bearer ${this._token}`
    //             },
    //             body: JSON.stringify({ postits: this._postits })
    //         })
    //             .then(res => res.json())
    //             .then(res => {
    //                 if (res.error) throw Error(res.error)
    //             })
    //     }
}

export default logic
// module.exports = logic