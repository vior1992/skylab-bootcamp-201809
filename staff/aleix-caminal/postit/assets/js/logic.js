const LOGIC = {
    boards: new BoardsTable(),
    posts: new PostsTable(),
    add(model, query) {
        const entity = this[model].newEntity(query).insert();
        return this.all(model)
    },
    delete(model, id) {
        this[model].get(id).delete()
        return this.all(model)
    },
    update(model, id, title) {
        const element = this[model].get(id)
        element.title = title
        element.update()
        return this.all(model)
    },
    find(model, query) {
        return this[model].find(query)
    },
    all(model) {
        return this[model].all()
    }
}
