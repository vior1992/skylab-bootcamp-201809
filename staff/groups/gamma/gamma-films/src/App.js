import React, { Component } from 'react';
import { Route, withRouter, Redirect } from 'react-router-dom'
import Register from './components/Register'

class App extends Component {


     render() {

        return <div>
            <button>Login</button>

            <button>Register</button>

            <Register />

        </div>
    }
}

export default App;
