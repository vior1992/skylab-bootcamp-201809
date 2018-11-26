import React, { Component } from 'react'
import logic from '../../logic';
import ItemListPartyups from '../ItemListPartyups/itemListPartyups'
import Footer from '../Footer/footer'
import HeaderLogged from '../HeaderLogged/header_logged'
import './styles.css'

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

    handleDelete() {
        try {
            logic.deleteUser()
                .catch(() => {
                    
                })

        } catch (err) {

        }
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
                        <button onClick={() => { this.handleDelete(); this.props.onDeleteClick() }}>Eliminar</button>
                        <img src="" alt=""/>
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