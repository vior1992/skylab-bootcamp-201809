import React, { Component } from 'react'
import logic from '../logic'
import { Route, withRouter, Redirect } from 'react-router-dom'


function Card(props) {

    return <div className="card"  >

        <article className="card-body">

            <h5 className="card-title">{props.title}</h5>

            <p className="card-text">{props.release}</p>

            <p className="card-text">{props.description}</p>

            <img className="card-img-top" src={'https://image.tmdb.org/t/p/w500/'+props.imgRoute} />

        </article>

    </div>
}
export default Card