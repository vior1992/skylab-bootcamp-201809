import React, { Component } from 'react'

class CreatePartyup extends Component {
    state = { 
        title: "", 
        description: "", 
        date: "", 
        city: "", 
        place: "", 
        tags: "", 
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

    handleSubmit = event  => {
        event.preventDefault()

        const { title, description, date, city, place, tags } = this.state

        this.props.onCreateCreatePartyup(title, description, date, city, place, tags)
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
            <div class="create__container">
                <form class="create__formulary" action="">
                    <h4>¿Como se llamara tu PartyUp?</h4>
                    <input class="create__input" type="text"/>
                    <h4>Describelo un poco</h4>
                    <textarea class="create__textarea" placeholder="Donde ireis, que esperas de los asistentes, si hay que llevar algo..." name="" id="" cols="30" rows="10"></textarea>
                    <h4>Punto de encuentro</h4>
                    <input class="create__input" placeholder="Un bar, una plaza, una calle..." type="text"/>
                </form>
            </div>
            <div class="create__selects">
                <h4>Ciudad</h4>
                <select defaultValue="CHOOSE" name="city" id="" onChange="">
                    <option value="CHOOSE">Elige una ciudad</option>
                    <option value="Barcelona">Barcelona</option>
                    <option value="Madrid">Madrid</option>
                    <option value="Bilbao">Bilbao</option>
                    <option value="Valencia">Valencia</option>
                    <option value="Sevilla">Sevilla</option>
                </select>
                <h4>Tag</h4>
                <select defaultValue="CHOOSE" name="city" id="" onChange="">
                    <option value="CHOOSE">Elige un tag</option>
                    <option value="1">Pop</option>
                    <option value="2">Jazz</option>
                    <option value="3">Rock</option>
                    <option value="4">Heavy</option>
                    <option value="5">Indie</option>
                    <option value="6">Reggae</option>
                    <option value="7">Reggaeton</option>
                    <option value="8">Blues</option>
                    <option value="9">Soul</option>
                    <option value="10">Electronica</option>
                    <option value="11">Clasica</option>
                    <option value="12">Desfase</option>
                    <option value="13">De tranquis</option>
                    <option value="14">Otros</option>
                    <option value="15">Varios</option>
                </select>
            </div>
            <div>
                <button class="create__button">Crear Partyup</button>
            </div>
            <footer class="footer">
                <p>© 2018 Partyup  Partyup es una subsidiaria totalmente controlada por Dani Companies Inc.</p>
            </footer>
        </div>
    }
}

export default CreatePartyup