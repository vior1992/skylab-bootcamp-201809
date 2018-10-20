import React, {Component} from 'react'


export default class RightSide extends Component{

    state = {}

    render() {
        return (
    
          <section className="right">
            <header className="header">
              <div className="header__logo">
                <img src="./assets/img/logo.png" alt />
              </div>
            </header>
            <section className="right__artists-inf">
              <section className="right__artists-inf__main-section">
                <section className="right__artists-inf__main-section__img-section">
                  <img src="./assets/img/metallica.png" alt />
                </section>
                <section className="right__artists-inf__main-section__name-section">
                  <h1>
                    Metallica
                  </h1>
                </section>
              </section>
            </section>
            <section className="right__artists-list">
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
        );
      }
}
