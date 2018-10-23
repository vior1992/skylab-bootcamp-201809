import React, {Component} from 'react'


export default class Login extends Component{
    
   
    state = { username: '', password: '' }
    
    handleUsername = event => {
        const username = event.target.value

        this.setState({ username })
    }

    handlePassword = event => {
        const password = event.target.value

        this.setState({ password })
    }

    handleSubmit = event => {      //envia el state (que son los value de los inputs guardados con las funciones de arriba) al padre mediante la callback handleLogin que nos ha pasado éste mediante props
        event.preventDefault();

        this.props.onLogin(this.state)
    }
    

    render(){
        return (

            
                <form className="custom-form" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Username</label>
                    <input type="text" className="form-control" aria-describedby="emailHelp" placeholder="Username" onChange= {this.handleUsername} />
                    </div>
                    <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Password</label>
                    <input type="password" className="form-control" aria-describedby="emailHelp" placeholder="Password" onChange={this.handlePassword} />
                    </div>
                    <button type="submit" className="btn btn-primary">Login</button>
                    <button onClick={this.props.onClickRegister} type="button" className="btn btn-primary">Register</button>
                </form>
           
        );
    }
}
