import React from 'react'
import { Link } from 'react-router-dom'
import $ from 'jquery'

const closeMenu = () => {
  $('.menu-btn').prop('checked', false)
}

const Navbar = () => {
  return (
    <header>
      <section className="navbar bg-gray">
        <div className="container">
          <div className="nav-menu">
            <input className="menu-btn" type="checkbox" id="menu-btn" />
            <label className="menu-icon" htmlFor="menu-btn"><span className="navicon"></span></label>
            <ul className="menu">
              <li><Link to="/" onClick={closeMenu}>Search</Link></li>
              <li><Link to="/movies/now_playing" onClick={closeMenu}>Now playing</Link></li>
              <li><Link to="/movies/popular" onClick={closeMenu}>Popular</Link></li>
            </ul>
          </div>
          <div className="logo">
            <span>SM</span>
            <span>Db</span>
          </div>
          <div className="sign">
          <Link to="/signin">Sign In</Link> or <Link to="/login">Log In</Link>
          </div>
        </div>
      </section>
    </header>
  )
}

export default Navbar