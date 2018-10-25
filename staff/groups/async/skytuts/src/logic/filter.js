const logicFilter = {


        filterCourses(data = JSON.parse(sessionStorage.getItem('courses'))) {
        return {
            byTrack(track) {
                return data.courses.filter(course => Object.values(track.courses).includes(course.key))
            },
            byLevel(level, track) {
                if (!track) return data.courses.filter(course => course.level === level)
                return this.byTrack(track).filter(course => course.level === level)
            },
            personalized(query) {
                const q = query.replace(/[-\\^$*+?.()|[\]{}]/ig, '\\$&');
                return data.courses.filter(course => course.level.match(new RegExp(q, 'i')) || course.title.match(new RegExp(q, 'i'))) 
            },
            all() {
                return data
            }
        }
    }
}

export default logicFilter
