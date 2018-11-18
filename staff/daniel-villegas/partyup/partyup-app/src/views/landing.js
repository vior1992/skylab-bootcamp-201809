import React, { Component } from 'react';

class Landing extends Component {
  render() {
    return <div>
        <header className="header">
            <div className="header__items">
                <a className="header__logo" href="./landing.html">logo</a>
                
                <div className="header__ancores">
                    <a href="./login.html">Iniciar sesion</a>
                    <a href="./register.html">Registrarse</a>
                </div>
            </div>
        </header>

        <main>
            <section className="main__videosection">
                <video className="main__video" src=""></video>
                <div className="main__register">
                    <h2>¿Quieres fiesta?</h2>
                    <p>Encuentrala con Partyup</p>
                    <button onclick="">Registrarse</button>
                </div>
            </section>
            <section className="partyups">
                <div className="partyups__titles">
                    <h3>Proximos Partyups</h3>
                    <a href="login.html">Ver todo</a>
                </div>
                <div className="partyups__list">
                    <div className="partyups__event">
                        <p>Sabado, 17 de noviembre 8:00</p>
                        <h4>Skylabeers</h4>
                        <p>Fiesta en skylab con cerveza</p>
                        <p>Creado por: Dani</p>
                    </div>
                    <div className="partyups__event">
                        <p>Sabado, 18 de noviembre 8:00</p>
                        <h4>Skylabeers</h4>
                        <p>Fiesta en skylab con cerveza</p>
                        <p>Creado por: Dani</p>
                    </div>
                    <div className="partyups__event">
                        <p>Sabado, 19 de noviembre 8:00</p>
                        <h4>Skylabeers</h4>
                        <p>Fiesta en skylab con cerveza</p>
                        <p>Creado por: Dani</p>
                    </div>
                </div>  
            </section> 
        </main>
        
        <footer className="footer">
            <p>© 2018 Partyup  Partyup es una subsidiaria totalmente controlada por Dani Companies Inc.</p>
        </footer>
    </div>
    
  }
}

export default App;
