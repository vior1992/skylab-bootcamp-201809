import React, {Component} from 'react'
import Profile from './Profile'

class Masthead extends Component {
    state = {search: ''}

    handleOnChange = event => {
        this.setState({search: event.target.value})
    }

    render() {
        return <header className="masthead">
                <h1 className="masthead__title">SkyTube</h1>
                <div>
                    <input type="search" value={this.state.search} placeholder="Search" onChange={this.handleOnChange}></input>
                    <button onClick={() => this.props.onSearch(this.state.search)}><span>ICON</span></button>
                </div>
                <Profile onLogOut={this.props.onLogOut} user={this.props.user}/>
        </header>
    }
}

export default Masthead
