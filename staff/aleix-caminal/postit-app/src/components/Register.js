import React, { Component } from 'react';
import LOGIC from '../logic'

function Input(props) {
    return <div className="register__group">
        <label className="register__label">{props.label}</label>
        <input className="register__input" />
    </div>
}

class Register extends Component {
    constructor(props) {
        super(props)
        this.state = { register: {} }
    }

    render() {
        return <section className="register">
            <h2 className="register__title">Register to Cello</h2>
            <form>
                <Input label="Name" />
                <Input label="Username" />
                <Input label="Password" />
                <Input label="Repeat password" />
                <button className="register__button">Sign Up</button>
            </form>
        </section>
    }
}

export default Register;
