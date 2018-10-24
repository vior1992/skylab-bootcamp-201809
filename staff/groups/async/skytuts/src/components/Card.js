
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Card extends Component {

    render() {

        const { course } = this.props
        const _default = {
            image: require(`../images/defaultImage${Math.floor((Math.random() * 5) + 1)}.png`),
            title: 'No Title Available',
            subtitle: 'No Subtitle Available',
            short_summary: 'No Summary Available',
            summary: 'No Description Available',
        }
        const difficulty = {
            beginner: course.level === 'beginner',
            intermediate: course.level === 'intermediate',
            advanced: course.level === 'advanced'
        }

        return (
            <div className="card">
                <div className="card-top">
                    <img src={course.image || _default.image} alt="course-img"></img>
                    <div className="card-info">
                        <h3 className="title">{course.title || _default.title}</h3>
                        <h5 className="subtitle">{course.subtitle || _default.subtitle}</h5>
                        <p className="short-summary">{course.short_summary.length ? course.short_summary : _default.short_summary}</p>
                    </div>
                </div>

                <div className="card-middle">
                    <Link to={`/course/${course.slug}`}><span>+  Course Details</span></Link>
                    <span>{difficulty.beginner && 
                    <img className="difficulty" src={require('../images/bitmap1.png')} alt="ayaya" />}
                    {difficulty.intermediate && 
                    <img className="difficulty" src={require('../images/bitmap2.png')} alt="ayaya" />}
                    {difficulty.advanced && 
                    <img className="difficulty" src={require('../images/bitmap3.png')} alt="ayaya" />} {course.level}</span>
                </div>
            </div>

        )
    }
}

export default Card

// <img className="difficulty" src={require('../images/bitmap1.png')} alt="ayaya" />