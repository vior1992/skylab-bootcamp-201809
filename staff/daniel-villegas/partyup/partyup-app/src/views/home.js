import React, { Component } from 'react'
import logic from '../logic'

class Home extends Component {
    state = { partyups: [] }

    async componentDidMount() {
        // await logic.listPartyups()
        //     .then(partyups => { this.setState({ partyups }) })
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
                    <a href="login.html" onClick={this.props.onSearchClick}>Ver todo</a>
                </div>
                <div className="partyups__list">
                    <div className="partyups__event" onClick={this.props.onPartyupClick}>
                        <img className="partyups__picture"src="https://media-cdn.tripadvisor.com/media/photo-s/06/21/79/4c/tiffin-mama.jpg"/>
                        <div className="partyups__info">
                            <p className="info__date">Sabado, 17 de noviembre 8:00</p>
                            <h4 className="info__title">Skylabeers</h4>
                            <p className="info__description"> Fiesta en skylab con cerveza</p>
                            <p className="info__host">Creado por: Dani</p>
                        </div>
                    </div>
                </div>  
            </section> 
            <footer className="footer">
                <p>© 2018 Partyup  Partyup es una subsidiaria totalmente controlada por Dani Companies Inc.</p>
            </footer>
        </div>
    }
}

export default Home
