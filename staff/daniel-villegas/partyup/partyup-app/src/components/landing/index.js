import React, { Component } from 'react'
import logic from '../../logic'
import ItemListPartyups from '../ItemListPartyups'
import Footer from '../Footer'
import HeaderNotLogged from '../HeaderNotLogged'
import './styles.css'

class Landing extends Component {
    state = { allPartyups: [] }

    componentDidMount() {
        logic.listPartyups()
        .then(partyups => {
            partyups.forEach(() => {
                this.setState({ allPartyups: partyups })
            })
        }) 
    }

    render() {
        return <div>
            <HeaderNotLogged onLogoClick={this.props.onLogoClick} onLoginClick={this.props.onLoginClick} onRegisterClick={this.props.onRegisterClick}/>

            <section className="main__gifsection">
                <div className="main__titles">
                    <h2 className="title__h2">¿Quieres fiesta?</h2>
                    <h4 className="title__h4">Encuentrala con Partyup</h4>
                    <button className="register__button" onClick={this.props.onRegisterClick}>Registrarse</button>
                </div>
            </section>

            <section className="partyups">
                <div className="partyups__titles">
                    <h2>Proximos Partyups</h2>
                </div>
                <ul>
                    <li className="partyups__list"> {this.state.allPartyups.map(partyup => <ItemListPartyups key={partyup.id} id={partyup.id} title={partyup.title} place={partyup.place} date={partyup.date} assistants={partyup.assistants} picture={partyup.picture} onPartyupClickNotLogged={this.props.onPartyupClickNotLogged}/>)} </li>
                </ul>
            </section> 

            <Footer/>
        </div>
    }
}

export default Landing
