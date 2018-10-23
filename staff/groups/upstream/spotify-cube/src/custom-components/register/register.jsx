import React, {Component} from 'react'
import User from '../../datalayer/user'



export default class Register extends Component{


    constructor(props){
        super(props)
    }

    state = { name: '', surname: '', email: '', username: '', password: '' }

    handleNameChange = event => {
        const name = event.target.value

        this.setState({ name })
    }

    handleSurnameChange = event => {
        const surname = event.target.value

        this.setState({ surname })
    }

    handleEmailChange = event => {
        const email = event.target.value

        this.setState({ email })
    }

    handleUsernameChange = event => {
        const username = event.target.value

        this.setState({ username })
    }

    handlePasswordChange = event => {
        const password = event.target.value

        this.setState({ password })
    }

    handleSubmit = event => {
        event.preventDefault()

        this.props.handleRegister(this.state)
    }


    render(){
        return (  <form className="custom-form" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        
                        <input type="text"  className="form-control"  placeholder="Name" onChange={this.handleNameChange} />
                    </div>
                    <div className="form-group">
                        
                        <input type="text" className="form-control"  placeholder="Surname" onChange={this.handleSurnameChange}  />
                    </div>
                    <div className="form-group">
                       
                        <input type="email" className="form-control"  placeholder="Email" onChange={this.handleEmailChange}  />
                    </div>
                   <div className="form-group">
                      
                        <input type="text" className="form-control"  placeholder="Username" onChange={this.handleUsernameChange}  />
                    </div>
                    <div className="form-group">
                       
                        <input type="password" className="form-control"  placeholder="Password" onChange={this.handlePasswordChange}  />
                    </div>
                    <button type="submit" className="btn btn-primary">Register</button>
                    <button onClick={this.props.onClickLogin} type="button" className="btn btn-primary">Login</button>
                </form>

           
        );
    }
}
