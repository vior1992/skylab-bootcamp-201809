import React, { Component } from 'react';
import PostIt from '../postit/'

class Register extends Component {

    constructor() {
        super();

        this.state = {
            registred: false,
            name: '',
            email: '',
            password: '',
        }
    }

    setName = event => this.setState({ name: event.target.value });
    setEmail = event => this.setState({ email: event.target.value });
    setPassword = event => this.setState({ password: event.target.value });

    registerUser = () => {
        this.setState({ registred: true });
    };

    render() {
        return <div className="lists">
                {!this.state.registred &&
                    <div>
                        <h4>Register</h4>
                        <input placeholder="name" value={this.state.name} type="text"  onChange={this.setName}/>
                        <input placeholder="email" value={this.state.email} type="email"  onChange={this.setEmail}/>
                        <input placeholder="password" value={this.state.password} type="password"  onChange={this.setPassword}/>
                        <button onClick={this.registerUser}>Register</button>
                    </div>
                }
                {this.state.registred &&
                    <div className="lists-fix">
                         <PostIt title="TODO" />
                         <PostIt title="DOING" />
                         <PostIt title="REVIEW" />
                         <PostIt title="DONE" />
                    </div>
                }
        </div>
    }
}

export default Register;