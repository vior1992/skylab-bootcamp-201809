import React, { Component } from 'react'
import logic from '../logic'
import ItemListPartyups from './itemListPartyups'
import CitySelector from './citySelector'
import TagSelector from './tagSelector'


class Home extends Component {
    state = { error: null, allPartyups: [], searchedPartyups: [], city: "", tags: "" }

    componentDidMount() {
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
        //TODO
        try {
            logic.searchPartyups(city, tags)
                .then(partyups => {
                  partyups.forEach(() => {
                    this.setState({ searchedPartyups: partyups })
                      console.log(this.state.searchedPartyups)})
                })
                .then(partyups => {
                    partyups.forEach(() => {
                        this.setState({ allPartyups: partyups })
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

            <section className="main__videosection">
                <div className="main__register">
                    <h2 className="register__title">¿Quieres fiesta?</h2>
                    <p className="register__subtitle">Encuentrala con Partyup</p>
                    <div>
                        <CitySelector onHandleCityChange={this.handleCityChange}/>
                        <TagSelector onHandleTagsChange={this.handleTagsChange}/>
                        <button class="button" onClick={this.handleSubmit}>Buscar</button>
                    </div>
                </div>
            </section>

            <section className="partyups">
                <div className="partyups__titles">
                    <h1>Proximos Partyups</h1>
                </div>
                <div>
                    <ul>
                        <li className="partyups__list"> {this.state.allPartyups.map(partyup => <ItemListPartyups key={partyup.id} id={partyup.id} title={partyup.title} place={partyup.place} date={partyup.date} assistant={null} onPartyupClick={this.props.onPartyupClick}/>)} </li>
                    </ul>
                </div>
                <div className="partyups__titles">
                    <h1>Resultados de la busqueda:</h1>
                </div>
                <div>
                    <ul>
                        <li className="partyups__list"> {this.state.searchedPartyups.map(partyup => <ItemListPartyups key={partyup.id} id={partyup.id} title={partyup.title} place={partyup.place} date={partyup.date} assistant={null} onPartyupClick={this.props.onPartyupClick}/>)} </li>
                    </ul>
                </div>
            </section> 
            <footer className="footer">
                <p>© 2018 Partyup  Partyup es una subsidiaria totalmente controlada por Dani Companies Inc.</p>
            </footer>
        </div>
    }
}

export default Home
