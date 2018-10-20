import React, {Component} from 'react'

export class BackSide extends Component{

    state = {}

    render() {
        return (
    
          <section classname="back">
            <header classname="header">
              <div classname="header__logo">
                <img src="./assets/img/logo.png" alt />
              </div>
            </header>
            <section classname="back__albums-inf">
              <section classname="back__albums-inf__main-section">
                <section classname="back__albums-inf__main-section__img-section">
                  <img src="./assets/img/metallica.png" alt />
                </section>
                <section classname="back__albums-inf__main-section__name-section">
                  <h1>
                    Album list
                  </h1>
                </section>
              </section>
            </section>
            <section classname="back__albums-list">
              <ul classname="list">
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