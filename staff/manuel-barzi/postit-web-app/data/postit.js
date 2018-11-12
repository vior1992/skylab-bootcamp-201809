class Postit {
    constructor({ id, text }) {
        this.id = id || Date.now()
        this.text = text
    }
}

module.exports = Postit