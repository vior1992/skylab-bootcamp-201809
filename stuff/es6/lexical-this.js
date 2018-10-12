const logic = {
    extractNames(persons, callback) {
        const names = persons.map(person => person.name)

        callback(names)
    }
}

const view = {
    drawNames(names) {
        names.forEach(name => console.log(name))
    },

    drawPersons(persons) {
        // logic.extractNames(persons, function (names) {
        //     this.drawNames(names)
        // }.bind(this))

        logic.extractNames(persons, names => this.drawNames(names))
    }
}

view.drawPersons([{ name: 'peter' }, { name: 'anna' }, { name: 'john' }])