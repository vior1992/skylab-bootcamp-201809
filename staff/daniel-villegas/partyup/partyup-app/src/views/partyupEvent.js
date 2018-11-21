import React, { Component } from 'react'
import logic from '../logic';

class PartyupEvent extends Component {
    state= { date: '', city: '', title: '', host: '', description: '', assistants: [] }
    
    handleYes() {
        console.log(this.props.partyupId)
        // TODO
        // try {
        //     logic.assistToPartyup(this.props.partyupId)
        //         .then(() => {

        //         })

        // } catch {

        // }
    }

    handleNo() {
        console.log('no')
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
                <div class="partyup__header">
                    <div class="partyup__header--info">
                        <div class="partyup__infoheader--date">
                            <h4>Fecha</h4>
                            <h4>Localidad</h4>
                        </div>
                        <h2>Titulo</h2>
                        <h4>Host</h4>
                    </div>
                    <div>
                        <h2>Asistir</h2>
                        <div>
                            <button onClick={this.handleYes}>Si</button>
                            <button onClick={this.handleNo}>No</button>
                        </div>
                    </div>
                </div>
                <div>
                    <h2>Descripcion</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim fugit commodi maiores laboriosam, reprehenderit consequatur eum ex neque. Fugit temporibus quo natus dolores ducimus assumenda eligendi consequuntur corrupti vero veniam!</p>
                    <h2>Asistentes</h2>
                    <ul>
                        <li>Dani</li>
                        <li>Sasha</li>
                        <li>Eustequio</li>
                    </ul>
                </div>
            </main>

            <footer className="footer">
                <p>© 2018 Partyup  Partyup es una subsidiaria totalmente controlada por Dani Companies Inc.</p>
            </footer>
        </div>
    }
}

export default PartyupEvent