import React, { Component } from 'react'
import logic from '../../logic';
import ItemListPartyups from '../ItemListPartyups'
import Footer from '../Footer'
import HeaderLogged from '../HeaderLogged'
import FileBase64 from "react-file-base64"
import './styles.css'

class Profile extends Component {
    state = { 
        name: '', 
        surname: '', 
        username: '', 
        city: '', 
        id: '', 
        avatar:  '',
        createdPartyups: [], 
        willAssistTo:[],
        loading: false
    }

    componentDidMount() {
        logic.retrieveLoggedUser()
            .then(user => {
                const { name, surname, city, username, id, avatar } = user
                this.setState({ name, surname, city, username, id, avatar })
            })

        logic.itemListPartyupsCreatedBy()
            .then(partyups => {
                partyups.forEach(() => {
                    this.setState({ createdPartyups: partyups })
                })  
            })           

        logic.itemListPartyupsIAssist()
            .then(partyups => {
                partyups.forEach(() => {
                    this.setState({ willAssistTo: partyups })
                })   
            })
    }

    handleDelete() {
        logic.deleteUser()
    }

    getFiles = files => {
        this.setState({
            loading: false
        })
        this.handleAvatarChange(files.base64)
    }

    handleAvatarChange(base64Image){
        logic.addUserAvatar(base64Image)
            .then(avatar => {
                this.setState({
                    avatar,
                    loading: true,
                    //TODO refresh page when upload
                })
            })
            .catch(err => this.setState({ error: err.message }))
    }
    
    render() {
        return <div>
            <HeaderLogged onLogoClick={this.props.onLogoClick} onCreatePartyupClick={this.props.onCreatePartyupClick} onProfileClick={this.props.onProfileClick} onLogoutClick={this.props.onLogoutClick} />

            <main>
                <div className="profile__information">
                    <div className="partyup__header--info">
                        <h2>{this.state.username}</h2>
                        <h4>{this.state.name} {this.state.surname}</h4>
                        <h4>{this.state.city}</h4>
                    </div>
                    <div>
                        <div>
                            {this.state.avatar ? <img className="profile__avatar" src={this.state.avatar}></img> : <img className="" src="../public/profile.png"></img>}
                        </div>
                        <div className="container-input">
                            <FileBase64 className="input" multiple={false} onDone={this.getFiles} />
                        </div>
                    </div>
                    <div>
                        <button className="delete__button" onClick={() => { this.handleDelete(); this.props.onDeleteClick() }}>Eliminar perfil</button>
                    </div>
                </div>
                <div className="partyups" >
                    <h2 className="partyups__titles">Eventos creados</h2> 
                    <ul>
                        <li className="partyups__list"> {this.state.createdPartyups.map(partyup => <ItemListPartyups key={partyup.id} id={partyup.id} title={partyup.title} place={partyup.place} date={partyup.date} actuallUserId={this.state.id} onPartyupClick={this.props.onPartyupClick}/>)} </li>
                    </ul>
                </div>
                <div className="partyups">
                    <h2 className="partyups__titles">Asistira a</h2>
                    <ul>
                        <li className="partyups__list"> {this.state.willAssistTo.map(partyup => <ItemListPartyups key={partyup.id} id={partyup.id} title={partyup.title} place={partyup.place} date={partyup.date} actuallUserId={this.state.id} onPartyupClick={this.props.onPartyupClick}/>)} </li>
                    </ul>
                </div>
            </main>
            
            <Footer/>
        </div>
    }
}

export default Profile