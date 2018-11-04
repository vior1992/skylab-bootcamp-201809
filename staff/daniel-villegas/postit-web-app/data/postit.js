class Postit {
    constructor(body) {
        const {body} = postit
        this.postitId = Date.now()
        this.body = body
    }
}

module.exports = Postit