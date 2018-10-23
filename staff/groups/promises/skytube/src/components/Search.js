import React, {Component} from 'react'

class Search extends Component {
    state = {search: ''}

    handleOnChange = event => {
        this.setState({search: event.target.value})
    }

    render() {
        return <div className="search">
            <input className="search__input" type="search" value={this.state.search} placeholder="Search" onChange={this.handleOnChange}></input>
            <button className="search__button" onClick={() => this.props.onSearch(this.state.search)}><span>ICON</span></button>
        </div>
    }
}

export default Search
