import React, { Component } from 'react'
import logic from '../logic'
import { Route, withRouter, Redirect } from 'react-router-dom'


function Card(props) {
    return <div>
        <img />

        <div>

            <h5>{props.title}</h5>

            <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>

        </div>

    </div>
}
export default Card