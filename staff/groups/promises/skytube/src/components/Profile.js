import React, {Component} from 'react'

class Profile extends Component {
   
    render() {
        return <div className="dropwdown">
            <button className="userpic">Profilepic</button>
            <div className="dropdown-content">
                <div>
                    <img alt="image"></img>
                    <h1>username</h1>
                    <p>email</p>
                    <a>edit user</a>
                </div>
                <div>
                    <button onClick={this.props.onLogOut}>Log Out</button>
                </div>
            </div>
        </div>
    }
}

export default Profile
