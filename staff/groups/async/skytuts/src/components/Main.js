
import React, { Component } from 'react'

import Card from './Card'

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
                courses: data.courses || [],
                tracks: data.tracks || [],
            })
        } else {
            this.listCourses();
        }

    }

    render() {
        return (
            <main>

                <div className="search">
                    <input onChange={this.filterPersonalized} type="text" placeholder="Search course..." />
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