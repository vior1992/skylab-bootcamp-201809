import React, { Component } from 'react'
import logic from '../logic'
import ItemListPartyups from './itemListPartyups'

class Home extends Component {
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
            <header className="site__header">
                <a href="#" className="logo" onClick={this.props.onLogoClick}>Logo</a>
                
                <div className="actions">
                    <a href="#" className="create__link" onClick={this.props.onCreatePartyupClick}>Crear Partyup</a>
                    <a href="#" className="profile__link" onClick={this.props.onProfileClick}>Perfil</a>
                    <a href="#" className="logout__link" onClick={this.props.onLogoutClick}>Cerrar sesión</a>
                </div>
            </header>

            <section className="main__videosection">
                <div className="main__register">
                    <h2 className="register__title">¿Quieres fiesta?</h2>
                    <p className="register__subtitle">Encuentrala con Partyup</p>
                    <button class="button" onClick={this.props.onSearchClick}>Buscar</button>
                </div>
            </section>

            <section className="partyups">
                <div className="partyups__titles">
                    <h3>Proximos Partyups</h3>
                    <a href="#" onClick={this.props.onSearchClick}>Ver todo</a>
                </div>
                    <ul>
                        <li className="partyups__list"> {this.state.allPartyups.map(partyup => <ItemListPartyups key={partyup._id} id={partyup._id} title={partyup.title} place={partyup.place} date={partyup.date} assistant={null} onPartyupClick={this.props.onPartyupClick}/>)} </li>
                    </ul>
            </section> 
            <footer className="footer">
                <p>© 2018 Partyup  Partyup es una subsidiaria totalmente controlada por Dani Companies Inc.</p>
            </footer>
        </div>
    }
}

export default Home
