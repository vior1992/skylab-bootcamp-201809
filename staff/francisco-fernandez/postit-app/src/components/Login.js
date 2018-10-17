import React, {Component} from 'react'

class Login extends Component {
    state = { username: '', password: '' }

    HandleUserChange= event =>{
        const username = event.target.value
        this.setState({username})
    }

    HandlePasswordChange = event => {
        const password = event.target.value
        this.setState({password})
    }

    render() {
        return <form>
            <input type="text" placeholder="Username" onChange={this.HandleUserChange}/>
            <input type="text" placeholder="Password" onChange={this.HandlePasswordChange}/>
            <button type="submit">Login</button>
        </form>
    }
}

export default Login