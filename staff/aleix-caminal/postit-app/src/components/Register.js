import React, { Component } from 'react';
import LOGIC from '../logic'
import Input from './Input'

function Register(props) {
    return <section className="register">
        <h2 className="register__title">Register to Cello</h2>
        <form className="form" onSubmit={props.onSubmit}>
            <Input name="name" />
            <Input name="username" />
            <Input name="password" />
            <Input name="confirm_password" />
            <button className="form__button">Sign Up</button>
            <p className="form__text">or <a onClick={props.onClick}>Log In</a></p>
        </form>
    </section>
}

export default Register;
