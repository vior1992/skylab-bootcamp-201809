const logicUdacity = {
    _courses: sessionStorage.getItem('courses'),

    getCourses() {
        return fetch('https://www.udacity.com/public-api/v0/courses').then(response => {
            return response.json()
        }).then(data => {
            this._courses = data
            sessionStorage.setItem('courses', JSON.stringify(data))
        })
            .catch(err => {
                if (err) throw Error('Unable to load courses')
            })

    }
}

export default logicUdacity
// module.exports = logicUdacity



