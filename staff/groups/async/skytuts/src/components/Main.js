import React, { Component } from 'react'
import Card from './Card'
import logicUdacity from '../logic/udacity'

class Main extends Component {

    state = {
        courses: [],
        error: null
    }

    listCourses = () => {
        try {
            logicUdacity.getCourses()
                .then(() => {
                    this.setState({ courses: JSON.parse(sessionStorage.getItem('courses')) || [] })
                })
                .catch(error => this.setState({ error: error.message }))
        } catch (error) {
            this.setState({ error: error.message })
        }
    }

    componentWillMount() {
        const courses = JSON.parse(sessionStorage.getItem('courses'));
        (courses) ? this.setState({ courses }) : this.listCourses();
    }

    render() {
        return (
            <main>
                {/* <section>Filter</section> */}
                {this.state.error &&
                    <p>{this.state.error}</p>
                }
                < section className="cards-container" >
                    {(this.state.courses.courses || []).map((course, index) => <Card course={course} key={index} />)}
                </section >

            </main >
        )
    }
}

export default Main