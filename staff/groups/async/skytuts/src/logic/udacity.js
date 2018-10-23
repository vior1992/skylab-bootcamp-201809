const logicUdacity = {
    _courses: sessionStorage.getItem('courses'),

    getCourses(url = 'https://www.udacity.com/public-api/v0/courses') {
        debugger
        return fetch(url).then(response => {
            return response.json()
        }).then(data => {
            this._courses = data
            sessionStorage.setItem('courses', JSON.stringify(data))
            return true
        })
            .catch(err => {
                if (err) throw Error('Unable to load courses')
            })
    }
}

// export default logicUdacity
module.exports = logicUdacity

///////////////////////////////////



