import React, { Component } from 'react'
import logic from '../../logic'
import ItemListPartyups from '../ItemListPartyups/itemListPartyups'
import Footer from '../Footer/footer'
import HeaderNotLogged from '../HeaderNotLogged/header_notLogged'
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
                <div className="main__register">
                    <h2 className="register__title">¿Quieres fiesta?</h2>
                    <p className="register__subtitle">Encuentrala con Partyup</p>
                    <button className="register__button" onClick={this.props.onRegisterClick}>Registrarse</button>
                </div>
            </section>

            <section className="partyups">
                <div className="partyups__titles">
                    <h2>Proximos Partyups</h2>
                </div>
                <ul>
                    <li className="partyups__list"> {this.state.allPartyups.map(partyup => <ItemListPartyups key={partyup.id} id={partyup.id} title={partyup.title} place={partyup.place} date={partyup.date} assistant={null} onPartyupClick={this.props.onPartyupClick}/>)} </li>
                </ul>
            </section> 

            <Footer/>
        </div>
    }
}

export default Landing
