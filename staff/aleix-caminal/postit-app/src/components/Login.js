import React, { Component } from 'react';
import LOGIC from '../logic'
import Input from './Input'

function Login(props) {
    return <section className="login">
        <h2 className="login__title">Login to Cello</h2>
        <form className="form" onSubmit={props.onSubmit}>
            <Input name="username" />
            <Input name="password" />
            <button className="form__button">Log In</button>
            <p className="form__text">or <a onClick={props.onClick}>Sign Up</a></p>
        </form>
    </section>
}

export default Login;
