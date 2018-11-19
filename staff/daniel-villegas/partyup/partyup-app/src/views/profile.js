import React, { Component } from 'react'
import logic from '../logic';

class Profile extends Component {
    state = { name: '', surname: '', username: '', city: '', id: '', createdPartyups: [], willAssistTo:[]}

    componentDidMount(){
        logic.retrieveLoggedUser()
            .then(user => {
                const { name, surname, city, username, id } = user
                this.setState({ name, surname, city, username, id })
            })

        logic.listPartyupsCreatedBy()
        //Crear ruta para listar partyups de este user
        //TODO listar party ups en general
            .then(partyups => {
                partyups.filter(this.state.id)
                const { } = partyups
                console.log(partyups)

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
                    <ul>
                        <li>Skylabeers</li>
                        <li>Peludos fest</li>
                        <li>Chill resaca</li>
                    </ul>
                </div>
                <div>
                    <h2>Asistira a</h2>
                    <ul>
                        <li>Cena fin de proyecto</li>
                        <li>Manu's waves</li>
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