class Postit {
    constructor(body) {
        this.postitId = Date.now()
        this.body = body
    }
}

module.exports = Postit