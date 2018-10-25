import React, { Component } from 'react'
import Card from './Card'
import Navbar from './Navbar'

class Profile extends Component {
    state = {
        courses: JSON.parse(sessionStorage.getItem('courses')),
        favorites: JSON.parse(sessionStorage.getItem('faves')),
        faves: []
    }

    getFavorites() {
        let faves = []
        this.state.favorites.forEach(fave => {

            faves.push(Object.values(this.state.courses.courses).find(course => course.slug === fave.course))
        })
        return faves
    }

    render() {

        return (
            <div>
            <Navbar />
            <div className="main list-container">
                <div className="cards-container" >
                    {(this.getFavorites() || []).map((course, index) => <Card course={course} key={index} />)}
                </div>
            </div>
            </div>


        )
    }
}

export default Profile
