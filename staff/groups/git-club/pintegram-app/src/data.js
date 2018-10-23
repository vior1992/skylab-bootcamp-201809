// module.exports = { Postit }

class Post {
    constructor(userId, url, description) {
        this.id = Date.now()
        this.userId =userId
        this.url = url
        this.description = description
        this.publicPost = true
    }
}

class Comment {
    constructor(postId, content) {
        this.id = Date.now()
        this.postId =postId
        this.content= content
    }
}

class Like {
    constructor(userId) {
        this.id = Date.now()
        this.userId =userId
    }
}

export default { Post, Comment, Like }
