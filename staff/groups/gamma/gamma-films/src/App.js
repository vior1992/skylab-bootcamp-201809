import React, { Component } from 'react';
import { Route, withRouter, Redirect } from 'react-router-dom'
import Register from './components/Register'
import Login from './components/Login'

class App extends Component {


     render() {

        return <div>
            <button>Login</button>

            <button>Register</button>
<hr></hr><hr></hr><hr></hr>
            <Register />
<hr></hr><hr></hr><hr></hr>
            <Login />

        </div>
    }
}

export default App;
