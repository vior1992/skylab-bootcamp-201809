import React, { Component } from 'react'
import logic from '../logic';
import ListPartyups from './listPartyups'

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

    componentDidMount(){
        logic.retrieveLoggedUser()
            .then(user => {
                const { name, surname, city, username, id } = user
                this.setState({ name, surname, city, username, id })
            })

        logic.listPartyupsCreatedBy()//TODO
            .then(partyups => {

                partyups.forEach(() => {
                    this.setState({ createdPartyups: partyups })
                })             
             
                // const { title , description, date, place, assistants } = partyups

        logic.listPartyupsIAssist()//TODO
            .then(() => {
                
                // this.setState.willAssistTo.push( partyups )
                
            })
            console.log('a')
            })
    }

    render() {
        return <div>
            <header className="site__header">
                <a href="#0" className="logo" onClick={this.props.onLogoClick}>Logo</a>
                
                <div className="actions">
                    <a href="#0" className="create__link" onClick={this.props.onCreatePartyupClick}>Crear Partyup</a>
                    <a href="#0" className="profile__link" onClick={this.props.onProfileClick}>Perfil</a>
                    <a href="#0" className="logout__link" onClick={this.props.onLogoutClick}>Cerrar sesión</a>
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
                <div>
                    <h2>Eventos creados</h2> 
                    {/* TODO NOT PRINT */}
                    <ul>
                        <li> {this.state.createdPartyups.map(partyup => <ListPartyups key={partyup._id} title={partyup.title} place={partyup.place} date={partyup.date} assistant={null} />)} </li>
                    </ul>
                </div>
                <div>
                    <h2>Asistira a</h2>
                    <ul>
                        <li> {this.state.createdPartyups.map(partyup => <ListPartyups key={partyup._id} title={partyup.title} place={partyup.place} date={partyup.date} assistant={null} />)} </li>
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