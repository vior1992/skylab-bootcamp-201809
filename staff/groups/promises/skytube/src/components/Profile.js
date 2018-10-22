import React, {Component} from 'react'

class Profile extends Component {
    handleLogOut = () => {
        this.props.onLogOut()
    }

    render() {
        return <button onClick={this.handleLogOut}>Log Out</button>
    }
}

export default Profile
