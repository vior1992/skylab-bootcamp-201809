import React, {Component} from 'react'

class Main extends Component {

    state= {}

    handleLogOut = () => {
        this.props.onLogOut()
    }

    render() {
        return <button onClick={this.handleLogOut}>Log Out</button>
    }

}

export default Main