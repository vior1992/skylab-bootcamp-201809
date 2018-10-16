const LOGIC = {
    add(model, title) {
        const element = new window[model + 'Table'](title)
        return element.insert();
    },

    delete(model, id) {
        const element = new window[model + 'Table']()
        return element.delete(id)
    },

    update(model, id) {
        console.log(id);
        /* const element = new window[model + 'Table']()
        return element.update() */
    },

    select(model) {
        const element = new window[model + 'Table']()
        return element.selectAll()
    }
}
