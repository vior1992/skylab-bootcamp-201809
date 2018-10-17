import React, { Component } from 'react'


class Landing extends React.Component {

render() {
    return <div>
    <h2>Login or Register</h2>
    <button onClick={this.handleLogin}>Login</button>
    <button onClick={this.handleRegister}>Register</button>
    </div>
}
}

export default Landing;