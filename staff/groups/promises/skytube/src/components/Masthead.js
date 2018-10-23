import React, {Component} from 'react'
import Profile from './Profile'

class Masthead extends Component {
    state = {search: ''}

    handleOnChange = event => {
        this.setState({search: event.target.value})
    }

    render() {
        return <nav className="masthead">
                    <h1 className="masthead__title">SkyTube</h1>
                    <div className="masthead__search">
                        <input type="search" value={this.state.search} placeholder="Search" onChange={this.handleOnChange}></input>
                        <button onClick={() => this.props.onSearch(this.state.search)}><span>ICON</span></button>
                    </div>
                        <Profile onClickProfile={this.props.onClickProfile} onLogOut={this.props.onLogOut} user={this.props.user}/>
        </nav>
    }
}

export default Masthead
