import React, { Component } from 'react'
import logic from '../logic';
import Footer from './footer'

class PartyupEvent extends Component {
    state= { error: null, 
        date: '', 
        city: '', 
        title: '', 
        user: '', 
        username: '', 
        description: '', 
        assistants: [], 
        usernameAssistants: [],
        actuallUserId: ''
    }

    componentDidMount() {
        const partyupId = this.props.partyupId

        const actuallUserId = this.props.actuallUserId

        this.setState({ actuallUserId })
        
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
            let assistants = []
            let i = 0

            logic.assistToPartyup(partyupId)
                .then(partyAssistants => {
                    partyAssistants.partyup.assistants.forEach(() => {
                        assistants.push(partyAssistants.partyup.assistants[i])
                        this.setState({ assistants })
                        i ++
                    })
                })
                
                .then(() => {
                    let usernameAssistants = []
                    this.state.assistants.forEach(assistant => {
                        logic.searchUserById(assistant)
                            .then(user => {
                                
                                usernameAssistants.push(user.username)
                                this.setState({ usernameAssistants })
                            })
                    })  
                }) 

                .catch(err => this.setState({ error: err.message }))

        } catch (err) {
            this.setState({ error: err.message })
        }
    }

    handleNo(partyupId) {
        if (this.state.actuallUserId !== this.state.user) 

        try {
            logic.notAssistToPartyup(partyupId)
                .then(partyAssistants => {
                    
                    partyAssistants.assistants.forEach(() => {
                    this.setState({ assistants: partyAssistants.assistants })
                    })
                })

                .then(() => {
                    let usernameAssistants = []
                    this.state.assistants.forEach(assistant => {
                        logic.searchUserById(assistant)
                            .then(user => {
                                usernameAssistants.push(user.username)
                                this.setState({ usernameAssistants })
                            })
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

            <Footer/>
        </div>
    }
}

export default PartyupEvent