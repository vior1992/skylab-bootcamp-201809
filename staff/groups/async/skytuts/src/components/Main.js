import React, { Component } from 'react'
import Card from './Card'


class Main extends Component {

    state = {
        courses: []
    }

    componentDidMount() {
        fetch('https://www.udacity.com/public-api/v0/courses').then(response => {
            return response.json()
        }).then(data => { this.setState({ courses: data }) })
            .catch(err => {
                console.log(err) // TODO customizar mensaje de error
            })
    }

    render() {

        return (
            <main>
                {/* <section>Filter</section> */}
                < section className="cards-container" >
                    {(this.state.courses.courses || []).map((course, index) => <Card course={course} key={index} />)}
                </section >

            </main >
        )
    }
}

export default Main