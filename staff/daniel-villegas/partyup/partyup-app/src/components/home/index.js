import React, { Component } from 'react'
import logic from '../../logic'
import ItemListPartyups from '../ItemListPartyups'
import CitySelector from '../citySelector'
import TagSelector from '../tagSelector'
import HeaderLogged from '../HeaderLogged'
import Footer from '../Footer'
import './styles.css'


class Home extends Component {
    state = { error: null, allPartyups: [], searchedPartyups: [], city: "", tags: "", actuallUserId: ''}

    componentDidMount() {
        logic.retrieveLoggedUser()
            .then(user => {
                const { id } = user

                const actuallUserId = id
                
                this.setState({ actuallUserId })
            })

        logic.listPartyups()
            .then(partyups => {
                partyups.forEach(() => {
                    this.setState({ allPartyups: partyups })
                })
            })        
    }

    handleCityChange = event => {
        let city = event.target.value

        this.setState({ city })
    }

    handleTagsChange = event => {
        let tags = event.target.value

        this.setState({ tags })
    }

    handleSubmit = event => {
        event.preventDefault()

        let { city, tags } = this.state

        this.handleSearchPartyups(city, tags)
    } 

    handleSearchPartyups = (city, tags) => {
        try {
            if(city && tags){
                logic.searchPartyups(city, tags)
                    .then(partyups => {
                        
                        if (partyups) 
                        partyups.forEach(() => {
                            this.setState({ searchedPartyups: partyups })
                        })
                        //TODO MESSAGE NO RESULT ON SEARCH
                        // else
                        //     this.setState({ searchedPartyups: [] })
                    })
                    .catch(err => this.setState({ error: err.message }))

            } else if(city && !tags){
                logic.searchPartyups(city, undefined)
                    .then(partyups => {
                        partyups.forEach(() => {
                            this.setState({ searchedPartyups: partyups })
                        })
                    })
                    .catch(err => this.setState({ error: err.message }))

            } else if(!city && tags){
                logic.searchPartyups(undefined, tags)
                    .then(partyups => {
                        partyups.forEach(() => {
                            this.setState({ searchedPartyups: partyups })
                        })
                    })
                    .catch(err => this.setState({ error: err.message }))
                    
            } else if(!city && !tags){
                logic.searchPartyups(undefined, undefined)
                    .then(partyups => {
                        partyups.forEach(() => {
                            this.setState({ searchedPartyups: partyups })
                        })
                    })
                    .catch(err => this.setState({ error: err.message }))
            }
                
        } catch (err) {
            this.setState({ error: err.message })
        }
    }

    render() {
        return <div>
            <HeaderLogged onLogoClick={this.props.onLogoClick} onCreatePartyupClick={this.props.onCreatePartyupClick} onProfileClick={this.props.onProfileClick} onLogoutClick={this.props.onLogoutClick} />
           
            <section className="main__videosection">
                <div className="main__register">
                    <h2 className="register__title">¿Quieres fiesta?</h2>
                    <p className="register__subtitle">Encuentrala con Partyup</p>
                    <div>
                        <CitySelector onHandleCityChange={this.handleCityChange}/>
                        <TagSelector onHandleTagsChange={this.handleTagsChange}/>
                        <button className="search__button" onClick={this.handleSubmit}>Buscar</button>
                    </div>
                </div>
            </section>

            <section className="partyups">
                <div className="partyups__titles">
                    <h1>Resultados de la busqueda:</h1>
                </div>
                <div>
                    <ul>
                        {/* TODO TERNARIO IF SEARCEDPARTYUPS LISTA IF NOT NOT RESULT MESSAGE */}
                        <li className="partyups__list"> {this.state.searchedPartyups.map(partyup => <ItemListPartyups key={partyup.id} id={partyup.id} title={partyup.title} place={partyup.place} date={partyup.date} assistants={partyup.assistants} picture={partyup.picture} actuallUserId={this.state.actuallUserId} onPartyupClick={this.props.onPartyupClick}/>)} </li>
                    </ul>
                </div>
                <div className="partyups__titles">
                    <h1>Proximos Partyups</h1>
                </div>
                <div>
                    <ul>
                        <li className="partyups__list"> {this.state.allPartyups.map(partyup => <ItemListPartyups key={partyup.id} id={partyup.id} title={partyup.title} place={partyup.place} date={partyup.date} assistants={partyup.assistants} picture={partyup.picture} actuallUserId={this.state.actuallUserId} onPartyupClick={this.props.onPartyupClick}/>)} </li>
                    </ul>
                </div>
            </section> 
            <Footer/>
        </div>
    }
}

export default Home
