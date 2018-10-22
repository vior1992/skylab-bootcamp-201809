import React, { Component } from 'react'
import logic from '../logic'
import { Route, withRouter, Redirect } from 'react-router-dom'


class ButtonBar extends Component {

    handleClick =event=> {
        event.preventDefault()

        this.props.onClick(this.props.category)
    }

    render() {
        return <a href='#' onClick={this.handleClick} > Hola</a>
    }
}

export default ButtonBar