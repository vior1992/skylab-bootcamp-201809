import React, { Component } from 'react';
import LOGIC from '../logic'

function Input(props) {
    return <div className="login__group">
        <label className="login__label">{props.label}</label>
        <input className="login__input" />
    </div>
}

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = { login: {} }
    }

    render() {
        return <section className="login">
            <h2 className="login__title">Login to Cello</h2>
            <form>
                <Input label="Username" />
                <Input label="Password" />
                <button className="login__button">Log In</button>
            </form>
        </section>
    }
}

export default Login;
