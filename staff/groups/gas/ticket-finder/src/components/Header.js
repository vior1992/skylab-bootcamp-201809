import React, {Component} from 'react'
import { withRouter } from 'react-router-dom'
// import Button from 'mdbootstrap'

class Header extends Component {

    goToProfile = () => {
         this.props.history.push('/profile')

    }

    goToFavourites = () => {
        this.props.history.push('/favourites')

   }

    render() {
    return <div>
        <button onClick = { this.goToProfile }>Profile</button>
        <button onClick = { this.goToFavourites }>Favourites</button>
        <button onClick = { this.props.logout }>Logout</button>



        </div>
    }
}

// export default Header
export default withRouter(Header);