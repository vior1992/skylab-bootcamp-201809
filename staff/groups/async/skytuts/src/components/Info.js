import React, { Component } from 'react'
import ReactMarkdown from 'react-markdown/with-html'
import Favorite from './Favorite'
import InstructorCard from './InstructorCard'


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
            image: require(`../images/defaultImage${Math.floor((Math.random() * 5) + 1)}.png`),
            title: 'No Title Available',
            short_summary: 'No Summary Available',
            summary: 'No Description Available'
        }

       const instructor =  this.state.course.instructors.map((instructor, index)=> <InstructorCard instructor={instructor} key={index}/>) 
           
       

        return (
            <div className="info">
                <div className="division"></div>
                <header className="header-info">
                    <img className="course-img" src={this.state.course.image || _default.image} alt="course-img"></img>    
                    <div className="text">
                        <h1 className="title">{this.state.course.title || _default.title}</h1>
                        <h5 className="duration">Expected duration: {this.state.course.expected_duration} {this.state.course.expected_duration_unit}</h5>
                    </div>

                    
                    <div className="bottom-info">
                        <div className="knowledge-container">
                            <h3>Required knowledge</h3>
                            <ReactMarkdown className="knowledge" source={this.state.course.required_knowledge} escapeHtml={false} />
                            {this.state.course.teaser_video.youtube_url &&
                            <iframe height="315" src={`https://www.youtube.com/embed/${this.state.course.teaser_video.youtube_url.split('=')[1]}`} title='teaser' frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>}
                        </div>
                        <h1 className="instructor-title">Instructors</h1>
                        {instructor}
                    </div>
                </header>


                <Favorite params={this.props.match.params.slug} />
            </div>
        )
    }
}

export default Info