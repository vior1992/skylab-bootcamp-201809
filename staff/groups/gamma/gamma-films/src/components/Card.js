import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Card extends Component {
    render() {
        return <div className="minicard"  >

            <article className="minicard-body">

                <Link to={`/movie/${this.props.id}`}><img className="minicard-img-top" src={'https://image.tmdb.org/t/p/w500/' + this.props.imgRoute}  /></Link>
                
                <h5 className="minicard-title">{this.props.title}</h5>

                
            </article>
        </div>

    }
}

export default Card