
import React, { Component } from 'react'

import Card from './Card'
import Navbar from './Navbar'


import logicUdacity from '../logic/udacity'
import filterCourses from '../logic/filter'

class Main extends Component {

    state = {
        courses: [],
        tracks: [],
        track: null,
        error: null
    }


    filterCoursesByTrack = (track) => {
        this.setState({ courses: filterCourses().byTrack(track), track })
    }

    filterCoursesByLevel = (level) => {
        this.setState({ courses: filterCourses().byLevel(level, this.state.track) })
    }

    filterPersonalized = (event) => {
        this.setState({ courses: filterCourses().personalized(event.target.value) })
    }

    listCourses = () => {
        try {
            logicUdacity.getCourses()
                .then(() => {
                    const data = JSON.parse(sessionStorage.getItem('courses'))
                    this.setState({
                        courses: data.courses || [],
                        tracks: data.tracks || [],
                    })
                })
                .catch(error => this.setState({ error: error.message }))
        } catch (error) {
            this.setState({ error: error.message })
        }
    }

    componentWillMount() {
        const data = JSON.parse(sessionStorage.getItem('courses'))
        if (data) {
            this.setState({ 
                courses: data.courses.slice(0, 6) || [],
                tracks: data.tracks || [],
            })
        } else {
            this.listCourses() || this.listCourses().slice(0, 6);
        }

    }

    render() {
        return (
            <main>

                <div id="search">
                    < Navbar />
                    <input onChange={this.filterPersonalized} type="text" placeholder="Search course..." />
                    <img src='https://images.pexels.com/photos/1036873/pexels-photo-1036873.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' alt="ayaya" />}
                    <canvas id="canvas"></canvas>
                </div>

                <div className="main">
                    <section className="list-container">

                        {(this.state.tracks || []).map((track, index) => <span onClick={() => this.filterCoursesByTrack(track)} key={index}>{track.name}</span>)}
                        <span onClick={() => this.filterCoursesByLevel('beginner')}>Beginner</span>
                        <span onClick={() => this.filterCoursesByLevel('intermediate')}>Intermediate</span>
                        <span onClick={() => this.filterCoursesByLevel('advanced')}>Advanced</span>
                        {this.state.error &&
                            <p>{this.state.error}</p>
                        }

                    </section>

                    < section className="cards-container" >
                        {(this.state.courses || []).map((course, index) => <Card course={course} key={index} />)}
                    </section >
                </div>
            </main >
        )
    }
}

export default Main