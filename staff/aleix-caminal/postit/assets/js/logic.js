const LOGIC = {
    add(model, title) {
        const element = new window[model + 'Table'](title)
        return element.insert();
    },

    delete(model, id) {
        const element = new window[model + 'Table']()
        return element.delete(id)
    },

    update(model, id, title) {
        const element = new window[model + 'Table']()
        return element.update(id, title)
    },

    select(model) {
        const element = new window[model + 'Table']()
        return element.selectAll()
    }
}
