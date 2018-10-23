import React, { Component } from 'react'

import Favorite from './Favorite'



class Info extends Component {

    state = {courses: JSON.parse(sessionStorage.getItem('courses')) || [], course: []}

    componentWillMount() {
       if (!sessionStorage.getItem('userId') || !sessionStorage.getItem('token') ) this.props.history.push('/')
       //todo slug validation
       let course = this.state.courses.courses.filter(course => course.slug === this.props.match.params.slug )

       this.setState({course: course[0]})

    }

    render() {


        const _default = {
            image: 'https://via.placeholder.com/170x100',
            title: 'No Title Available',
            subtitle: 'No Subtitle Available',
            short_summary: 'No Summary Available',
            summary: 'No Description Available',
        }

       

        return (
            <div className="info">

                <header>
                    <div className="text">
                        <h1 className="title">B</h1>
                        <h2 className="subtitle">{this.state.course.subtitle || _default.subtitle}</h2>
                        <p className="duration">Expected duration: {this.state.course.expected_duration} {this.state.course.expected_duration_unit}</p>
                    </div>
                    <div className="img">
                        <img src={this.state.course.image || _default.image} alt="course-img"></img>
                       
                    </div>
 
                </header>

                <main>
                    <h4>Instructors: {this.state.course.instructors.forEach(instructor => instructor.name)}</h4>
                </main>

                <Favorite params={this.props.match.params.slug} />
            </div>
        )
    }
}

export default Info