import React, {Component} from 'react'

class LogIn extends Component {
    state = { username: '', password: ''}


    handleUsernameChange = event => { 
        const username = event.target.value

        this.setState({username})
        
    }

    handlePasswordChange = event => { 
        const password = event.target.value

        this.setState({password})
        
    }

    handleSubmit = event =>{
        event.preventDefault()

        const {username,password} = this.state
      
        this.props.onLogInSubmit( username, password)
        
    }

    render () {
        return <form onSubmit={this.handleSubmit}>
            <input placeholder= 'username' onChange={this.handleUsernameChange}/>
            <input type = 'password' placeholder= 'password' onChange={this.handlePasswordChange}/>
            <button type='submit'>Log In</button>
        </form>
    }

}

export default LogIn