import React, { Component } from 'react'
import logic from '../../logic';
import Footer from '../Footer'
import HeaderLogged from '../HeaderLogged'
import './styles.css'

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
                            this.setState({ usernameAssistants: [...oldAssistants, user.avatar] })
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
                                
                                usernameAssistants.push(user.avatar)
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
                                usernameAssistants.push(user.avatar)
                                this.setState({ usernameAssistants })
                            })
                    })                 
                })

                .catch(err => this.setState({ error: err.message }))

        } catch (err) {
            this.setState({ error: err.message })
        }
    }

    handleDelete(partyupId) {
        if (this.state.actuallUserId === this.state.user)
        
        try{
            logic.deletePartyup(partyupId)
                .then(() => {
                    this.props.onDeleteClick()
                })
                .catch(err => this.setState({ error: err.message }))

        } catch (err) {
            this.setState({ error: err.message })
        }
    }

    render() {
        return <div>
            <HeaderLogged onLogoClick={this.props.onLogoClick} onCreatePartyupClick={this.props.onCreatePartyupClick} onProfileClick={this.props.onProfileClick} onLogoutClick={this.props.onLogoutClick} />
            
            <main>
                <div className="partyup__header">
                    <div className="partyup__header--info">
                        <div className="partyup__infoheader--date">
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
                            <button onClick={() => this.handleDelete(this.props.partyupId)}>Eliminar</button>
                        </div>
                    </div>
                </div>
                <div>
                    <h2>Descripcion</h2>
                    <p>{this.state.description}</p>
                    <h2>Asistentes</h2>
                    <ul className="partyup__assistant--list">
                        {this.state.usernameAssistants.map(assistant => <li> <img className="partyup__assistant--avatar" onClick={null} src={assistant}></img></li>)}
                    </ul>
                </div>
            </main>

            <Footer/>
        </div>
    }
}

export default PartyupEvent