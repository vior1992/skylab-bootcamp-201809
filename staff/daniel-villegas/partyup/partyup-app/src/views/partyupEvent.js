import React, { Component } from 'react'
import logic from '../logic';

class PartyupEvent extends Component {
    state= { error: null, date: '', city: '', title: '', user: '', username: '', description: '', assistants: [], usernameAssistants: [] }

    componentDidMount() {
        const partyupId = this.props.partyupId

        logic.searchPartyupsById(partyupId)
            .then(partyup => {
                const { date, city, title, user, description, assistants} = partyup
                
                this.setState({ date, city, title, user, description, assistants })
            })

            .then(() => {
                logic.searchUserById(this.state.user)
                    .then(user => {
                        const { username } = user
                        this.setState({ username })
                    })
            })  

            .then(() => {
                this.state.assistants.forEach(assistant => {
                    logic.searchUserById(assistant)
                        .then(user => {
                            const oldAssistants = this.state.usernameAssistants
                            this.setState({ usernameAssistants: [...oldAssistants, user.username] })
                    })
                })
            })    
    }
    
    handleYes(partyupId) {
        try {
            logic.assistToPartyup(partyupId)
                .then(partyAssistants => {
                    partyAssistants.forEach(() => {
                        this.setState({ assistants: partyAssistants })
                    })
                })
                .catch(err => this.setState({ error: err.message }))

        } catch (err) {
            this.setState({ error: err.message })
        }
    }

    handleNo(partyupId) {
        try {
            logic.notAssistToPartyup(partyupId)
                .then(partyAssistants => {
                    partyAssistants.forEach(() => {
                        this.setState({ assistants: partyAssistants })
                    })
                })
                .catch(err => this.setState({ error: err.message }))

        } catch (err) {
            this.setState({ error: err.message })
        }
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
                            <h4>{this.state.date}</h4>
                            <h4>{this.state.city}</h4>
                        </div>
                        <h2>{this.state.title}</h2>
                        <h4>{this.state.username}</h4>
                    </div>
                    <div>
                        <h2>Asistir</h2>
                        <div>
                            <button onClick={() => this.handleYes(this.props.partyupId)}>Si</button>
                            <button onClick={() => this.handleNo(this.props.partyupId)}>No</button>
                        </div>
                    </div>
                </div>
                <div>
                    <h2>Descripcion</h2>
                    <p>{this.state.description}</p>
                    <h2>Asistentes</h2>
                    <ul>
                        {this.state.usernameAssistants.map(assistant => <li>{assistant}</li>)}
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