import React,{ Component } from 'react'

class Register extends Component {
    constructor(props){
    super(props)
    this.state = {
        name : '',
        email: '',
        username:'',
        password: ''
    }

    }

    handleInputName = (event) => {
        this.setState({
            name : event.target.value
        })
    }

    handleInputEmail = (event) => {
        this.setState({
            email : event.target.value
        })
    }


    handleInputUsername = (event) => {
        this.setState({
            username : event.target.value
        })
    }

    handleInputPassword = (event) => {
        this.setState({
            password : event.target.value
        })
    }

    handleSubmit= event => {
        event.preventDefault()
        this.props.onSubmitRegister(this.state.name, this.state.email, this.state.username, this.state.password)
        this.setState({
            name : '',
            email: '',
            username:'',
            password: ''
        })
    }

    render() {
        return <section className='register'>
        <form onSubmit={this.handleSubmit} className="form-group">
            <input value={this.state.name} onChange={this.handleInputName} type="text" placeholder="name"></input>
            <input value={this.state.email} onChange={this.handleInputEmail} type="email" placeholder="email"></input>
            <input value={this.state.username} onChange={this.handleInputUsername} type="text" placeholder="username"></input>
            <input value={this.state.password} onChange={this.handleInputPassword} type="password" placeholder="password"></input>
            <button type="submit">Register Now</button>
        </form>


        </section>
    }
}

export default Register