import React, { Component } from 'react';


class SignUp extends Component {
    state = { name: '', surname: '', username: '', email:'', password: '', repPassword: '', wrongRepPas: false}

    handleNameChange = event => { 
        const name = event.target.value

        this.setState({name})
        
    }

    handleSurnameChange = event => { 
        const surname = event.target.value

        this.setState({surname})
        
    }

    handleUsernameChange = event => { 
        const username = event.target.value

        this.setState({username})
        
    }

    handleEmailChange = event => { 
        const email = event.target.value

        this.setState({email})
        
    }

    handlePasswordChange = event => { 
        const password = event.target.value

        this.setState({password})
        
    }

    handleRepPasswordChange = event => { 
        const repPassword = event.target.value

        this.setState({repPassword})
        
    }

    handleSubmit = event =>{
        event.preventDefault()

        const {name, surname, username, email, password, repPassword} = this.state
       
        if (password === repPassword) {
           
            this.props.onFormSubmit(name, surname, username, email, password)
            this.setState({ wrongRepPas: false})
            
        } else {  //TODO shall we put this in the logic??
            this.setState({ wrongRepPas: true})
        }

        
    }

    render() {
        return <form onSubmit={this.handleSubmit}>
            <input placeholder= 'name' onChange={this.handleNameChange}/>
            <input placeholder= 'surname' onChange={this.handleSurnameChange}/>
            <input placeholder= 'username' onChange={this.handleUsernameChange}/>
            <input type= 'email' placeholder= 'email' onChange={this.handleEmailChange}/>
            <input type = 'password' placeholder= 'password' onChange={this.handlePasswordChange}/>
            <input type = 'password' placeholder= 'repeat password' onChange={this.handleRepPasswordChange}/>
            {this.state.wrongRepPas && <p>Passwords are not the same</p>}
            <button type='submit'>Submit</button>
        </form>

    }
    
}

export default SignUp