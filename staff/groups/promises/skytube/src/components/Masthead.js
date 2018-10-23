import React, {Component} from 'react'
import Profile from './Profile'

class Masthead extends Component {
    state = {search: ''}

    handleOnChange = event => {
        this.setState({search: event.target.value})
    }

    render() {
        return <header className="container">
                <div className="row">
                    <div className="col">
                        <h1 className="masthead__title">SkyTube</h1>
                    </div>
                    <div className="col-6">
                        <input type="search" value={this.state.search} placeholder="Search" onChange={this.handleOnChange}></input>
                        <button onClick={() => this.props.onSearch(this.state.search)}><span>ICON</span></button>
                    </div>
                    <div className="col">
                        <Profile onClickProfile={this.props.onClickProfile} onLogOut={this.props.onLogOut} user={this.props.user}/>
                    </div>
                </div> 
        </header>
    }
}

export default Masthead
