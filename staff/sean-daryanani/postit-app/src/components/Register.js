import React,{ Component } from 'react'


class Register extends Component {
    constructor(props){
    super(props)
    this.state = {
        name : '',
        surname: '',
        username:'',
        password: ''
    }

    }

    handleInputName = (event) => {
        const name = event.target.value

        this.setState({name})
    }

    handleInputSurname = (event) => {
        const surname = event.target.value

        this.setState({surname})
    }


    handleInputUsername = (event) => {
        const username = event.target.value
        this.setState({username})
    }

    handleInputPassword = (event) => {
        const password = event.target.value
        this.setState({password})
    }

    handleSubmit= event => {
        event.preventDefault()

        this.props.onRegisterClick(this.state.name, this.state.surname, this.state.username, this.state.password)

        this.setState({
            name : '',
            surname: '',
            username:'',
            password: ''
        })
    }

    // handleTakeMeBack = () => {

    // }

    render() {
        return <section className='register'>
        <h1>Register</h1>
        <form onSubmit={this.handleSubmit} className="form-group">
            <input required value={this.state.name} onChange={this.handleInputName} type="text" placeholder="name"></input>
            <input required value={this.state.surname} onChange={this.handleInputSurname} type="name" placeholder="surname"></input>
            <input required value={this.state.username} onChange={this.handleInputUsername} type="text" placeholder="username"></input>
            <input required value={this.state.password} onChange={this.handleInputPassword} type="password" placeholder="password"></input>
            <button required type="submit">Register Now</button>
        </form>
        <button onClick={this.props.backHandle}>Back to home page</button>


        </section>
    }
}

export default Register