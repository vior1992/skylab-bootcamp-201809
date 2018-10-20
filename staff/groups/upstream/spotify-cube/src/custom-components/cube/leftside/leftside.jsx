import React, {Component} from 'react'


export class LeftSide extends Comment{

    render() {
        return (
    
          <section className="left">
            <header className="header">
              <div className="header__logo">
                <img src="./assets/img/logo.png" alt />
              </div>
              <audio className="header__audio" controls autoPlay src="./assets/audio/limps.mp3" />
            </header>
            <section className="left__albums-inf">
              <section className="left__albums-inf__main-section">
                <section className="left__albums-inf__main-section__img-section">
                  <img src="./assets/img/metallica.png" alt />
                </section>
                <section className="left__albums-inf__main-section__name-section">
                  <h1>
                    Songs list
                  </h1>
                </section>
              </section>
            </section>
            <section className="left__albums-list">
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