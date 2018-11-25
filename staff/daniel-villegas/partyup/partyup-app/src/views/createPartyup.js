import React, { Component } from 'react'
import CitySelector from './citySelector'
import TagSelector from './tagSelector'
import Footer from './footer'

class CreatePartyup extends Component {
    state = { 
        title: "", 
        description: "", 
        date: "", 
        city: "", 
        place: "", 
        tags: ""
    }

    handleTitleChange = event => {
        const title = event.target.value

        this.setState({ title })
    }

    handleDescriptionChange = event => {
        const description = event.target.value

        this.setState({ description })
    }

    handleDateChange = event => {
        const date = event.target.value

        this.setState({ date })
    }

    handleCityChange = event => {
        const city = event.target.value

        this.setState({ city })
    }

    handlePlaceChange = event => {
        const place = event.target.value

        this.setState({ place })
    }

    handleTagsChange = event => {
        const tags = event.target.value

        this.setState({ tags })
    }

    handleSubmit = event => {
        event.preventDefault()

        const { title, description, date, city, place, tags } = this.state

        this.props.onCreatePartyup(title, description, date, city, place, tags)
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
            <div className="create__container">
                <form className="create__formulary" action="">
                    <h4>¿Como se llamara tu PartyUp?</h4>
                    <input className="create__input" type="text" maxlength="22" onChange={this.handleTitleChange}/>
                    <h4>Describelo un poco</h4>
                    <textarea className="create__textarea" placeholder="Donde ireis, que esperas de los asistentes, si hay que llevar algo..." maxlength="288" onChange={this.handleDescriptionChange} cols="5" rows="5"></textarea>
                    <h4>Punto de encuentro</h4>
                    <input className="create__input" placeholder="Un bar, una plaza, una calle..." type="text" maxlength="25" onChange={this.handlePlaceChange}/>
                    <h4>Dia del Partyup</h4>
                    <input type="date" type="date" name="partyup" m min="2018-12-06" max="2020-01-01" defaultValue="2018-12-06" onChange={this.handleDateChange}></input>
                </form>
            </div>
            <div className="create__selects">
                <h4>Ciudad</h4>
                <CitySelector onHandleCityChange={this.handleCityChange}/>
                <h4>Tag</h4>
                <TagSelector onHandleTagsChange={this.handleTagsChange}/>
            </div>
            <div>
                <h3 className="create__error">{this.props.error}</h3>
                <button className="create__button" onClick={this.handleSubmit}>Crear Partyup</button>
            </div>
            <Footer/>
        </div>
    }
}

export default CreatePartyup