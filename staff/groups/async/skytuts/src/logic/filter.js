function filterCourses(data = JSON.parse(sessionStorage.getItem('courses'))) {
    return {
        byTrack(track) {
            return  data.courses.filter(course => Object.values(track.courses).includes(course.key));
        },
        byLevel(level) {
            return data.filter(course => course.level === level);  
        },
        all() {
            return data
        }
    }
}

export default filterCourses