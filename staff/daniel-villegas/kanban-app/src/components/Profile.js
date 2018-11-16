import React, { Component } from 'react'

class Profile extends Component {
    state  = { name:'', surname:'', username:'', newPassword:'', repeatNewPassword:'', password:'' , picture:''}

    handlenewNameChange = event => {
        const name = event.target.value

        this.setState({ name })
    }

    handlenewSurnameChange = event => {
        const surname = event.target.value

        this.setState({ surname })
    }

    handlenewUsernameChange = event => {
        const username = event.target.value

        this.setState({ username })
    }

    handlenewPasswordChange = event => {
        const newPassword = event.target.value

        this.setState({ newPassword })
    }

    handlerepeatNewPasswordChange = event => {
        const repeatNewPassword = event.target.value

        this.setState({ repeatNewPassword })
    }

    handlepasswordChange = event => {
        const password = event.target.value

        this.setState({ password })
    }

    handleNewPictureChange = event => {
        const picture = event.target.value

        this.setState({ picture })
    }

    handleSubmit = event => {
        event.preventDefault()

        const { name, surname, username, newPassword, repeatNewPassword, password } = this.state

        this.props.onUpdateProfile(name, surname, username, newPassword, repeatNewPassword, password)
    }

    render() {
        return <div className="profile">
            <div>
                <h1 className="profile__title">Profile</h1>
            </div>
            
            <div className="profile__body">
                <div className="profile__pictureSection">
                    <h3 className="profile__picture--title">Update your avatar</h3>
                    <img className="profile__picture" ></img>
                    <button className="profile__button--picture" type="onClick" onUpdatePicture={this.handleNewPictureChange}>Change picture</button>
                </div>

                <form className="profile__formulary" onSubmit={this.handleSubmit}>
                    <div className="profile__inputs">
                        <h3 className="profile__formulary--title">Update your credentials</h3>
                        <input className="profile__input" type="text" placeholder="new name" onChange={this.handlenewNameChange} />
                        <input className="profile__input" type="text" placeholder="new surname" onChange={this.handlenewSurnameChange} />
                        <input className="profile__input" type="text" placeholder="new username" onChange={this.handlenewUsernameChange} />
                        <input className="profile__input" type="password" placeholder="new password" onChange={this.handlenewPasswordChange} />
                        <input className="profile__input" type="password" placeholder="repeat new password" onChange={this.handlerepeatNewPasswordChange} />
                        <input className="profile__input" type="password" placeholder="actuall password" onChange={this.handlepasswordChange} />
                    </div>
                    <button className="profile__button--update" type="submit">Update</button> 
                </form>
            </div> 

            <div>
                <a className="profile__back" href="#" onClick={this.props.onGoBack}>back</a>
            </div>
        </div>
    }
}

export default Profile