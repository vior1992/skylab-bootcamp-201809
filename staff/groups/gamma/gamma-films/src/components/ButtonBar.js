import React, { Component } from 'react'

class ButtonBar extends Component {

    handleClick =event=> {
        event.preventDefault()

        this.props.onClick(this.props.category)
    }

    render() {
        return <a href='#' onClick={this.handleClick} >{this.props.name}</a>
    }
}

export default ButtonBar