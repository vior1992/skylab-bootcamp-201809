import React, {Component} from 'react'

export default class BackSide extends Component{

    state = {}

    render() {
        return (
    
          <section className="back">
            <header className="header">
              <div className="header__logo">
                <img src="./assets/img/logo.png" alt="" />
              </div>
            </header>
            <section className="back__albums-inf">
              <section className="back__albums-inf__main-section">
                <section className="back__albums-inf__main-section__img-section">
                  <img src="./assets/img/metallica.png" alt="" />
                </section>
                <section className="back__albums-inf__main-section__name-section">
                  <h1>
                    Album list
                  </h1>
                </section>
              </section>
            </section>
            <section className="back__albums-list">
              <ul className="list">
                <li><a href="#">lorem ipsum jajajaja</a></li>
                <li><a href="#">lorem ipsum jajajaja</a></li>
                <li><a href="#">lorem ipsum jajajaja</a></li>
                <li><a href="#">lorem ipsum jajajaja</a></li>
                <li><a href="#">lorem ipsum jajajaja</a></li>
                <li><a href="#">lorem ipsum jajajaja</a></li>
                <li><a href="#">lorem ipsum jajajaja</a></li>
                <li><a href="#">lorem ipsum jajajaja</a></li>
                <li><a href="#">lorem ipsum jajajaja</a></li>
                <li><a href="#">lorem ipsum jajajaja</a></li>
                <li><a href="#">lorem ipsum jajajaja</a></li>
                <li><a href="#">lorem ipsum jajajaja</a></li>
                <li><a href="#">lorem ipsum jajajaja</a></li>
                <li><a href="#">lorem ipsum jajajaja</a></li>
                <li><a href="#">lorem ipsum jajajaja</a></li>
                <li><a href="#">lorem ipsum jajajaja</a></li>
                <li><a href="#">lorem ipsum jajajaja</a></li>
                <li><a href="#">lorem ipsum jajajaja</a></li>
              </ul>
            </section>
          </section>
        )
      }
}