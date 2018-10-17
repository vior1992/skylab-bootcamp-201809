import React, { Component } from 'react'
import logic from './logic'
import InputForm from './components/InputForm'
import Post from './components/Post'
import Register from './components/Register'

class App extends Component {
    state = {  }

    onLogin = event => {
        
    }

    onRegister = event => {
        
    }


    render() {
        return <section> 
            <h1>Landing</h1>
            <section>
                <button onClick={() => this.onLogin}>Log In</button>
                <button onClick={() => this.onRegister}>Register</button>
            </section>
            <section>
                <Register/>
            </section>
        </section>
    }
}

export default App;
