function filterCourses(data = JSON.parse(sessionStorage.getItem('courses'))) {
    return {
        byTrack(track) {
            return data.courses.filter(course => Object.values(track.courses).includes(course.key))
        },
        byLevel(level, track) {
            if (!track) return data.courses.filter(course => course.level === level)
            return this.byTrack(track).filter(course => course.level === level)
        },
        personalized(query) {
            return data.courses.filter(course => course.level.match(new RegExp(query, 'i')) || course.title.match(new RegExp(query, 'i')))
        },
        all() {
            return data
        }
    }
}

export default filterCourses