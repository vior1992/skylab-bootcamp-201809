import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <header>
      <section class="navbar bg-gray">
        <div class="container">
          <div class="nav-menu">
            <input class="menu-btn" type="checkbox" id="menu-btn" />
            <label class="menu-icon" for="menu-btn"><span class="navicon"></span></label>
            <ul class="menu">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/now_playing">Now playing</Link></li>
              <li><Link to="/popular">Popular</Link></li>
            </ul>
          </div>
          <div class="logo">
            <span>SM</span>
            <span>Db</span>
          </div>
          <div class="sign">
          <Link to="/signin">Sign In</Link> or <Link to="/login">Log In</Link>
          </div>
        </div>
      </section>
    </header>
  )
}

export default Navbar