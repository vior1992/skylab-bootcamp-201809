import React, { Component } from 'react'
import logic from '../logic';
import ItemListPartyups from './itemListPartyups'

class Profile extends Component {
    state = { 
        name: '', 
        surname: '', 
        username: '', 
        city: '', 
        id: '', 
        createdPartyups: [], 
        willAssistTo:[]
    }

    componentDidMount() {
        logic.retrieveLoggedUser()
            .then(user => {
                const { name, surname, city, username, id } = user
                this.setState({ name, surname, city, username, id })
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
    
    render() {
        return <div>
            <header className="site__header">
                <a href="#" className="logo" onClick={this.props.onLogoClick}>Logo</a>
                
                <div className="actions">
                    <a href="#" className="create__link" onClick={this.props.onCreatePartyupClick}>Crear Partyup</a>
                    <a href="#" className="profile__link" onClick={this.props.onProfileClick}>Perfil</a>
                    <a href="#" className="logout__link" onClick={this.props.onLogoutClick}>Cerrar sesión</a>
                </div>
            </header>
            <main>
                <div class="profile__information">
                    <div class="partyup__header--info">
                        <h2>{this.state.username}</h2>
                        <h4>{this.state.name} {this.state.surname}</h4>
                        <h4>{this.state.city}</h4>
                    </div>
                    <div>
                        <img src="" alt=""/>
                    </div>
                </div>
                <div className="partyups" >
                    <h2 className="partyups__titles">Eventos creados</h2> 
                    <ul>
                        <li className="partyups__list"> {this.state.createdPartyups.map(partyup => <ItemListPartyups key={partyup._id} id={partyup._id} title={partyup.title} place={partyup.place} date={partyup.date} assistant={null} onPartyupClick={this.props.onPartyupClick}/>)} </li>
                    </ul>
                </div>
                <div className="partyups">
                    <h2 className="partyups__titles">Asistira a</h2>
                    <ul>
                        <li className="partyups__list"> {this.state.willAssistTo.map(partyup => <ItemListPartyups key={partyup._id} id={partyup._id} title={partyup.title} place={partyup.place} date={partyup.date} assistant={null} onPartyupClick={this.props.onPartyupClick}/>)} </li>
                    </ul>
                </div>
            </main>
            
            <footer class="footer">
                <p>© 2018 Partyup  Partyup es una subsidiaria totalmente controlada por Dani Companies Inc.</p>
            </footer>
        </div>
    }
}

export default Profile