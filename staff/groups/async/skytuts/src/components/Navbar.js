import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {

    const authenticated = (sessionStorage.getItem('userId') || sessionStorage.getItem('token'))
    const user = JSON.parse(sessionStorage.getItem('user') || null)

    return (
        <nav>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                {!authenticated &&
                    <li><NavLink to="/login">Login</NavLink></li>
                }
                {!authenticated &&
                    <li><NavLink to="/register">Register</NavLink></li>
                }
                {authenticated &&
                    <li><NavLink to="/profile">{user.data.username}</NavLink></li>
                }
            </ul>
        </nav>
    )
}

export default Navbar