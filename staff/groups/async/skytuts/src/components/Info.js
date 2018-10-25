import React, { Component } from 'react'
import ReactMarkdown from 'react-markdown/with-html'
import Navbar from './Navbar'
import Favorite from './Favorite'
import InstructorCard from './InstructorCard'
import logicUdacity from '../logic/udacity'
import logicAuth from '../logic/auth'
import defaultData from './default'
import template from './templates/Info.pug'

class Info extends Component {

    state = {
        courses: logicUdacity._courses,
        course: []
    }

    componentWillMount() {
      
       if (!logicAuth.isAuthenticated()) this.props.history.push('/')
       let course = this.state.courses.courses.filter(course => course.slug === this.props.match.params.slug )
       this.setState({course: course[0]})

    }

    render() {
        
        const { course } = this.state;

        const instructor =  course.instructors.map((instructor, index)=> <InstructorCard instructor={instructor} key={index}/>) 
        
        const markdown = <ReactMarkdown className="knowledge" source={course.required_knowledge} escapeHtml={false} />

       return template.call(this, {        
            defaultData, 
            instructor,
            course,
            markdown,
            slug: this.props.match.params.slug,
            Favorite,
            Navbar
        });

    }
}

export default Info