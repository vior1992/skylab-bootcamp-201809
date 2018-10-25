import {Component} from 'react'
import { NavLink } from 'react-router-dom'

import template from './templates/Navbar.pug'; 

class Navbar extends Component  {

    authenticated = (sessionStorage.getItem('userId') || sessionStorage.getItem('token'))
    user = JSON.parse(sessionStorage.getItem('user') || null)


    render() {

    return template.call(this, {        
        authenticated: this.authenticated,
        user: this.user,
        NavLink
      });

    }

}

export default Navbar